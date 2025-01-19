import React from "react";
import "./volunteering.css";
import Image from "next/image";
import Link from "next/link";

function Volunteering({
  logo,
  bgColor = "white",
  name,
  role,
  startYear,
  endYear,
  link,
}: {
  logo: string;
  bgColor?: string;
  name: string;
  role: string;
  startYear: string;
  endYear: string;
  link: string;
}) {
  return (
    <Link href={link} target="_blank">
      <div className="volunteering">
        <div className="volunteering-logo" style={{ backgroundColor: bgColor }}>
          <Image
            src={logo}
            width={180}
            height={0}
            style={{ height: "auto" }}
            alt={`${name} logo`}
          />
        </div>
        <div className="volunteering-info">
          <p> {name} </p>
          <div className="volunteering-details">
            <p>{role}</p>
            <p>
              {startYear} - {endYear}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Volunteering;
