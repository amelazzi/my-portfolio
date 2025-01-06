"use client";
import { usePathname } from "next/navigation";
import About from "./about/page";
import Experiences from "./experiences/page";

export default function Index() {
  const pathname = usePathname();

  return (
    <div>
      {pathname === "/" && <About />}
      {pathname === "/experiences" && <Experiences />}
    </div>
  );
}
