import React, { MouseEventHandler } from "react";
import "./volunteering.css";
import Image from "next/image";
import { VolunteeringInfo } from "@/types/volunteering.types";
import { useIsMobile } from "@/app/hooks/useIsMobile";

function Volunteering({
  volunteering,
  isActive,
  onClick,
}: {
  volunteering: VolunteeringInfo;
  isActive: Boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  const isMobile = useIsMobile();
  const showMobileView = isActive && isMobile;
  const showActive = isActive && !isMobile;
  return (
    <div
      className={
        "volunteering-container card" + `${showActive ? " active" : ""}`
      }
      onClick={onClick}
    >
      <div className="volunteering">
        <div className="logo-container">
          <Image
            src={volunteering.logo}
            width={60}
            height={60}
            style={{ objectFit: "contain" }}
            alt=""
          />
        </div>
        <div className="info-container">
          <h3> {volunteering.community} </h3>
          <h6>
            {volunteering.role} • {volunteering.dates.start} -
            {volunteering.dates.end}
          </h6>
        </div>
      </div>
      {showMobileView && (
        <div className="volunteering-description">
          <p> {volunteering.description} </p>
          <p> {volunteering.roleDetails} </p>
          {volunteering.achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
          <div className="skills">
            {volunteering.softSkills.map((skill, index) => (
              <div key={index} className="soft-skill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Volunteering;
