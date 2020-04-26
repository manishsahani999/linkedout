import React from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

import { userActions } from "actions";
import { __WORKER_JOB_INDEX } from "routes";

class WorkersDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    this.props.me();
  }

  render() {
    const { user } = this.props;

    if (!user && !user.jobs) return <>loading</>;

    return (
      <div className="section section-feature cd-section pb-0"  style={{paddingTop: 0}}  id="features">
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
                  <div className="icon icon-danger">1{user.jobs.length}</div>
                  <div className="description">
                    <h4 className="info-title">Jobs Applied</h4>
                    <p className="description mb-3">
                      Total count of jobs you have applied.
                    </p>
                    <Button
                      className="btn-danger"
                      color="danger"
                      href={'/'}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info">
                  <div className="icon icon-primary">1</div>
                  <div className="description">
                    <h4 className="info-title">Jobs Assigned</h4>
                    <p className="description mb-3">
                      Total count of jobs you got assigned
                    </p>
                    <Button
                      className="btn-primary"
                      color="primary"
                      href={'/'}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="6">
                <div className="info">
                  <div className="icon icon-info">100$</div>
                  <div className="description">
                    <h4 className="info-title">Amount earned</h4>
                    <p className="description mb-3">
                      Total amount of money earned form this <br />platform.
                    </p>
                    <Button
                      className="btn-primary"
                      color="primary"
                      href={'/'}
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>

            </Row>
            <div className="text-center pb-3 mt-3">
              <Link to={__WORKER_JOB_INDEX} className="btn btn-lg btn-danger">
                find a new job
              </Link>
            </div>
          </Container>
        </div>
      </div>
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
)(WorkersDashboard);

export { connected as WorkersDashboard };
