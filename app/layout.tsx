import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";
import "./globals.css";

import MainNav from "./components/layout/MainNav";
import Footer from "./components/layout/Footer";

const fontFraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
  display: "block",
  variable: "--font-fraunces",
});

const fontBarlow = Barlow({
  subsets: ["latin"],
  weight: ["400"],
  display: "block",
  variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Coffeeroasters",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam atque tempore optio minus consequuntur similique!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontBarlow.variable} ${fontFraunces.variable} min-h-[100dvh] font-barlow`}
      >
        <MainNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
