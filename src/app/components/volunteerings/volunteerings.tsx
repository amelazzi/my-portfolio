"use client";
import React, { useState } from "react";
import "./volunteerings.css";
import Volunteering from "./volunteering/volunteering";
import { volunteerings } from "@/data/volunteerings.data";
import { VolunteeringDetails } from "./details/volunteering-details";
import { useDevice } from "@/app/contexts/useDeviceSelector";

function Volunteerings() {
  const { isMobile } = useDevice();

  const [active, setActive] = useState(isMobile ? undefined : volunteerings[0]);

  return (
    <div id="volunteerings" className="section">
      <h1> MY VOLUNTEERINGS </h1>
      <div className="volunteerings-container">
        <div className="volunteerings">
          {volunteerings.map((volunteering, index) => (
            <Volunteering
              key={index}
              volunteering={volunteering}
              onClick={() => setActive(volunteering)}
              isActive={active === volunteering}
            />
          ))}
        </div>
        {!isMobile && <VolunteeringDetails volunteering={active!} />}
      </div>
    </div>
  );
}

export default Volunteerings;
