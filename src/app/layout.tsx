import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/colors.css";
import "./layout.css";
import Sidebar from "./components/sidebar/sidebar";

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
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${notoSans.variable}`}>
        <div className="portfolio-container">
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
