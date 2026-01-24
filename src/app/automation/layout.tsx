import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Automation Services | Save 20+ Hours/Week | Micheal Ifeanyi",
  description: "I build autonomous AI agents and workflow infrastructures that save businesses time. Specializing in n8n, RAG pipelines, and operational automation.",
  keywords: [
    "AI automation services",
    "business process automation",
    "n8n automation expert",
    "workflow automation specialist",
    "automated customer support",
    "lead nurturing automation",
    "task automation",
    "AI workflow builder",
    "RAG pipelines",
    "AI agents",
    "custom automation solutions"
  ],
  alternates: {
    canonical: "https://www.michealifeanyi.com/automation",
  },
  openGraph: {
    title: "AI Automation Services | Save 20+ Hours/Week",
    description: "Build autonomous AI agents and workflow infrastructures that save businesses time. See real results from businesses like yours.",
    url: "https://www.michealifeanyi.com/automation",
    siteName: "Micheal Ifeanyi",
    images: [
      {
        url: "https://www.michealifeanyi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Automation Services by Micheal Ifeanyi",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation Services | Save 20+ Hours/Week",
    description: "Autonomous AI agents and workflow infrastructures that save businesses time. Built with n8n, RAG pipelines, and operational automation.",
    images: ["https://www.michealifeanyi.com/og-image.png"],
  },
}

export default function AutomationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
