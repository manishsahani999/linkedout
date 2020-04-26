import React from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { Container, Row, Col, Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { jobActions } from "actions/job.action";
import { __JOB_WORKERS_SHOW } from "routes";
import { __WORKER_JOB_INDEX } from "routes";
import CustomCarousal from "components/Custom/Carousal";
import { __WORKER_JOB_APPLY } from "routes";

class WorkerJobShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    this.props.getJob(id);
    this.props.me();
  }

  renderItem = (item) => (
    <Row>
      <Col md="5" className="pt-2">
        {item._id}
      </Col>
      <Col md="2" className="pt-2">
        <Badge className="mr-1" pill>
          {item.status}
        </Badge>
      </Col>
      <Col md="5 pr-4 text-right">
        <Button
          className="btn mr-1"
          color="danger"
          onClick={(e) => e.preventDefault()}
        >
          <span>Remove</span>
        </Button>
        <Button
          className="btn"
          color="success"
          onClick={(e) => e.preventDefault()}
        >
          <span>Approve</span>
        </Button>
      </Col>
    </Row>
  );

  checkForApplied = (applicants, user) => {
    const ans = applicants.filter((item) => item.employee === user._id);
    // console.info(applicants);
    // console.info(user)
    // console.info(ans);
    return ans;
  };

  render() {
    // console.info(this.props);
    const { job, user } = this.props;
    if (!job) return <>loading</>;

    const check = this.checkForApplied(job.applicants, user);
    // console.info(check)
    return (
      <>
        <div className="section section-feature cd-section" id="features">
          <Container>
            <Row>
              <Col className="text-left" md="8">
                <h2 className="title text-capitalize">{job.title}</h2>
                <h5 className="description mb-4">{job.description}</h5>
                <CustomCarousal />
              </Col>
              <Col md="4">
                <Row>
                  <Col className="border-bottom pb-5">
                    <h2 className="text-center">Pays 2000</h2>
                  </Col>
                </Row>
                <Row>
                  <Col md="6">
                    <div className="info">
                      <div className="icon icon-danger">
                        {job.numberOfPeople}
                      </div>
                      <div className="description">
                        <h4 className="info-title">Workers required</h4>
                        <Button
                          className="btn-link"
                          color="danger"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          See more
                        </Button>
                      </div>
                    </div>
                  </Col>
                  <Col md="6">
                    <div className="info">
                      <div className="icon icon-danger">
                        {job.employees.length}
                      </div>
                      <div className="description">
                        <h4 className="info-title">Workers Selected</h4>
                        <Link
                          to={__JOB_WORKERS_SHOW(this.props.match.params._id)}
                        >
                          <Button className="btn-link" color="danger">
                            See more
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="text-center">
                    <div className="pb-4">
                      {check.length > 0 && (
                        <>Already applied for the job.</>
                      )}
                      {!check.length && (
                        <>Click the button to apply for the job.</>
                      )}
                    </div>
                    <div className="">
                      <Link
                        to={__WORKER_JOB_INDEX}
                        className="btn btn-danger btn-lg mr-1"
                      >
                        <span className="text-white">Back to Jobs</span>
                      </Link>
                      {!check.length && (
                        <Link
                          to={__WORKER_JOB_APPLY(this.props.match.params._id)}
                          className="btn btn-dark btn-lg btn-outline-dark"
                        >
                          <span className="text-dark">Apply</span>
                        </Link>
                      )}
                      {check.length > 0 && (
                        <Link
                          to={__WORKER_JOB_APPLY(this.props.match.params._id)}
                          className="btn btn-dark btn-lg btn-outline-success"
                        >
                          <span className="text-success">Status</span>
                        </Link>
                      )}
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
  user: state.user,
  job: state.job,
});

const mapDispatchToProps = {
  logout: userActions.logout,
  getJob: jobActions.getJob,
  me: userActions.getUser,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(WorkerJobShow);

export { connected as WorkerJobShow };
