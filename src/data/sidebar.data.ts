import { navItem } from "@/types/sidebar-types";

export const navItems: navItem[] = [
  { href: "/", label: "about", match: ["/", "/about"] },
  { href: "/projects", label: "projects", match: ["/projects"] },
  { href: "/skills", label: "skills", match: ["/skills"] },
  { href: "/techtalks", label: "techtalks", match: ["/techtalks"] },
  { href: "/volunteerings", label: "volunteerings", match: ["/volunteerings"] },
  { href: "/contact", label: "contact", match: ["/contact"] },
];
