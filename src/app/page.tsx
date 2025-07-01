"use client";
import { usePathname } from "next/navigation";
import About from "./about/page";
import Projects from "./projects/page";

export default function Index() {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" && <About />}
      {pathname === "/projects" && <Projects />}
    </div>
  );
}
