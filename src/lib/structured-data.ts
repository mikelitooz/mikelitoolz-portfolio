import React from 'react';

export interface StructuredDataProps {
  data: Record<string, unknown>;
}

export function StructuredData({ data }: StructuredDataProps): React.ReactElement {
  const jsonLd = JSON.stringify(data);

  return React.createElement('script', {
    type: 'application/ld+json',
    dangerouslySetInnerHTML: { __html: jsonLd },
    suppressHydrationWarning: true,
  });
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://www.izzydevbuilds.xyz/#organization',
    name: 'IzzyDevBuilds',
    alternateName: 'Israel Chukwudi - Fullstack Developer & AI Automation Specialist',
    url: 'https://www.izzydevbuilds.xyz',
    logo: 'https://www.izzydevbuilds.xyz/icon-512x512.png',
    description:
      'Professional fullstack development and AI automation services. Specializing in MVP development for startups, AI workflow automation, and UI/UX design. 4+ years experience, 10+ successful projects.',
    founder: {
      '@type': 'Person',
      '@id': 'https://www.izzydevbuilds.xyz/#person',
      name: 'Israel Chukwudi',
      alternateName: 'Izzy',
      givenName: 'Israel',
      familyName: 'Chukwudi',
      jobTitle: 'Fullstack Developer & AI Automation Specialist',
      email: 'israel@izzydevbuilds.xyz',
      url: 'https://www.izzydevbuilds.xyz',
      image: 'https://www.izzydevbuilds.xyz/icon-512x512.png',
      sameAs: [
        'https://x.com/izzydevbuilds',
        'https://www.linkedin.com/in/israelchukwudi/',
        'https://github.com/chiizzy1',
        'https://www.youtube.com/@Izzydev_1',
        'https://t.me/izzydevbuilds',
      ],
      knowsAbout: [
        'Full-Stack Development',
        'MVP Development',
        'AI Automation',
        'Next.js',
        'TypeScript',
        'React',
        'Node.js',
        'n8n',
        'Workflow Automation',
        'Claude AI',
        'OpenAI',
        'Langchain',
        'Supabase',
        'Firebase',
        'PostgreSQL',
        'UI/UX Design',
        'API Development',
        'SaaS Development',
        'Fintech Development',
      ],
      knowsLanguage: ['English'],
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'israel@izzydevbuilds.xyz',
        url: 'https://cal.com/izzydevbuild/30min',
        availableLanguage: ['English'],
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '2',
      bestRating: '5',
      worstRating: '1',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG',
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'MVP Development',
            description: 'Fast-track validation for startup ideas with rapid MVP development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Automation & Workflows',
            description: 'AI systems that save 10+ hours per week with proven ROI',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'UI/UX Design',
            description: 'User-focused interface design prioritizing clarity and usability',
          },
        },
      ],
    },
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.izzydevbuilds.xyz/#website',
    url: 'https://www.izzydevbuilds.xyz',
    name: 'IzzyDevBuilds - Fullstack Developer & AI Automation Specialist',
    description:
      'Professional fullstack development and AI automation services for startups and businesses',
    publisher: {
      '@id': 'https://www.izzydevbuilds.xyz/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.izzydevbuilds.xyz/?s={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateServiceSchema(serviceType: 'mvp' | 'automation' | 'design') {
  const services = {
    mvp: {
      name: 'MVP Development',
      description:
        'Fast-track MVP development for startups. Build products that test assumptions fast and iterate based on what real users actually do. Typical delivery: 1-4 weeks.',
      serviceType: 'Software Development',
      provider: { '@id': 'https://www.izzydevbuilds.xyz/#organization' },
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: 'Contact for quote',
        },
      },
    },
    automation: {
      name: 'AI Automation & Workflow Optimization',
      description:
        'AI systems that save 10+ hours per week with proven ROI. Automate repetitive tasks so teams can focus on decisions that move the needle. Proven results: 85% auto-response rate, 60% ticket reduction.',
      serviceType: 'AI Automation',
      provider: { '@id': 'https://www.izzydevbuilds.xyz/#organization' },
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: 'Contact for quote',
        },
      },
    },
    design: {
      name: 'UI/UX Design',
      description:
        'Design for clarity first, aesthetics second. User-focused interface design that prioritizes usability over decoration. If users have to think for more than 5 seconds, we redesign it.',
      serviceType: 'Design Service',
      provider: { '@id': 'https://www.izzydevbuilds.xyz/#organization' },
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'USD',
          price: 'Contact for quote',
        },
      },
    },
  };

  const service = services[serviceType];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://www.izzydevbuilds.xyz/#service-${serviceType}`,
    ...service,
  };
}

export interface FAQ {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export interface Testimonial {
  id: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  content: string;
  rating: 5;
  date: string;
  project?: string;
  verified: boolean;
}

export function generateReviewSchema(testimonial: Testimonial) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    '@id': `https://www.izzydevbuilds.xyz/#review-${testimonial.id}`,
    itemReviewed: {
      '@id': 'https://www.izzydevbuilds.xyz/#organization',
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
    author: {
      '@type': 'Person',
      name: testimonial.author.name,
      jobTitle: testimonial.author.role,
      worksFor: {
        '@type': 'Organization',
        name: testimonial.author.company,
      },
    },
    reviewBody: testimonial.content,
    datePublished: testimonial.date,
  };
}

export interface Project {
  title: string;
  description: string;
  link?: string;
  tech: string[];
  category?: string;
}

export function generateProjectSchema(project: Project, index: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `https://www.izzydevbuilds.xyz/#project-${index}`,
    name: project.title,
    description: project.description,
    url: project.link,
    creator: {
      '@id': 'https://www.izzydevbuilds.xyz/#person',
    },
    keywords: project.tech.join(', '),
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface BlogPostSchema {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  image?: string;
  readingTime: string;
}

export function generateArticleSchema(post: BlogPostSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `https://www.izzydevbuilds.xyz/blog/${post.slug}#article`,
    headline: post.title,
    description: post.description,
    image: post.image || 'https://www.izzydevbuilds.xyz/icon-512x512.png',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      '@id': 'https://www.izzydevbuilds.xyz/#person',
      name: post.author,
    },
    publisher: {
      '@id': 'https://www.izzydevbuilds.xyz/#organization',
    },
    articleSection: post.category,
    keywords: post.tags.join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.izzydevbuilds.xyz/blog/${post.slug}`,
    },
  };
}

export function generateBlogListingSchema(posts: BlogPostSchema[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://www.izzydevbuilds.xyz/blog#blog',
    name: 'IzzyDevBuilds Blog',
    description: 'Articles about MVP development, AI automation, and web development',
    url: 'https://www.izzydevbuilds.xyz/blog',
    author: {
      '@id': 'https://www.izzydevbuilds.xyz/#person',
    },
    publisher: {
      '@id': 'https://www.izzydevbuilds.xyz/#organization',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `https://www.izzydevbuilds.xyz/blog/${post.slug}`,
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: {
        '@id': 'https://www.izzydevbuilds.xyz/#person',
      },
    })),
  };
}
