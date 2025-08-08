import React from "react";
import { skills } from "@/data/skills.data";
import "./skills.css";
import { SkillsCarousel } from "./skills-carousel/skills-carousel";

function Skills() {
  return (
    <div id="skills" className="section">
      <h1>MY SKILLS</h1>
      <div className="skills-container">
        <div className="carousel-container">
          <SkillsCarousel skills={[...skills.Backend, ...skills.Databases]} />
          <SkillsCarousel skills={[...skills.Frontend]} />
        </div>
        <hr className="skills-divider" />
        <div className="skills">
          <li>
            <h4>• Front-End :</h4>
            <p>{[...skills.Frontend].map((skill) => skill.name).join(", ")}</p>
          </li>
          <li>
            <h4>• Back-End :</h4>
            <p>{[...skills.Backend].map((skill) => skill.name).join(", ")}</p>
          </li>
          <li>
            <h4>• Databases :</h4>
            <p>{[...skills.Databases].map((skill) => skill.name).join(", ")}</p>
          </li>
          <li>
            <h4>• Tools & Platforms :</h4>
            <p>{[...skills.Tools].map((skill) => skill.name).join(", ")}</p>
          </li>
          <li>
            <h4>• Others :</h4>
            <p>{[...skills.Others].map((skill) => skill.name).join(", ")}</p>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Skills;
