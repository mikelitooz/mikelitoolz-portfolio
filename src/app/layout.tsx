import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Fullstack Developer & AI Automation Builder",
  description: "Portfolio showcasing fullstack web development and AI automation workflows",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
