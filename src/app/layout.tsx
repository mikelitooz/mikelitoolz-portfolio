import type React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollTriggerSafety } from "@/components/scroll-trigger-safety";
import { StructuredData, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Israel Chukwudi - Fullstack Developer & AI Automation Specialist | Build Your MVP Fast",
  description:
    "Experienced fullstack developer with 4+ years specializing in MVP development and AI automation. Build Next.js applications and intelligent workflows that help startups launch fast and scale smart. 10+ successful projects delivered. Expert in n8n, Claude AI, OpenAI, and workflow optimization.",
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
    "n8n expert",
    "n8n automation",
    "Claude AI",
    "OpenAI integration",
    "custom software development",
    "technical consulting",
    "rapid prototyping",
    "hire fullstack developer",
    "MVP developer for startups",
    "n8n workflow automation",
    "AI workflow builder",
    "startup CTO",
    "technical consultant",
    "SaaS developer",
    "fintech developer",
    "Israel Chukwudi",
    "Izzy developer",
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Israel Chukwudi - Fullstack Developer & AI Automation Specialist",
    description:
      "Build your MVP fast with an experienced developer who specializes in Next.js and AI automation. 4+ years experience, 10+ successful projects. Expert in n8n, Claude AI, OpenAI, and workflow optimization for startups.",
    url: "https://www.izzydevbuilds.xyz",
    siteName: "IzzyDevBuilds",
    images: [
      {
        url: "https://www.izzydevbuilds.xyz/icon-512x512.png",
        width: 1200,
        height: 630,
        alt: "Israel Chukwudi - Fullstack Developer & AI Automation Specialist",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Israel Chukwudi - Fullstack Developer & AI Automation Specialist",
    description:
      "Build MVPs and AI automation systems that help startups launch quickly and scale smart. Expert in Next.js, n8n, Claude AI, and workflow optimization. 4+ years experience, 10+ successful projects.",
    images: ["https://www.izzydevbuilds.xyz/icon-512x512.png"],
    creator: "@izzydev_",
    site: "@izzydev_",
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
        <ReactLenis root>
          <Navbar />
          {children}
          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}
