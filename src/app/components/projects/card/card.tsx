import React from "react";
import Image from "next/image";
import "./card.css";
import Link from "next/link";

function Card({
  title,
  slug,
  role,
  logo,
  summary,
  stacks,
}: {
  title: string;
  slug: string;
  role: string;
  logo: string;
  summary: string;
  stacks: string[];
}) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">
          <div> {title} </div>
          <div> {role} </div>
        </div>
        <div className="card-logo">
          <Image
            src={logo}
            width={60}
            height={60}
            style={{ height: "auto" }}
            alt={`azezaeaz logo`}
          />
        </div>
      </div>
      <div className="card-details">
        <div className="card-sammury">{summary}</div>
        <div className="card-stacks">
          {stacks.map((stack, index) => (
            <div key={index} className="card-stack">
              {stack}
            </div>
          ))}
        </div>
      </div>
      <Link href={`/projects/${slug}`} className="card-link">
        More {">"}
      </Link>
    </div>
  );
}

export default Card;
