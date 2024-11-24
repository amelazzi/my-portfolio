"use client";
import React from "react";
import "./sidebar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="sidebar-container">
      <nav>
        <Link
          href="/"
          className={`section-link ${pathname === "/" ? "active" : ""}`}
        >
          {pathname === "/" && "/"} ABOUT
        </Link>
      </nav>
    </div>
  );
}

export default Sidebar;
