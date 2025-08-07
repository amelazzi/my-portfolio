"use client";
import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/colors.css";
import "./layout.scss";
import Sidebar from "./components/sidebar/sidebar";
import { usePathname } from "next/navigation";
import { ProfileWrapper } from "./components/profile/profile-wrapper/profile-wrapper";

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
  const isCompact = pathname !== "/" && pathname !== "/about";

  return (
    <html lang="en">
      <body className={`${oswald.variable} ${notoSans.variable}`}>
        <div>
          <a href="/resume_Amel_AZZI.pdf" download>
            <button className="download-btn">Download Resume</button>
          </a>
          <div className={`portfolio-container ${isCompact ? "compact" : ""}`}>
            <div className="sidebar">
              <Sidebar />
              <ProfileWrapper />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
