"use client";
import React, { RefObject, useEffect, useRef } from "react";
import "./profile.css";
import "../../styles/colors.css";
import Image from "next/image";
import Picture from "../../../../public/images/profile-picture.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleStyleUpdate } from "@/utils/updateStyle";

function Profile() {
  const gitHubRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);
  const linkedInRef = useRef<HTMLDivElement>(null);

  const pathname = usePathname();
  const profileContainerRef = useRef<HTMLDivElement>(null);
  const pictureContainerRef = useRef<HTMLDivElement>(null);
  const SocialMediasRef = useRef<HTMLDivElement>(null);
  const informationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleStyleUpdate(
      pathname,
      pictureContainerRef,
      "max-width: 160px; min-width: 160px;",
      "max-width: 500px; min-width: 500px;"
    );
    handleStyleUpdate(
      pathname,
      SocialMediasRef,
      "display: none;",
      "display: flex;"
    );
    handleStyleUpdate(
      pathname,
      profileContainerRef,
      "justify-content: start; top: 32px; left: 300px;",
      "justify-content: center; top: 0px; left: 400px;"
    );
    handleStyleUpdate(
      pathname,
      informationRef,
      "display: flex;",
      "display: none;"
    );
  }, [pathname]);

  useEffect(() => {
    if (gitHubRef.current) {
      gitHubRef.current.style.backgroundColor = "#FDAE03";
    }
    if (linkedInRef.current) {
      linkedInRef.current.style.backgroundColor = "#579CF8";
    }
    if (xRef.current) {
      xRef.current.style.backgroundColor = "#F0477D";
    }
  }, []);

  return (
    <div className="profile-container" ref={profileContainerRef}>
      <div className="profile-information">
        <div className="picture-container" ref={pictureContainerRef}>
          <Image
            className="profile-picture"
            src={Picture}
            alt="profile picture"
          />
        </div>
        <div className="information" ref={informationRef}>
          <h2>Amel AZZI</h2>
          <div>-----------------------------</div>
          <h4> Fullstack Developer </h4>
        </div>
      </div>
      <div className="social-media-container" ref={SocialMediasRef}>
        <div className="social-media" ref={gitHubRef}>
          <Link href="https://github.com/amelazzi" target="_blank">
            <Image
              src="/icons/github-icon.svg"
              width={25}
              height={25}
              alt="X icon"
            />
          </Link>
        </div>
        <div className="social-media" ref={linkedInRef}>
          <Link
            href="https://www.linkedin.com/in/amel-azzi-625446b2/"
            target="_blank"
          >
            <Image
              src="/icons/linkedin-icon.svg"
              width={25}
              height={25}
              alt="X icon"
            />
          </Link>
        </div>
        <div className="social-media" ref={xRef}>
          <Link href="https://x.com/amelias_azzi" target="_blank">
            <Image
              src="/icons/x-icon.svg"
              width={25}
              height={25}
              alt="X icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
