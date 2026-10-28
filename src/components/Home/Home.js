import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiOutlineDownload } from "react-icons/ai";
import pdf from "../../Assets/Akpan_Victor.pdf";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> AKPAN VICTOR </strong>
              </h1>

              <div className="home-type">
                <Type />
              </div>

              <p className="home-summary">
                6 years shipping cross-platform apps. <b>10 apps live</b> on
                Google Play and the App Store, from a logistics and POS suite
                handling <b>800+ orders a day</b> to a US marketplace.
              </p>

              <div className="home-cta">
                <Button
                  variant="primary"
                  href="mailto:savic3916@gmail.com?subject=Opportunity for Akpan Victor"
                  className="cta-btn"
                >
                  <AiOutlineMail /> &nbsp;Hire Me
                </Button>
                <Button as={Link} to="/project" className="cta-btn cta-outline">
                  View My Work
                </Button>
                <Button
                  href={pdf}
                  target="_blank"
                  className="cta-btn cta-outline"
                >
                  <AiOutlineDownload /> &nbsp;Download CV
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <span className="availability-badge">
                <span className="availability-dot" /> Available for remote work
              </span>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="stats-strip">
        <Row>
          {[
            ["6 yrs", "building and shipping React Native apps"],
            ["10 apps", "live: 8 on Google Play, 2 on the App Store"],
            ["800+", "orders a day synced in real time at peak"],
            ["~25%", "fewer missed orders after push-notification rollout"],
          ].map(([value, label]) => (
            <Col xs={6} md={3} key={value} className="stat-col">
              <div className="stat-card">
                <div className="stat-value">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Home2 />

      <Container>
        <Row style={{ paddingTop: "50px", paddingBottom: "80px" }}>
          <Col md={12} className="home-about-social">
            <h1>Find Me On</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me, or
              email{" "}
              <a href="mailto:savic3916@gmail.com" className="purple">
                savic3916@gmail.com
              </a>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Savic3916"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/I_am_SAVIC"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              {/* <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li> */}
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/i_am_savic_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
