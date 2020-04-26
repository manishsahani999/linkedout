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
import { Link } from "react-router-dom";
import { jobActions } from "actions/job.action";
import { userActions } from "actions/user.actions";
import { __WORKER_JOB_SHOW } from "routes";
import { __WORKER_JOB_INDEX } from "routes";

const Applied = ({ info }) => {
  let color = "green";
  if (info.status === "pending") color = "#0a66c2";
  else if (info.status === "rejected") color = "#c70039";

  return (
    <>
      <div
        className="page-header index-header"
        style={{ background: "white", position: "relative" }}
      >
        <Container style={{ zIndex: 1 }}>
          <div className="motto">
            <div>
              {/* <Icon /> */}

              <span className="index-icon-text f-righteous">
                <span
                  className="text-white"
                  style={{
                    background: color,
                    paddingLeft: "1rem",
                    paddingRight: "1rem",
                    borderRadius: "10px",
                  }}
                >
                  {info.status}
                </span>
              </span>
            </div>
            <h1 className="font-for-motto text-left">
              {info.status === 'pending' && (<>You have already applied</>)}
              {info.status === 'rejected' && (<>Sorry, you didn't jot the job.</>)}
              {info.status === 'accepted' && (<>Wohoo, You got the job</>)}
            </h1>
            <h4 className="text-dark mb-5 f-anon">
            {info.status === 'pending' && (<>Employers are making there decisions. thank you for you patiance.</>)}
              {info.status === 'rejected' && (<>Employers made the decision to move forward with other workers.
              you can browse through our more jobs.</>)}
              {/* These are the long lived disposable kubernetes containers,
        that remembers its pervious state even after getting
        destroyed.
        Remocn leads to frictionless coding to develop multi-language Cloud & Desktop IDEs with state-of-the-art web technologies. */}
            </h4>
            {/* <Link to={__LOGIN_ROUTE}>
            <Button
              className="btn-round mr-1"
              color="dark"
              outline
              size="lg"
              type="button"
            >
              <span className="text-dark">Worker Login</span>
            </Button>
          </Link> */}

            {info.status === "rejected" && (
              <Button
                className="btn-round mr-1"
                color="dark"
                size="lg"
                type="button"
                href={__WORKER_JOB_INDEX}
              >
                <span className="">check for other jobs</span>
              </Button>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

class WorkerJobApply extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: "",
    };
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    this.props.getJob(id);
    this.props.me();
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.apply(this.props.match.params._id, this.state);
  };

  checkForApplied = (applicants, user) => {
    const ans = applicants.filter((item) => item.employee === user._id);
    // console.info(applicants);
    // console.info(user)
    // console.info(ans);
    return ans;
  };

  render() {
    const { job, user } = this.props;
    const check = this.checkForApplied(job.applicants, user);

    if (check && check.length) return <Applied info={check[0]} />;


    return (
      <>
        <div className="section " id="features">
          <Container>
            <Row>
              <Col className="text-left" md="8">
                <h2 className="title f-anon text-capitalize">
                  Apply for {job.title}
                </h2>
                <h5 className="description mb-4">
                  This is the paragraph where you can write more details about
                </h5>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Input
                      onChange={this.handleChange}
                      value={this.state.description}
                      name="comment"
                      className="border-input"
                      placeholder="Tell the employer about the details of completion and your experience in this field"
                      type="textarea"
                      style={{ height: 200 }}
                      size="lg"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Button
                      onClick={this.handleSubmit}
                      className="btn mr-1"
                      color="danger"
                      size="lg"
                      type="button"
                    >
                      <span className="text-white">Apply</span>
                    </Button>
                    <Link to={__WORKER_JOB_SHOW(this.props.match.params._id)}>
                      <Button
                        className="btn mr-1"
                        color="dark"
                        outline
                        size="lg"
                        type="button"
                      >
                        <span className="text-dark">back to Job Info</span>
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

const mapStateToProps = (state) => ({
  auth: state.authentication,
  job: state.job,
  user: state.user,
});
const mapDispatchToProps = {
  getJob: jobActions.getJob,
  apply: jobActions.apply,
  me: userActions.getUser,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(WorkerJobApply);

export { connected as WorkerJobApply };
