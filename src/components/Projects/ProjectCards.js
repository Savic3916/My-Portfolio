import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.imgPath ? (
        <Card.Img variant="top" src={props.imgPath} alt={props.title} />
      ) : (
        <div className="project-img-placeholder">{props.title}</div>
      )}
      <Card.Body className="project-card-body">
        {props.company && <div className="project-company">{props.company}</div>}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="project-description">
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

        <div className="project-actions">
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
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
