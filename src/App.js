import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading-bar";
import { Button } from "reactstrap";
import { history } from "./helpers";
import { userActions } from "actions/user.actions";

// import LoadingBar from 'react-redux-loading-bar'
import Index from "pages/Index";
import { Login } from "pages/Login";
import { EmployersDashboard } from "pages/employer/Dashboard";
import { WorkersDashboard } from "pages/worker/Dashboard";
import { Workers } from "pages/employer/jobs/Workers";
import { JobsCreate } from "pages/employer/jobs/Create";
import { JobsShow } from "pages/employer/jobs/Show";
import { WorkerJobIndex } from "pages/worker/jobs/WorkerJobIndex";
import { WorkerJobShow } from "pages/worker/jobs/WorkerJobShow";
import { WorkerJobApply } from "pages/worker/jobs/WorkerJobApply";
import { JobIndex } from "pages/employer/jobs/Index";

// Route paths
import { __LOGIN_ROUTE } from "routes";
import { __WORKER_DASHBOARD } from "routes";
import { __EMPLOYER_DASHBOARD } from "routes";
import { __JOB_SHOW } from "routes";
import { __JOB_CREATE } from "routes";
import { __JOB_WORKERS_SHOW } from "routes";
import { __JOB_INDEX } from "routes";
import { __WORKER_JOB_INDEX } from "routes";
import { __WORKER_JOB_SHOW } from "routes";
import { __WORKER_JOB_APPLY } from "routes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingBar: 0,
    };
  }
  logout() {
    // this.props.logout();
    console.info(this.props)

  }
  render() {
    const props = this.props;
    return (
      <div>
        <div style={{ position: "relative", height: "5px", top: 0 }}>
          <LoadingBar style={{ backgroundColor: "#f11946", height: "5px" }} />
        </div>

        <Router history={history}>
          <Switch>
            <Route exact path="/" render={(props) => <Index {...props} />} />
            <Route path={__LOGIN_ROUTE} component={Login} />

            {/* Employer Routes */}
            <EmployerRoute
              path={__EMPLOYER_DASHBOARD}
              component={EmployersDashboard}
              {...props}
            />
            <EmployerRoute path={__JOB_INDEX} component={JobIndex} {...props} />
            <EmployerRoute
              path={__JOB_CREATE}
              component={JobsCreate}
              {...props}
            />
            <EmployerRoute
              exact
              path={__JOB_SHOW(":_id")}
              component={JobsShow}
              {...props}
            />
            <EmployerRoute
              path={__JOB_WORKERS_SHOW(":_id")}
              component={Workers}
              {...props}
            />

            {/* Worker Routes */}
            <PrivateRoute
              path={__WORKER_DASHBOARD}
              component={WorkersDashboard}
              {...props}
            />
            <PrivateRoute
              exact
              path={__WORKER_JOB_SHOW(":_id")}
              component={WorkerJobShow}
              {...props}
            />
            <PrivateRoute
              path={__WORKER_JOB_APPLY(":_id")}
              component={WorkerJobApply}
              {...props}
            />
            <PrivateRoute
              path={__WORKER_JOB_INDEX}
              component={WorkerJobIndex}
              {...props}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const EmployerRoute = ({ component: Component, ...rest }) => {
  if (rest.auth && rest.auth.isEmployer) {
    return (
      <PrivateRoute
        component={Component}
        path={rest.path}
        auth={rest.auth}
        {...rest}
      />
    );
  }
  return <Redirect to={__LOGIN_ROUTE} />;
};

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

const mapStateToProps = (state) => ({
  auth: state.authentication,
  state: state,
});
const mapDispatchToProps = { logout: userActions.logout };
const connected = connect(mapStateToProps, mapDispatchToProps)(App);

export { connected as App };
