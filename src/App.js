import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { history } from "./helpers";
// import { Login, Home, Dashboard, Report } from './components'

// import LoadingBar from 'react-redux-loading-bar'
import Index from "pages/Index";
import { Login } from "pages/Login";
import { EmployersDashboard } from "pages/employer/Dashboard";

// Route paths
import { __LOGIN_ROUTE } from "routes";
import { __WORKER_DASHBOARD } from "routes";
import { __EMPLOYER_DASHBOARD } from "routes";
import { WorkersDashboard } from "pages/worker/Dashboard";
import { __JOB_CREATE } from "routes";
import { JobsCreate } from "pages/employer/jobs/Create";

class App extends React.Component {
  render() {
    // console.info(this.props);
    const props = this.props;
    return (
      <div>
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={(props) => <Index {...props} />} />
            <Route path={__LOGIN_ROUTE} component={Login} />

            {/* Employer Routes */}
            <EmployerRoute path={__EMPLOYER_DASHBOARD} component={EmployersDashboard} {...props} />
            <EmployerRoute path={__JOB_CREATE} component={JobsCreate} {...props} />

            {/* Worker Routes */}
            <PrivateRoute path={__WORKER_DASHBOARD} component={WorkersDashboard} {...props} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const EmployerRoute = ({component: Component, ...rest}) => {
  if (rest.auth && rest.auth.isEmployer) {
    return <PrivateRoute component={Component} path={rest.path} auth={rest.auth} {...rest} />
  }
  return <Redirect to={__LOGIN_ROUTE} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        rest.auth.loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: __LOGIN_ROUTE, state: { from: props.location } }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state) => ({ auth: state.authentication });
// const mapDispatchToProps = { login: userActions.login };
const connected = connect(mapStateToProps, {})(App);

export { connected as App };
