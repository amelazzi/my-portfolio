"use client";
import { usePathname } from "next/navigation";
import About from "./about/page";

export default function Index() {
  const pathname = usePathname();

  return <div>{pathname === "/" && <About />}</div>;
}
