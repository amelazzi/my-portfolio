import React from "react";
import "./volunteerings.css";
import Volunteering from "./volunteering/volunteering";

function Volunteerings() {
  return (
    <div className="section">
      <h1> MY VOLUNTEERINGS </h1>
      <div className="volunteerings">
        <Volunteering
          logo="/icons/gdg.png"
          bgColor="white"
          name="GDG Sophia-Antipolis"
          role="Organizer"
          startYear="2022"
          endYear="today"
          link="https://gdg.community.dev/gdg-sophia-antipolis/"
        />
        <Volunteering
          logo="/icons/wtm.svg"
          bgColor="white"
          name="Google's Woman Techmakers"
          role="Ambassador"
          startYear="2018"
          endYear="today"
          link="https://developers.google.com/womentechmakers"
        />
        <Volunteering
          logo="/icons/wtm-algiers.svg"
          name="WTM Algiers"
          role="Lead"
          startYear="2017"
          endYear="2019"
          link="https://fr.linkedin.com/company/wtm-algiers"
        />
        <Volunteering
          logo="/icons/gdg-algiers.png"
          bgColor="#F3F3F3"
          name="GDG Algiers"
          role="Organizer"
          startYear="2015"
          endYear="2019"
          link="https://gdg.community.dev/gdg-algiers/"
        />
      </div>
    </div>
  );
}

export default Volunteerings;
