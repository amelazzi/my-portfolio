import React, { ReactElement, cloneElement } from "react";
import "./coord.css";

function Coord({
  icon,
  name,
  value,
}: {
  icon: ReactElement;
  name: string;
  value: string;
}) {
  return (
    <div className="coord-container">
      <div className="coord-icon">
        {cloneElement(icon, { sx: { color: "#3f51b5", fontSize: "32px" } })}
      </div>
      <div className="coord">
        <p> {name} </p>
        <p> {value} </p>
      </div>
    </div>
  );
}

export default Coord;
