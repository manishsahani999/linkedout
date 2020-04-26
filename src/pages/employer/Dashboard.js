import React from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { __JOB_CREATE } from "routes";
import { __JOB_INDEX } from "routes";

class EmployersDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.me();
  }

  // handleChange = e => {
  //     // this.setState({ filename: name })
  // }

  // handleSubmit = (e) => {
  //     e.preventDefault();

  //     // this.props.getAllPlantImages();
  // }

  render() {
    // console.info(this.props);
    const { user } = this.props;
    if (!user && !user.jobs) return <>loading</>;

    return (
      <>
        <div className="section section-feature cd-section" style={{paddingTop: 0}} id="features">
          <div className="features-1">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title text-capitalize">
                    {user.username}'s Dashboard
                  </h2>
                  <h5 className="description mb-4">
                  Hi there!, these are your linkedout statistics.
                  </h5>
                </Col>
              </Row>
              <Row className="mb-5 pb-5">
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-danger">{user.jobs.length}</div>
                    <div className="description">
                      <h4 className="info-title">Jobs Posted</h4>
                      <p className="description mb-3">
                        Total count of jobs you have posted.
                      </p>
                      <Button
                        className="btn-danger"
                        color="danger"
                        href={__JOB_INDEX}
                      >
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col md="3">
                  <div className="info">
                    <div className="icon icon-success">{user.jobs && (
                      user.jobs.filter(item => item.requirment).length
                    )}</div>
                    <div className="description">
                      <h4 className="info-title">Jobs Finished</h4>
                      <p className="description mb-3">
                        Total count of jobs you have that are completed.
                      </p>
                      <Button
                        className="btn-success"
                        color="success"
                        href={__JOB_INDEX}
                      >
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>

                <Col md="3">
                  <div className="info">
                    <div className="icon icon-primary">100</div>
                    <div className="description">
                      <h4 className="info-title">Worker's hired</h4>
                      <p className="description mb-3">
                      Total count of workers you have hired for all jobs.
                      </p>
                      <Button
                        className="btn-parimay"
                        color="primary"
                        href={__JOB_INDEX}
                      >
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-info">$100</div>
                    <div className="description">
                      <h4 className="info-title">Money Spend</h4>
                      <p className="description mb-3">
                        Total amount of money spend on this platform.
                      </p>
                      <Button
                        className="btn-info"
                        color="primary"
                        href={__JOB_INDEX}
                      >
                        See more
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
              <div className="text-center pb-3 mt-3">
                <Link to={__JOB_CREATE} className="btn btn-lg btn-danger">
                  post a new job
                </Link>
                <Link to={__JOB_INDEX} className="btn btn-lg ml-1 btn-dark btn-outline-dark">
                  <span className="text-dark">
                  See All Jobs
                  </span>
                </Link>
              </div>
            </Container>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
  user: state.user,
});

const mapDispatchToProps = {
  logout: userActions.logout,
  me: userActions.getUser,
};

const connected = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployersDashboard);

export { connected as EmployersDashboard };
