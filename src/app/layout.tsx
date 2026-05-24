import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollTriggerSafety } from "@/components/scroll-trigger-safety";
import SocialWidget from "@/components/SocialWidget";
import { StructuredData, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.michealifeanyi.com"),
  title: "AI Automation Systems | Micheal Ifeanyi",
  description:
    "AI automation agency helping businesses automate operations using AI agents, workflow automation, and cloud infrastructure.",
  keywords: [
    "AI automation",
    "AI agents",
    "workflow automation",
    "n8n automation",
    "AI consulting",
    "AI infrastructure",
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "AI Automation Systems | Micheal Ifeanyi",
    description:
      "AI automation agency helping businesses automate operations using AI agents, workflow automation, and cloud infrastructure.",
    url: "https://www.michealifeanyi.com",
    siteName: "Micheal Ifeanyi",
    images: [
      {
        url: "https://www.michealifeanyi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Micheal Ifeanyi — AI Automation Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Systems | Micheal Ifeanyi",
    description:
      "AI automation agency helping businesses automate operations using AI agents, workflow automation, and cloud infrastructure.",
    images: ["https://www.michealifeanyi.com/og-image.png"],
  },

  // Additional metadata
  alternates: {
    canonical: "https://www.michealifeanyi.com",
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
    shortcut: "/icon",
    apple: "/apple-icon",
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#0e0904",
    "theme-color": "#0e0904",
  },
  verification: {
    google: "d5a337WTJaTmtPq08kf6cv1GdJ536mi9ysEhVlEq-gc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();

  return (
    <html lang="en">
      <head>
        <StructuredData data={organizationSchema} />
        <StructuredData data={websiteSchema} />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable} antialiased`}>
        <ScrollTriggerSafety />
        <SmoothScroll>
          <div className="bg-noise" />
          <Navbar />
          {children}
          <Footer />
          {/* <SocialWidget /> */}
        </SmoothScroll>
      </body>
      <GoogleAnalytics gaId="G-440RLBVLYD" />
    </html>
  );
}
