import React from "react";
import Image from "next/image";
import "./skill.css";

function skill({
  name,
  level,
  logo,
}: {
  name: string;
  level: string;
  logo: string;
}) {
  return (
    <div className="skill-container">
      <div className="skill-icon-container">
        <Image src={logo} width={60} height={60} alt="reactJS icon" />
      </div>
      <div className="skill-information">
        <div className="skill-rate"> {level} </div>
        <div className="skill-name"> {name} </div>
      </div>
    </div>
  );
}

export default skill;
