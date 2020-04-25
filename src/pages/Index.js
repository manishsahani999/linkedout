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
            Remcon uses recycled kubernetes containers, which remembers there
            previous state even after getting recycled. And ensures the
            continuity of the developement process.
            {/* These are the long lived disposable kubernetes containers,
        that remembers its pervious state even after getting
        destroyed.
        Remocn leads to frictionless coding to develop multi-language Cloud & Desktop IDEs with state-of-the-art web technologies. */}
          </h4>
          <Link to={__LOGIN_ROUTE}>
            <Button
              className="btn-round mr-1"
              color="dark"
              outline
              size="lg"
              type="button"
            >
              <span className="text-dark">Worker Login</span>
            </Button>
          </Link>
          <Button
            className="btn-round mr-1"
            color="dark"
            size="lg"
            type="button"
          >
            <span className="">Employer Login</span>
          </Button>
        </div>
      </Container>
    </div>
  </>
);

export default Index;
