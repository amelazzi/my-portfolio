import localFont from "next/font/local";
import "./styles/globals.css";
import "./styles/colors.css";

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
        {children}
      </body>
    </html>
  );
}
