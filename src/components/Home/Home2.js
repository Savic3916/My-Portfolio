import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a <b className="purple">React Native engineer</b> who owns
              the full mobile lifecycle: architecture, API contracts with
              backend teams, performance tuning and store releases.
              <br />
              <br />
              Most recently I architected a{" "}
              <b className="purple">five-app logistics and POS suite</b>{" "}
              handling 200–800+ orders a day, with real-time Firebase sync,
              Nomba POS terminal integration and Expo EAS CI/CD with over-the-air
              updates. I've also shipped a US cross-border marketplace to both
              stores, and a government attendance app with location
              verification.
              <br />
              <br />
              My toolkit:
              <i>
                <b className="purple">
                  {" "}
                  TypeScript, React Native, Expo, Redux Toolkit, React Query and
                  Firebase.{" "}
                </b>
              </i>
              I care about fast, reliable apps that real users depend on every
              day.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
