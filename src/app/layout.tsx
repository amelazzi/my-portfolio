"use client";
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/colors.css";
import "./layout.css";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/profile";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";
import { handleStyleUpdate } from "../utils/updateStyle";

const oswald = localFont({
  src: "./fonts/OswaldVF.ttf",
  variable: "--font-oswald",
  weight: "100 900",
});

const notoSans = localFont({
  src: "./fonts/NotoSansVF.ttf",
  variable: "--font-noto-sans",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const portfolioContainerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    handleStyleUpdate(
      pathname,
      portfolioContainerRef,
      "grid-template-columns: 400px 1fr",
      "grid-template-columns: 675px 1fr"
    );

    handleStyleUpdate(
      pathname,
      headerRef,
      "width: calc(100% - 320px); align-items: center; transform: none; height:25vh",
      "width: calc(100% - 420px); align-items: start; top: 50%; transform: translateY(-50%)"
    );

    handleStyleUpdate(pathname, mainRef, "margin-top: 25vh", "margin-top: 0vh");
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${oswald.variable} ${notoSans.variable}`}>
        <div className="header" ref={headerRef}>
          <Profile />
          <a href="/resume_Amel_AZZI.pdf" download>
            <button className="download-btn">Download CV</button>
          </a>
        </div>
        <div className="portfolio-container" ref={portfolioContainerRef}>
          <Sidebar />
          <main ref={mainRef}>{children}</main>
        </div>
      </body>
    </html>
  );
}
