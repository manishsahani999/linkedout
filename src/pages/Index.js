import React from "react";
import { Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { __LOGIN_ROUTE } from "routes";

const Index = () => (
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
              Linked
              <span
                className="text-white"
                style={{
                  background: "#0a66c2",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  borderRadius: "10px",
                }}
              >
                Out
              </span>
            </span>
          </div>
          <h1 className="font-for-motto text-left">
            Hire Small scale workers direclty and easily
          </h1>
          <h4 className="text-dark mb-5 f-anon">
            Linkout is a platfrom to ease out the pain of finding jobs and
            getting hired for small scaled workers.
          </h4>
          <Link to={__LOGIN_ROUTE}>
            <Button
              className="btn-round mr-1"
              color="dark"
              outline
              size="lg"
              type="button"
            >
              <span className="text-dark">Find Jobs</span>
            </Button>
          </Link>
          <Button
            className="btn-round mr-1"
            color="dark"
            size="lg"
            type="button"
          >
            <span className="">Hire workers</span>
          </Button>
        </div>
      </Container>
    </div>
  </>
);

export default Index;
