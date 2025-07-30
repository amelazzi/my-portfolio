"use client";
import React from "react";
import "./details.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ProjectDetails } from "@/types/project.types";
import Image from "next/image";

function Details({ projectDetails }: { projectDetails: ProjectDetails }) {
  const { projectName } = useParams();

  return (
    <div className="section details-section">
      <div className="details-header">
        <div className="project-logo-container">
          {projectDetails.link ? (
            <Link href={projectDetails.link} target="_blank">
              <Image
                className="project-logo"
                alt="Get it on Google Play"
                src={projectDetails.logo}
                width={150}
                height={150}
              />
            </Link>
          ) : (
            <Image
              className="project-logo"
              alt="Get it on Google Play"
              src={projectDetails.logo}
              width={150}
              height={150}
            />
          )}
        </div>
        <div className="project-infos">
          <div>
            <h2> {projectName} </h2>
            <h4> {projectDetails.role} </h4>
          </div>
          {projectDetails.stats && (
            <div className="project-stats">
              <div className="stats">
                <p>{projectDetails.stats?.rate}</p>
                <p>{projectDetails.stats?.reviews} Reviews</p>
              </div>
              <hr className="vertical-divider" />
              <div className="stats">
                <p>{projectDetails.stats?.nbrDownloads}</p>
                <p>Downloads</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="project-overview">
        <h3> Overview </h3>
        <div>
          {projectDetails.overview.split("\n").map((line, index) => {
            return line.trim().startsWith("-") ? (
              <li key={index}>{line.replace("-", "").trim()}</li>
            ) : (
              <p key={index}>{line}</p>
            );
          })}
        </div>
      </div>
      <div className="tech-stack">
        <div className="stacks">
          <h6> My Role: </h6>
          {projectDetails.stacks.roleStack.map((stack, index) => (
            <p key={index}>
              {stack}
              {index !== projectDetails.stacks.roleStack.length - 1 && ","}
            </p>
          ))}
        </div>
        <div className="stacks">
          <h6> Project Stack: </h6>
          {projectDetails.stacks.projectStack.map((stack, index) => (
            <p key={index}>
              {stack}
              {index !== projectDetails.stacks.projectStack.length - 1 && ","}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Details;
