import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath && (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      )}
      <Card.Body>
        {props.company && <div className="project-company">{props.company}</div>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.tags && (
          <div className="experience-stack project-tags">
            {props.tags.map((tag) => (
              <span className="tech-tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}

        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: "10px" }}
          >
            <BsGithub /> &nbsp;GitHub
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            rel="noreferrer"
          >
            <CgWebsite /> &nbsp;
            {props.demoLabel || "Live App"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
