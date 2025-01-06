import React from "react";
import "./experience.css";
import { AccordionItem } from "../accordion/accordion-item";

function Experience() {
  return (
    <div className="section">
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
              "Graduated as IoT Systems & Services Engineer at University of Gustave Eiffel ex UPEM, Champs-sur-Marne, Marne la vallée - France",
            ]}
          />
          <AccordionItem
            title="Sofetware Engineer"
            startDate="2014"
            endDate="2019"
            subTitle="Higher Nation School of Computer Science"
            location="Algeria"
            details={[
              "Graduated as Software Engineer at National School Of Computer Science, Oued-Smar, Algiers - Algeria",
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
      <div className="experiences-container">
        <h3>Experience</h3>
        <div className="experiences">
          <AccordionItem
            title="Fullstack developper"
            startDate="2023"
            endDate="to day"
            subTitle="K-ciope"
            location="Paris - France"
            children={
              <>
                <AccordionItem
                  title="Fullstack developper"
                  startDate="2024"
                  endDate="2024"
                  subTitle="Emerga"
                  location="Remote - France"
                  details={[
                    "Design and development of a web application and its associated back office for a medical emergency response service",
                  ]}
                  stacks={["React.js", "Node.js (Open Street Map)"]}
                />
                <AccordionItem
                  title="Backend developper"
                  startDate="2023"
                  endDate="2023"
                  subTitle="SNCF"
                  location="Paris - France"
                  details={[
                    "Upgrading and enhancing the Kairos NODE.JS back-end app that interfaces with a web frontend",
                    "Upgrading and enhancing the Ergonos core NODE.JS app that connects to both a web front-end and Kairos back-end",
                  ]}
                  stacks={["Node.js (Express, Sequelize, PostgreSQL)"]}
                />
                <AccordionItem
                  title="Fullstack developper"
                  startDate="2023"
                  endDate="2023"
                  subTitle="K-ciope Factory"
                  location="Paris - France"
                  details={[
                    "Build a back-end app connected to a front mobile app and back-office",
                    "Develop a back-office for controling the back-end and the mobile app",
                    "Evolution of a front-end for an Activity Report tracking tool",
                  ]}
                  stacks={["React.js", "Node.js"]}
                />
              </>
            }
            stacks={[]}
          />
          <AccordionItem
            title="Fullstack developper"
            startDate="2022"
            endDate="2022"
            subTitle="Freelance"
            location="Remote - France"
            details={[
              "Design and develop back-end, back-office and cross-platform mobile app for connecting users with drivers providing transportation services",
            ]}
            stacks={["Figma", "React.js", "Node.js", "Flutter"]}
          />
          <AccordionItem
            title="Fullstack developper"
            startDate="2021"
            endDate="2023"
            subTitle="Smartway"
            location="Nantes - France"
            details={[
              "Migration of the mobile app from Windows CE to Android",
              "Deployment of application updates via MDM SOTI",
              "Maintenance and upgrading the API, admin dashboard and Mobile app",
            ]}
            stacks={["Xamarin", "Python (Django ORM)"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
