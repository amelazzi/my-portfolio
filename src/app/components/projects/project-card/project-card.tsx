import React from "react";
import Image from "next/image";
import "./project-card.css";
import Link from "next/link";
import { ProjectInfo } from "@/types/project.types";

function ProjectCard({
  slug,
  projectInfo,
}: {
  slug: string;
  projectInfo: ProjectInfo;
}) {
  return (
    <Link href={`/projects/${slug}`}>
      <div className="project card">
        <div className="card-header">
          <div className="card-logo">
            <Image
              src={projectInfo.logo}
              width={75}
              height={75}
              style={{ borderRadius: "100%", objectFit: "contain" }}
              alt={`${projectInfo.title} logo`}
            />
          </div>
          <div className="card-title">
            <div> {projectInfo.title} </div>
            <div> {projectInfo.role} </div>
          </div>
        </div>
        <div className="card-details">
          <div className="card-summary">
            <p>{projectInfo.summary}</p>
          </div>
          <div className="card-footer">
            <h4>Project Info</h4>
            <hr />
            <div className="project-info">
              <p>Client</p>
              <p>{projectInfo.client}</p>
            </div>
            <hr />
            <div className="project-info">
              <p>Dates</p>
              <p>
                {projectInfo.dates.start}-{projectInfo.dates.end}
              </p>
            </div>
            <hr />
            <div className="project-info">
              <p>Stacks</p>
              <p>{projectInfo.stacks.roleStack.join(", ")} </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
