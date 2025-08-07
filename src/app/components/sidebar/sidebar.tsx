"use client";
import React from "react";
import "./sidebar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/sidebar.data";

function Sidebar() {
  const pathname = usePathname();
  const isCompact = pathname !== "/" && pathname !== "/about";
  return (
    <div className={`sidebar-container ${isCompact ? "compact" : ""}`}>
      <nav>
        {navItems.map(({ href, label, match }) => {
          const isActive = match?.some((route) => pathname === route);
          const classStyle = `link-item ${isActive ? "active" : ""}`;
          return (
            <Link key={href} className={classStyle} href={href}>
              {isActive && "< "}
              {label.toUpperCase()}
              {isActive && " />"}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
