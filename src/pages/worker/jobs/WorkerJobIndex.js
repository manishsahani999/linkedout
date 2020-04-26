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
import { __WORKER_JOB_SHOW } from "routes";

class WorkerJobIndex extends Component {
  componentDidMount() {
    this.props.jobs();
  }

  render() {
    // console.info(this.props);
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
            {/* <hr /> */}
            <CardFooter>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  {/* <img
                alt="..."
                className="avatar img-raised mr-2"
                src={require("assets/img/faces/ayo-ogunseinde-2.jpg")}
              /> */}
                  <strong><span>Pays - {item.budget} / hr </span></strong>
                </a>
              </div>
              <div className="stats">
                <Button
                  className="btn-link p-0"
                  color="danger"
                  href={__WORKER_JOB_SHOW(item._id)}
                >
                  Details
                </Button>
              </div>
            </CardFooter>
          </CardBody>
        </Card>
      );
    };

    // console.info(job);
    return (
      <div className="section pt-5">
        {/* ********* BLOGS 2 ********* */}
        <div className="blog-2 section pt-0">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="12">
                <h2 className="title f-anon">
                Latest Jobs Near You
                </h2>
                <br />
                <Row>
                  {job &&
                    job.jobs &&
                    job.jobs.map((item) => (
                      <Col md="4" key={item._id}>
                        {renderCard(item)}
                      </Col>
                    ))}
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
  jobs: jobActions.getAllJobsForWorker,
};

const connected = connect(mapStateToProps, mapDispatchToProps)(WorkerJobIndex);

export { connected as WorkerJobIndex };
