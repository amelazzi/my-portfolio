"use client";
import React, { useEffect, useRef } from "react";
import "./profile.scss";
import "../../styles/colors.css";
import Image from "next/image";
import Picture from "../../../../public/images/profile-picture.png";
import { usePathname } from "next/navigation";
import { socialMedias } from "@/data/social-media.data";
import { SocialMedia } from "../social-media/social-media";

function Profile() {
  const pathname = usePathname();
  const isCompact = pathname !== "/" && pathname !== "/about";

  return (
    <div className={`profile-container ${isCompact ? "compact-profile" : ""}`}>
      <div className="profile-information">
        <div
          className={`picture-container ${isCompact ? "compact-picture" : ""}`}
        >
          <Image
            className="profile-picture"
            src={Picture}
            alt="profile picture"
          />
        </div>
        <div className={`${isCompact ? "information" : "hide-container"}`}>
          <h2>Amel AZZI</h2>
          <div>------------------------------</div>
          <h4> Fullstack Developer </h4>
        </div>
      </div>
      <div
        className={`${isCompact ? "hide-container" : "social-media-container"}`}
      >
        {socialMedias.map((item, index) => (
          <SocialMedia key={index} socialMedia={item} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
