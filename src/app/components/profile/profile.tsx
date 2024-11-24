"use client";
import React, { useEffect, useRef } from "react";
import "./profile.css";
import "../../styles/colors.css";
import Image from "next/image";
import Picture from "../../../../public/images/profile-picture.png";
import Link from "next/link";

function Profile() {
  const gitHubRef = useRef<HTMLDivElement>(null);
  const xRef = useRef<HTMLDivElement>(null);
  const linkedInRef = useRef<HTMLDivElement>(null);

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
    <div className="profile-container">
      <div className="picture-container">
        <Image
          className="profile-picture"
          src={Picture}
          alt="profile picture"
        />
      </div>
      <div className="social-media-container">
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
