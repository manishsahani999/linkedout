import React from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { jobActions } from "actions/job.action";
import { __JOB_WORKERS_SHOW } from "routes";
import { __JOB_SHOW } from "routes";

class Workers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const id = this.props.match.params._id;
    this.props.getJob(id);
  }
  render() {
    // console.info(this.props);
    const { job } = this.props;
    if (!job) return <>loading</>;

    return (
      <>
        <div className="section section-feature cd-section" id="features">
          <Container>
            <Row>
              <Col className="text-left" md="8">
                <h2 className="title text-capitalize">{job.title}'s Workers</h2>
                <h5 className="description mb-4">
                    These are the workers that are selected for the job.
                </h5>
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
                  <div className="icon icon-danger">{job.employees.length}</div>
                  <div className="description">
                    <h4 className="info-title">Workers Selected</h4>
                    <Link to={__JOB_WORKERS_SHOW(this.props.match.params._id )}>
                      <Button
                        className="btn-link"
                        color="danger"
                      >
                        See more
                      </Button>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>Hello</Row>
            <div className="text-left pb-3 mt-3">
              <Link to={__JOB_SHOW(job._id)} className="btn btn-dark">
                Back to Job
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
};

const connected = connect(mapStateToProps, mapDispatchToProps)(Workers);

export { connected as Workers };
