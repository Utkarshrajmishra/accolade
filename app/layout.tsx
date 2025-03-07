"use clinet"

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import "./globals.css";


export const metadata: Metadata = {
  title: "Accolade - AI Cold Email Generator",
  description:
    "Turn LinkedIn job descriptions and your resume into personalized cold emails with the help of AI. Boost your outreach, stand out to recruiters, and land more interviews—effortlessly!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(23,23,23,0.4)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,23,23,0.4)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] h-full z-[-10]0" />
        <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
