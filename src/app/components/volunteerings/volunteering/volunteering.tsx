import React, { MouseEventHandler } from "react";
import "./volunteering.css";
import Image from "next/image";
import { VolunteeringInfo } from "@/types/volunteering.types";

function Volunteering({
  volunteering,
  isActive,
  onClick,
}: {
  volunteering: VolunteeringInfo;
  isActive: Boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}) {
  return (
    <div
      className={"volunteering card" + `${isActive ? " active" : ""}`}
      onClick={onClick}
    >
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
  );
}

export default Volunteering;
