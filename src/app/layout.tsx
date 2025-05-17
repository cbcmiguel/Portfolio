import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import { Abril_Fatface } from "next/font/google";

import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const abrilFatface = Abril_Fatface({
  weight: ["400"],
  variable: "--font-abril-fatface",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elice Miguel Portfolio",
  description: "Elice Miguel Personal Portfolio",
  icons:{
    icon: "/favicon.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${abrilFatface.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
