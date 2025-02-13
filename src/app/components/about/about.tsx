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
      <div>
        <p>
          Hello, I'm a fullstack developer based in Paris, France. I can develop
          great webappas
        </p>
      </div>

      <Link href="/contact">
        <button>Contact Me</button>
      </Link>
    </div>
  );
}

export default About;
