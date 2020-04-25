import React from "react";
import { connect } from "react-redux";

import { userActions } from "actions";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { __JOB_CREATE } from "routes";

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
    console.info('user')
    console.info(user);
    if (!user && !user.jobs)  return <>loading</>;

    return (
      <>
        <div className="section section-feature cd-section" id="features">
          <div className="features-1">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <h2 className="title text-capitalize">{user.username}'s Dashboard</h2>
                  <h5 className="description mb-4">
                    This is the paragraph where you can write more details about
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-danger">
                        {user.jobs.length}
                    </div>
                    <div className="description">
                      <h4 className="info-title">Jobs Posted</h4>
                      <p className="description">
                        Spend your time generating new ideas. You don't have to
                        think of implementing.
                      </p>
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
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-bulb-63" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">New Ideas</h4>
                      <p>
                        Larger, yet dramatically thinner. More powerful, but
                        remarkably power efficient.
                      </p>
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
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-chart-bar-32" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Statistics</h4>
                      <p>
                        Choose from a veriety of many colors resembling sugar
                        paper pastels.
                      </p>
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
                <Col md="3">
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-sun-fog-29" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">Delightful design</h4>
                      <p>
                        Find unique and handmade delightful designs related
                        items directly from our sellers.
                      </p>
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

              </Row>
              <div className="text-center pb-3 mt-3">
                <Link to={__JOB_CREATE} className="btn btn-dark" >post a new job</Link>
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
