import React from "react";
import "./projects.css";
import Card from "./card/card";

function Projects() {
  const projects = [
    {
      title: "Smart City IOS app",
      slug: "mdmp",
      logo: "/icons/mysql-logo.svg",
      role: "iOS Developer",
      summary:
        "Developed an iOS app to help users explore city events and services with map and agenda features.",
      stacks: ["Swift", "iOS SDK", "MapKit"],
    },
  ];

  return (
    <div className="section">
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            slug={project.slug}
            logo={project.logo}
            role={project.role}
            summary={project.summary}
            stacks={project.stacks}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
