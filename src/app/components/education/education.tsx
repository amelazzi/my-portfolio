``;
import React from "react";
import "./education.css";
import { AccordionItem } from "../accordion/accordion-item";

function Education() {
  return (
    <div className="education-section">
      <div className="education-container">
        <h3>Education</h3>
        <div className="educations">
          <AccordionItem
            title="IoT Services & System Engineer"
            startDate="2019"
            endDate="2020"
            subTitle="University of Gustave Eiffel"
            location="France"
            details={[
              "Network engineering, IoT programming, system security, communication protocols, embedded systems",
            ]}
          />
          <AccordionItem
            title="Sofetware Engineer"
            startDate="2014"
            endDate="2019"
            subTitle="Higher Nation School of Computer Science"
            location="Algeria"
            details={[
              "Software architecture, fullstack web/mobile development, Agile methods",
            ]}
          />

          <AccordionItem
            title="Bachelor"
            startDate="2014"
            endDate="2013"
            subTitle="El-Hammadia high school"
            location="Algeria"
            details={[
              "Graduated high school in mathematical branch with a very good mark, score of 16/20.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default Education;
