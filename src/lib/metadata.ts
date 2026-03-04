import { Metadata } from 'next';

export const defaultKeywords = [
  'AI automation agency',
  'AI agents',
  'workflow automation',
  'n8n expert',
  'RAG pipelines',
  'business automation',
  'AI customer support',
  'operational automation',
  'Micheal Ifeanyi',
  'automation infrastructure',
  'lead generation automation',
  'healthcare automation',
  'real estate automation',
  'cloud AI infrastructure',
  'TypeScript',
  'Next.js',
  'Python',
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
      url: canonical || 'https://www.michealifeanyi.com',
      siteName: 'Micheal Ifeanyi — AI Automation Agency',
      images: openGraph?.images || [
        {
          url: 'https://www.michealifeanyi.com/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Micheal Ifeanyi — AI Automation Agency',
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: twitterTitle,
      description: twitterDescription,
      images: twitter?.images || ['https://www.michealifeanyi.com/og-image.png'],
    },
    alternates: {
      canonical: canonical || 'https://www.michealifeanyi.com',
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
