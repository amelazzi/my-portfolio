"use client";
import React from "react";
import "./sidebar.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItem } from "@/types/sidebar-types";

const navItems: navItem[] = [
  { href: "/", label: "about", match: ["/", "/about"] },
  { href: "/projects", label: "projects", match: ["/projects"] },
  { href: "/skills", label: "skills", match: ["/skills"] },
  { href: "/techtalks", label: "techtalks", match: ["/techtalks"] },
  { href: "/volunteerings", label: "volunteerings", match: ["/volunteerings"] },
  { href: "/contact", label: "contact", match: ["/contact"] },
];

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
