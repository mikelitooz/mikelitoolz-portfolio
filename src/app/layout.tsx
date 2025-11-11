import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollTriggerSafety } from "@/components/scroll-trigger-safety";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Izzy | Fullstack Developer & AI Automation Specialist",
  description:
    "Turn your idea into a fast, scalable MVP with a developer who combines code and no-code tools. Specializing in Next.js, AI automation, and workflow optimization for startups.",
  keywords: [
    "fullstack developer",
    "MVP development",
    "AI automation",
    "Next.js developer",
    "startup developer",
    "workflow automation",
    "web development",
    "React developer",
    "TypeScript",
    "Supabase",
    "TailwindCSS",
    "n8n",
    "Claude AI",
    "custom software development",
    "technical consulting",
    "rapid prototyping",
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Turn Your Idea Into a Live Product Fast | Izzy - Fullstack Developer",
    description:
      "Most founders struggle to find developers who ship on time without technical drama. I build MVPs and AI automation systems that help you launch quickly, test your market, and scale without the headaches.",
    url: "https://www.izzydevbuilds.xyz",
    siteName: "IzzyDevBuilds",
    images: [
      {
        url: "https://x.com/izzydev_/photo", // Replace with your actual OG image path
        width: 1200,
        height: 630,
        alt: "Izzy - Fullstack Developer & AI Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Turn Your Idea Into a Live Product Fast | Izzy - Fullstack Developer",
    description:
      "Building MVPs and AI automation systems that help founders launch quickly and scale without headaches. Expert in Next.js, AI, and workflow optimization.",
    images: ["https://x.com/izzydev_/photo"], // Replace with your actual Twitter image path
    creator: "@izzydev_", // Replace with your Twitter handle
    site: "@izzydev_", // Replace with your Twitter handle
  },

  // Additional metadata
  alternates: {
    canonical: "https://www.izzydevbuilds.xyz",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512x512.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0e0904",
    "theme-color": "#0e0904",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
        <ScrollTriggerSafety />
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
