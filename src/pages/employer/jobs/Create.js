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
import { __EMPLOYER_DASHBOARD } from "routes";
import { Link } from "react-router-dom";

class JobsCreate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "manish@gmail.com",
      password: "password",
      title: "",
    };
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    console.info("login form submitted");
    this.props.login(this.state);
  };

  render() {
    console.info(this.props);

    return (
      <>
        <div className="section " id="features">
          <Container>
            <Row>
              <Col className="text-left" md="8">
                <h2 className="title f-anon text-capitalize">Post a new job</h2>
                <h5 className="description mb-4">
                  This is the paragraph where you can write more details about
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.title}
                      name="Title"
                      className="border-input"
                      placeholder="Give this a title"
                      type="email"
                      size="lg"
                    />
                  </FormGroup>
                </Form>
              </Col>
              <Col md="6">Sahani</Col>
            </Row>
            <Row>
              <Link
                to={__EMPLOYER_DASHBOARD}
                className="btn btn-round bg-primay"
              >
                back to dashboard
              </Link>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ auth: state.authentication });
const mapDispatchToProps = { login: userActions.login };
const connected = connect(mapStateToProps, mapDispatchToProps)(JobsCreate);

export { connected as JobsCreate };
