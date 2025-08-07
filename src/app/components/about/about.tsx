import React from "react";
import Link from "next/link";
import "./about.css";
import { SkillsCarousel } from "../skills/skills-carousel/skills-carousel";
import { skills } from "@/data/skills.data";

function About() {
  return (
    <div className="about-section">
      <div className="about">
        <div className="full-name">
          <h1>Amel</h1>
          <h1>AZZI</h1>
        </div>
        <div className="summary">
          <p>
            As a <b>Senior Fullstack Engineer</b> with 5+ years of experience, I
            specialize inbuilding scalable, user-focused applications using
            <b>Node.js, React.js</b>, and
            <b>modern web technologies.</b> I thrive in collaborative teams and
            enjoy solving complex
          </p>
          <p>
            As a <b>Google Women Techmakers Ambassador</b>, I am deeply
            committed to advocating for diversity and inclusion in the tech
            industry. I actively promote diversity in tech through organizing
            GDG events and mentoring aspiring engineers.
          </p>
        </div>
        <div className="about-carousel">
          <SkillsCarousel skills={[...skills.Frontend]} cardSize={80} />
          <p> ... and more</p>
        </div>
        <Link href="/contact">
          <button>Contact Me</button>
        </Link>
      </div>
    </div>
  );
}

export default About;
