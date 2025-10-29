import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Automation Services | Save 20+ Hours/Week | IzzyDevBuilds",
  description: "Custom AI automation systems using n8n, Claude AI, and Make. Handle customer support, lead nurturing, and data entry automatically. Real case studies with proven results.",
  keywords: [
    "AI automation services",
    "business process automation",
    "n8n automation expert",
    "Claude AI integration",
    "workflow automation specialist",
    "automated customer support",
    "lead nurturing automation",
    "task automation",
    "AI workflow builder",
    "make.com automation",
    "zapier alternative",
    "custom automation solutions"
  ],
  alternates: {
    canonical: "https://www.izzydevbuilds.xyz/automation",
  },
  openGraph: {
    title: "AI Automation Services | Save 20+ Hours/Week",
    description: "Build custom AI automation systems that handle customer support, lead nurturing, data entry, and more. See real results from businesses like yours.",
    url: "https://www.izzydevbuilds.xyz/automation",
    siteName: "IzzyDevBuilds",
    images: [
      {
        url: "https://x.com/izzydev_/photo",
        width: 1200,
        height: 630,
        alt: "AI Automation Services by IzzyDevBuilds",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | Save 20+ Hours/Week",
    description: "Custom AI automation systems that handle repetitive tasks automatically. Built with n8n, Claude AI, and Make.",
    images: ["https://x.com/izzydev_/photo"],
    creator: "@izzydevbuilds",
    site: "@izzydevbuilds",
  },
}

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
