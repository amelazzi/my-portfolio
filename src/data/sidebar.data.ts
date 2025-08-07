import { navItem } from "@/types/sidebar-types";

export const navItems: navItem[] = [
  { id: "profile", href: "/", label: "about", match: ["/", "/about"] },
  {
    id: "projects",
    href: "/projects",
    label: "projects",
    match: ["/projects"],
  },
  { id: "skills", href: "/skills", label: "skills", match: ["/skills"] },
  {
    id: "tech-talks",
    href: "/techtalks",
    label: "techtalks",
    match: ["/techtalks"],
  },
  {
    id: "volunteerings",
    href: "/volunteerings",
    label: "volunteerings",
    match: ["/volunteerings"],
  },
  { id: "contact", href: "/contact", label: "contact", match: ["/contact"] },
];
