import { Metadata } from 'next';

export const defaultKeywords = [
  'fullstack developer',
  'MVP development',
  'AI automation',
  'Next.js developer',
  'startup developer',
  'workflow automation',
  'web development',
  'React developer',
  'TypeScript',
  'Supabase',
  'TailwindCSS',
  'n8n',
  'Claude AI',
  'custom software development',
  'technical consulting',
  'rapid prototyping',
];

export interface PageMetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    title?: string;
    description?: string;
    images?: string[];
  };
}

export function generatePageMetadata({
  title,
  description,
  keywords = [],
  canonical,
  openGraph,
  twitter,
}: PageMetadataConfig): Metadata {
  const allKeywords = [...defaultKeywords, ...keywords];

  const ogTitle = openGraph?.title || title;
  const ogDescription = openGraph?.description || description;
  const twitterTitle = twitter?.title || title;
  const twitterDescription = twitter?.description || description;

  return {
    title,
    description,
    keywords: allKeywords,
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical || 'https://www.izzydevbuilds.xyz',
      siteName: 'IzzyDevBuilds',
      images: openGraph?.images || [
        {
          url: 'https://www.izzydevbuilds.xyz/og-image.png',
          width: 1200,
          height: 630,
          alt: 'IzzyDevBuilds - Fullstack Developer & AI Automation Specialist',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: twitter?.images || ['https://www.izzydevbuilds.xyz/og-image.png'],
      creator: '@izzydev_',
      site: '@izzydev_',
    },
    alternates: {
      canonical: canonical || 'https://www.izzydevbuilds.xyz',
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
