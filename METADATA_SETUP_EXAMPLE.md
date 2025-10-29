```typescript
export const metadata: Metadata = {
  title: "Airbills - Pay Bills & Book Flights with Crypto Stablecoin",
  description:
    "Pay bills and book flights with Crypto stablecoin on Solana. Fast, secure, and borderless payments powered by blockchain technology.",
  keywords: [
    "airbills",
    "solana",
    "stablecoin",
    "utility",
    "crypto payments",
    "bill payments",
    "flight bookings",
    "blockchain payments",
    "crypto travel",
    "web3 payments",
    "decentralized finance",
    "digital currency",
    "crypto wallet",
    "solana payments",
    "borderless payments",
    "crypto",
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Airbills - Pay Bills & Book Flights with Stablecoin",
    description:
      "Pay bills and book flights with stablecoin on Solana. Fast, secure, and borderless payments powered by blockchain technology.",
    url: "https://app.airbillspay.com",
    siteName: "Airbills",
    images: [
      {
        url: "https://app.airbillspay.com/og-image2.jpg", // Recommended size: 1200x630
        width: 1200,
        height: 630,
        alt: "Airbills - Crypto Payments Platform",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Airbills - Pay Bills & Book Flights with Stablecoin",
    description: "Pay bills and book flights with stablecoin on Solana. Fast, secure, and borderless payments.",
    images: ["https://app.airbillspay.com/og-image2.jpg"], // Recommended size: 1200x675
    site: "@airbillspay", // Your Twitter handle
    creator: "@airbillspay", // Content creator handle
  },

  // Additional metadata
  alternates: {
    canonical: "https://app.airbillspay.com",
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
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/logo.jpg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#da532c",
  },
};
```