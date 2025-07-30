import React from "react";
import Image from "next/image";
import "./card.css";
import Link from "next/link";
import { ProjectDates } from "@/types/project.types";

function Card({
  title,
  slug,
  role,
  logo,
  summary,
  client,
  dates,
  stacks,
}: {
  title: string;
  slug: string;
  role: string;
  logo: string;
  summary: string;
  client: string;
  dates: ProjectDates;
  stacks: string[];
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-logo">
          <Image
            src={logo}
            width={75}
            height={75}
            style={{ borderRadius: "100%", objectFit: "contain" }}
            alt={`${title} logo`}
          />
        </div>
        <div className="card-title">
          <div> {title} </div>
          <div> {role} </div>
        </div>
      </div>
      <div className="card-details">
        <div className="card-summary">{summary}</div>
        <div className="card-footer">
          <h4>Project Info</h4>
          <hr />
          <div className="project-info">
            <p>Client</p>
            <p>{client}</p>
          </div>
          <hr />
          <div className="project-info">
            <p>Dates</p>
            <p>
              {dates.start}-{dates.end}
            </p>
          </div>
          <hr />
          <div className="project-info">
            <p>Stacks</p>
            <p>{stacks.join(", ")} </p>
          </div>
          <hr />
        </div>
      </div>
      <Link href={`/projects/${slug}`} className="card-link">
        Read More {">"}
      </Link>
    </div>
  );
}

export default Card;
