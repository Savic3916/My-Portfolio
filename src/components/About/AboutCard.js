import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I’m <span className="purple">Akpan Victor</span>, a{" "}
            <span className="purple">React Native engineer</span> based in{" "}
            <span className="purple">Nigeria</span> and open to remote roles.
            <br />
            I currently build mobile apps for the{" "}
            <span className="purple">Abia State Government</span>. Before that I
            built the Qartt apps at <span className="purple">Anora.Dev</span>{" "}
            and led mobile team at{" "}
            <span className="purple">Pineapp Solutions</span>.
            <br />I hold a B.Sc. in{" "}
            <span className="purple">Computer Science</span> from the{" "}
            <span className="purple">University of Uyo</span>.
            <br />
            <br />
            I work remote-first and async, closely with product, design and
            backend teams from spec to release. Outside of coding:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar 🎸
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Young Developers ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and Exploring New Places 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SAVIC</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
