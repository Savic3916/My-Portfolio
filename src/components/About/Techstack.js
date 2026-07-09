import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Firebase from "../../Assets/TechIcons/Firebase.svg";
import Github_Actions from "../../Assets/TechIcons/github-actions.svg";
import Reanimated from "../../Assets/TechIcons/horse.svg";
import Redux from "../../Assets/TechIcons/Redux.svg";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";
import TanstackQuery from "../../Assets/TechIcons/tanstack.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import Swagger from "../../Assets/TechIcons/swagger.svg";
import Expo from "../../Assets/TechIcons/expo.svg";
import Github from "../../Assets/TechIcons/github.svg";
import Gitlab from "../../Assets/TechIcons/Gitlab.svg";
import Supabase from "../../Assets/TechIcons/Supabase.svg";
import Axios from "../../Assets/TechIcons/Axios.svg";
import Jest from "../../Assets/TechIcons/Jest.svg";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="haskell" />
        <div className="tech-icons-text">Java</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="typescript" />
        <div className="tech-icons-text">Typescript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React Native</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Expo} alt="client" />
        <div className="tech-icons-text">Expo</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Reanimated} alt="reanimated" />
        <div className="tech-icons-text">React Native Reanimated</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React Context</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redux} alt="redux" />
        <div className="tech-icons-text">Redux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Github} alt="github" />
        <div className="tech-icons-text">Github</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Gitlab} alt="gitlab" />
        <div className="tech-icons-text">Gitlab</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Github_Actions} alt="github actions" />
        <div className="tech-icons-text">Github Actions</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Expo} alt="client" />
        <div className="tech-icons-text">Expo EAS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={TanstackQuery} alt="tanstack query" />
        <div className="tech-icons-text">Tanstack Query</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text"> NativeWind</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Jest} alt="jest" />
        <div className="tech-icons-text">Jest</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Firebase} alt="firebase" />
        <div className="tech-icons-text">Firebase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Supabase} alt="supabase" />
        <div className="tech-icons-text">Supabase</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Axios} alt="axios" />
        <div className="tech-icons-text">Axios</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Swagger} alt="Swagger" className="tech-icon" />
        <div className="tech-icons-text">Swagger</div>
      </Col>
    </Row>
  );
}

export default Techstack;
