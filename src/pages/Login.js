import React from "react";
import {
  Container,
  Button,
  FormGroup,
  Input,
  Row,
  Col,
  Form,
} from "reactstrap";
import { connect } from "react-redux";
import { userActions } from "actions/user.actions";
import { Redirect } from "react-router-dom";
import { __EMPLOYER_DASHBOARD } from "routes";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // email: "manish@gmail.com",
      email: 'janedoe@gmail.com',
      password: "password",
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
  };


  render() {
    const {auth} = this.props;
    if (auth && auth.loggedIn && auth.isEmployer) return <Redirect to={__EMPLOYER_DASHBOARD} />
    if (auth && auth.loggedIn && !auth.isEmployer) return <Redirect to="/workers/dashboard" />
    return (
      <>
        <div
          className="page-header index-header"
          style={{ background: "white", position: "relative" }}
        >
          <div
            style={{ position: "absolute", bottom: "-52px", right: "-60px" }}
          >
            <img
              width="1000"
              alt="..."
              className="img"
              style={{ marginTop: "-30px" }}
              src={require("assets/img/pablo-done.png")}
            />
          </div>
          <Container style={{ zIndex: 1 }}>
            <div className="motto">
              <Row>
                <Col md="5">
                  <div className="pt-2 mb-2 text-center">
                    <h1
                      className="f- text-center mb-4 text-uppercase"
                      style={{ fontSize: "3rem" }}
                    >
                      Login
                    </h1>
                    <Form onSubmit={this.handleSubmit}>
                      <FormGroup>
                        <Input
                          onChange={this.handleChange}
                          value={this.state.email}
                          name="email"
                          className="border-input"
                          placeholder="Enter the worker's email"
                          type="email"
                          size="lg"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Input
                          onChange={this.handleChange}
                          value={this.state.password}
                          name="password"
                          className="border-input"
                          placeholder="Enter Password"
                          type="password"
                          size="lg"
                        />
                      </FormGroup>
                      <Button
                        className="btn mr-1"
                        onClick={this.handleSubmit}
                        // color=""
                        // outline
                        size="lg"
                        type="button"
                        style={{
                          width: "100%",
                          background: "#82b5a5",
                          border: "none",
                        }}
                      >
                        <span className="text-white">Login</span>
                      </Button>
                    </Form>
                  </div>
                </Col>
                <Col className="text-center" md="7"></Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.authentication });
const mapDispatchToProps = { login: userActions.login };
const connected = connect(mapStateToProps, mapDispatchToProps)(Login);

export { connected as Login };
