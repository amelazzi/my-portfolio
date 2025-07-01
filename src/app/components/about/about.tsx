import React from "react";
import Link from "next/link";
import "./about.css";

function About() {
  return (
    <div className="about">
      <div className="full-name">
        <h1>Amel</h1>
        <h1>AZZI</h1>
      </div>
      <div className="summary">
        <p>
          As a <b>Senior Fullstack Engineer</b> with 5+ years of experience, I
          specialize in building scalable applications using{" "}
          <b>Node.js, React.js</b>, and a variety of modern technologies. With a
          passion for creating impactful <b>user-centric solutions</b>, I thrive
          in collaborative environments that challenge me to solve complex
          problems.
        </p>
        <p>
          As a <b>Google Women Techmakers Ambassador</b>, I am deeply committed
          to advocating for diversity and inclusion in the tech industry. I
          actively organize <b>community events</b> like{" "}
          <b>Google Developer Groups</b> meetups to support and mentor aspiring
          engineers, fostering the growth of <b>diverse talent</b> in tech.
        </p>
      </div>

      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </div>
  );
}

export default About;
