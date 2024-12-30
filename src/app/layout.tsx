"use client";
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/colors.css";
import "./layout.css";
import Sidebar from "./components/sidebar/sidebar";
import Profile from "./components/profile/profile";
import { usePathname } from "next/navigation";
import { useRef, useEffect } from "react";

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

  useEffect(() => {
    if (portfolioContainerRef.current) {
      if (pathname !== "/" && pathname !== "/about") {
        portfolioContainerRef.current.style.gridTemplateColumns = "400px 1fr";
      } else {
        portfolioContainerRef.current.style.gridTemplateColumns = "675px 1fr";
      }
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className={`${oswald.variable} ${notoSans.variable}`}>
        <Profile />
        <div className="portfolio-container" ref={portfolioContainerRef}>
          <Sidebar />
          <main>
            <a href="/resume_Amel_AZZI.pdf" download>
              <button className="download-btn">Download CV</button>
            </a>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
