"use client";

import { useState } from "react";
import { MobileSidebar } from "../sidebar/mobile-sidebar/mobile-sidebar";
import { Navbar } from "../sidebar/mobile-navbar/navbar";
import { ProfileWrapper } from "../profile/profile-wrapper/profile-wrapper";
import About from "../about/about";
import Projects from "../projects/projects";
import TechTalks from "../techtalks/tech-talks";
import Volunteerings from "../volunteerings/volunteerings";
import Skills from "../skills/skills";
import Contact from "../contact/contact";
import "./mobile-app.css";

export const MobileApp = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <div>
      <MobileSidebar open={openSidebar} setOpenSidebar={setOpenSidebar} />
      <div className="mobile-layout">
        <Navbar onMenuClicked={() => setOpenSidebar(true)} />
        <ProfileWrapper />
        <About />
        <Projects />
        <TechTalks />
        <Volunteerings />
        <Skills />
        <Contact />
      </div>
    </div>
  );
};
