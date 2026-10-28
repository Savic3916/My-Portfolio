import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Savic3916"
        blockSize={30}
        blockMargin={10}
        theme={{
          level0: "#3a2556",
          level1: "#6b3fa0",
          level2: "#9b59d0",
          level3: "#c084f5",
          level4: "#e3c4ff",
        }}
        fontSize={20}
      />
    </Row>
  );
}

export default Github;
