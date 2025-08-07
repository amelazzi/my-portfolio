import React from "react";
import ProjectCard from "./project-card/project-card";
import { projects } from "@/data/projects.data";

function Projects() {
  return (
    <div id="projects" className="section">
      <h1>Projects</h1>
      <div className="cards-container">
        {Object.entries(projects).map(([key, project]) => (
          <ProjectCard key={key} slug={key} projectInfo={project.info} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
