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
      title: "",
      description: "",
      numberOfPeople: "",
      requirment: "",
      location:"",
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
                      name="title"
                      className="border-input"
                      placeholder="Give this job a title"
                      type="text"
                      size="lg"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.description}
                      name="description"
                      className="border-input"
                      placeholder="Tell the worker about the job"
                      type="textarea"
                      style={{ height: 200 }}
                      size="lg"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.numberOfPeople}
                      name="numberOfPeople"
                      className="border-input"
                      placeholder="How Many Workers do you required"
                      type="number"
                      size="lg"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button
                      className="btn mr-1"
                      color="danger"
                      size="lg"
                      type="button"
                    >
                      <span className="text-white">Submit</span>
                    </Button>
                    <Link to={__EMPLOYER_DASHBOARD}>
                      <Button
                        className="btn mr-1"
                        color="dark"
                        outline
                        size="lg"
                        type="button"
                      >
                        <span className="text-dark">back to dashboard</span>
                      </Button>
                    </Link>
                  </FormGroup>
                </Form>
              </Col>
              <Col md="6">Sahani</Col>
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
