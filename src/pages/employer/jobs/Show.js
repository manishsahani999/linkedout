import React from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { Container, Row, Col, Button, Badge } from "reactstrap";
import { Link } from "react-router-dom";
import { __JOB_CREATE } from "routes";
import { jobActions } from "actions/job.action";
import { __JOB_WORKERS_SHOW } from "routes";
import { __JOB_INDEX } from "routes";

class JobsShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    // this.accpet = this.accpet.bind(this)
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    this.props.getJob(id);
  }

  updataApplicationStatus(id, status) {
    this.props.update(id, { status: status });
  }

  render() {
    const { job } = this.props;
    if (!job) return <>loading</>;

    return (
      <>
        <div className="section section-feature cd-section" id="features">
          <Container>
            <Row>
              <Col className="text-left" md="8">
                <h2 className="title text-capitalize">{job.title}</h2>
                <h5 className="description mb-4">{job.description}</h5>
                <hr />
                {job &&
                  job.applicants &&
                  job.applicants.map((item) => {
                    return (
                      <div key={item._id}>
                        <Row>
                          <Col md="5" className="pt-2">
                            {item.comment}
                          </Col>
                          <Col md="2" className="pt-2">
                            <Badge className="mr-1" pill>
                              {item.status}
                            </Badge>
                          </Col>
                          <>
                            <Col md="5 pr-4 text-right">
                              <Button
                                className="btn mr-1"
                                color="danger"
                                onClick={(e) =>
                                  this.updataApplicationStatus(
                                    item._id,
                                    "rejected"
                                  )
                                }
                              >
                                <span>Remove</span>
                              </Button>
                              <Button
                                className="btn"
                                color="success"
                                value="accepted"
                                onClick={(e) =>
                                  this.updataApplicationStatus(
                                    item._id,
                                    "accepted"
                                  )
                                }
                              >
                                <span>Approve</span>
                              </Button>
                            </Col>
                          </>
                        </Row>
                        <hr />
                      </div>
                    );
                  })}
              </Col>
              <Col md="2">
                <div className="info">
                  <div className="icon icon-danger">{job.numberOfPeople}</div>
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
              <Col md="2">
                <div className="info">
                  <div className="icon icon-danger">
                    {job.employees && job.employees.length}
                  </div>
                  <div className="description">
                    <h4 className="info-title">Workers Selected</h4>
                    <Link to={__JOB_WORKERS_SHOW(this.props.match.params._id)}>
                      <Button className="btn-link" color="danger">
                        See more
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="text-left pb-3 mt-3">
              <Link to={__JOB_INDEX} className="btn btn-danger btn-lg mr-1">
                <span className="text-white">Back to All Jobs</span>
              </Link>
              <Link
                to={__JOB_CREATE}
                className="btn btn-dark btn-lg btn-outline-dark"
              >
                <span className="text-dark">post a new job</span>
              </Link>
            </div>
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
  update: jobActions.updataApplicationStatus,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(JobsShow);

export { connected as JobsShow };
