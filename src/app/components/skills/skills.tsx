import React from "react";
import { skills } from "@/app/components/skills/data";
import Image from "next/image";
import "./skills.css";

function Skills() {
  return (
    <div className="section">
      <h1>MY SKILLS</h1>
      <div className="skills-container">
        <div className="carousel-container">
          <div className="skills-carousel">
            <div className="skills-track">
              {[...skills.Backend, ...skills.Databases].map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name"> {skill.name} </div>
                  <div className="skill-logo">
                    <Image
                      src={`/icons/${skill.logo}`}
                      width={60}
                      height={60}
                      alt={`${skill.name} icon`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-carousel">
            <div className="skills-track">
              {skills.Frontend.map((skill, index) => (
                <div className="skill" key={index}>
                  <div className="skill-name"> {skill.name} </div>
                  <div className="skill-logo">
                    <Image
                      src={`/icons/${skill.logo}`}
                      width={60}
                      height={60}
                      alt={`${skill.name} icon`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <hr className="skills-divider " />
        <div className="skills">
          <li>
            <h4>• Front-End :</h4>
            <p>JavaScript, Typescript, ReactJS</p>
          </li>
          <li>
            <h4>• Back-End :</h4>
            <p>Node.js, ExpressJS, Python, Django</p>
          </li>
          <li>
            <h4>• Databases :</h4>
            <p>MySQL, PostgreSQL</p>
          </li>
          <li>
            <h4>• Tools & Platforms :</h4>
            <p>Git, Docker, AWS, Heroku</p>
          </li>
          <li>
            <h4>• Others :</h4>
            <p>RESTful APIs, GraphQL, Agile Methodologies</p>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Skills;
