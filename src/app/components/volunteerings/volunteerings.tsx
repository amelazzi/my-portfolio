"use client";
import React, { useState } from "react";
import "./volunteerings.css";
import Volunteering from "./volunteering/volunteering";
import { volunteerings } from "@/data/volunteerings.data";
import Link from "next/link";

function Volunteerings() {
  const [active, setActive] = useState(volunteerings[0]);

  return (
    <div className="section">
      <h1> MY VOLUNTEERINGS </h1>
      <div className="volunteerings-container">
        <div className="volunteerings">
          {volunteerings.map((volunteering, index) => (
            <Volunteering
              key={index}
              volunteering={volunteering}
              onClick={() => console.log(setActive(volunteering))}
              isActive={active === volunteering}
            />
          ))}
        </div>
        <div className="volunteering-details">
          <Link href={active.profileLink} target="_blank">
            <h3>
              {active.community} • {active.role}
            </h3>
          </Link>
          <div className="volunteering-description">
            <p> {active.description} </p>
            <p> {active.roleDetails} </p>
            {active.achievements.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
            <div className="skills">
              {active.softSkills.map((skill, index) => (
                <div key={index} className="soft-skill">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteerings;
