import React from "react";
import Card from "./card/card";
import { projects } from "@/data/projects.data";
import "./projects.css";

function Projects() {
  return (
    <div className="section">
      <h1>Projects</h1>
      <div className="projects">
        {Object.entries(projects).map(([key, project]) => (
          <Card
            key={key}
            title={project.title}
            slug={key}
            logo={project.logo}
            role={project.role}
            summary={project.summary}
            client={project.client}
            dates={project.dates}
            stacks={project.stacks.roleStack}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
