"use client";
import React, { useEffect, useRef } from "react";
import "./sidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sidebarRef.current) {
      sidebarRef.current.style.width =
        pathname === "/" || pathname === "/about" ? "650px" : "400px";
    }
  }, [pathname]);

  return (
    <div className="sidebar-container" ref={sidebarRef}>
      <nav>
        <Link
          href="/"
          className={`section-link ${
            pathname === "/" || pathname === "/about" ? "active" : ""
          }`}
        >
          {(pathname === "/" || pathname === "/about") && "/"} ABOUT
        </Link>
        <Link
          href="/experiences"
          className={`section-link ${
            pathname === "/experiences" ? "active" : ""
          }`}
        >
          {pathname === "/experiences" && "/"} EXPERIENCES
        </Link>
        <Link
          href="/skills"
          className={`section-link ${pathname === "/skills" ? "active" : ""}`}
        >
          {pathname === "/skills" && "/"} SKILLS
        </Link>
        <Link
          href="/volunteerings"
          className={`section-link ${
            pathname === "/volunteerings" ? "active" : ""
          }`}
        >
          {pathname === "/volunteerings" && "/"} VOLUNTEERINGS
        </Link>
        <Link
          href="/contact"
          className={`section-link ${pathname === "/contact" ? "active" : ""}`}
        >
          {pathname === "/contact" && "/"} CONTACT
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
