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
  title: "Micheal Ifeanyi | AI Automation Agency — AI Agents, Workflow Automation & RAG Systems",
  description:
    "We build AI automation systems that run your business operations. AI customer support agents, workflow automation, RAG knowledge assistants, and cloud AI infrastructure. Save 10+ hours per week.",
  keywords: [
    "AI automation engineer",
    "n8n expert",
    "AI agents",
    "workflow automation",
    "RAG pipelines",
    "Pinecone",
    "automation infrastructure",
    "Micheal Ifeanyi",
    "business automation",
    "operational automation",
    "AI workflow builder",
    "lead generation automation",
    "cold email automation",
    "healthcare automation",
    "recruitment automation",
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Micheal Ifeanyi | AI Automation Agency",
    description:
      "We build AI automation systems that run your operations. AI agents, workflow automation, RAG systems — save 10+ hours per week.",
    url: "https://www.michealifeanyi.com",
    siteName: "Micheal Ifeanyi — AI Automation Agency",
    images: [
      {
        url: "https://www.michealifeanyi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Micheal Ifeanyi — AI Automation Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Micheal Ifeanyi | AI Automation Agency",
    description:
      "We build AI automation systems that run your operations. AI agents, workflow automation, RAG systems — save 10+ hours per week.",
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
