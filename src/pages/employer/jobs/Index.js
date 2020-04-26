import React, { Component } from "react";
import { connect } from "react-redux";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import { jobActions } from "actions/job.action";
import { __JOB_SHOW } from "routes";
import { Link } from "react-router-dom";
import { __EMPLOYER_DASHBOARD } from "routes";

class JobIndex extends Component {
  componentDidMount() {
    this.props.jobs();
  }

  render() {
    console.info(this.props);
    const { job } = this.props;

    const renderCard = (item) => {
      return (
        <Card className="card-blog shadow-lg">
          <div className="card-image">
            {/* <a href="#pablo" onClick={(e) => e.preventDefault()}>d</a> */}
          </div>
          <CardBody>
            {/* <h6 className="card-category text-info">Enterprise</h6> */}
            <CardTitle tag="h5">
              <a href="#pablo" onClick={(e) => e.preventDefault()}>
                {item.title}
              </a>
            </CardTitle>
            <p className="card-description">
              {item.description} <br />
            </p>
            <CardFooter>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <span>Applicants - {item.employees.length}</span>
                </a>
              </div>
              <div className="stats">
                <Link to={__JOB_SHOW(item._id)}>
                  <Button
                    className="btn-link p-0"
                    color="danger"
                  >
                    Details
                  </Button>
                </Link>
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      );
    };

    console.info(job);
    return (
      <div className="section pt-5">
        {/* ********* BLOGS 2 ********* */}
        <div className="blog-2 section pt-0">
          <Container>
            <Row>
              <Col className="mr-auto" md="8">
                <h2 className="title f-anon">Your Posted Jobs</h2>
                <br />
                <Row>
                  {job &&
                    job.jobs &&
                    job.jobs.map((item) => (
                      <Col md="6" key={item._id}>
                        {renderCard(item)}
                      </Col>
                    ))}
                </Row>
              </Col>
              <Col>
                <Row>
                  <Col md="12 text-center mr-auto ml-auto">
                    <div className="info">
                      <div className="icon icon-danger">
                        {job.jobs && job.jobs.length}
                      </div>
                      <div className="description">
                        <h4 className="info-title">Jobs Posted</h4>
                        <p className="description">
                          Total count of jobs posted here
                        </p>
                      </div>
                    </div>
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
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END BLOGS 2 ********* */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.authentication,
  user: state.user,
  job: state.job,
});

const mapDispatchToProps = {
  jobs: jobActions.getEmployerJobs,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(JobIndex);

export { connected as JobIndex };
