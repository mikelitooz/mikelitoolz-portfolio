import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { StructuredData, generateArticleSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | IzzyDevBuilds Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : ['https://www.izzydevbuilds.xyz/icon-512x512.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : ['https://www.izzydevbuilds.xyz/icon-512x512.png'],
    },
    alternates: {
      canonical: `https://www.izzydevbuilds.xyz/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: 'https://www.izzydevbuilds.xyz' },
    { name: 'Blog', url: 'https://www.izzydevbuilds.xyz/blog' },
    { name: post.title, url: `https://www.izzydevbuilds.xyz/blog/${post.slug}` },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen bg-gray-50 py-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            {/* Category */}
            <div className="mb-4">
              <span className="rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">{post.category}</span>
            </div>

            {/* Title */}
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">{post.title}</h1>

            {/* Description */}
            <p className="mb-6 text-xl text-muted-foreground">{post.description}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1.5 rounded-full border border-gray-200 px-3 py-1 text-sm text-muted-foreground">
                    <Tag className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative mb-12 aspect-video overflow-hidden rounded-3xl">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-gray max-w-none rounded-3xl bg-white p-8 shadow-sm sm:p-12">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA Section */}
          <div className="mt-12 rounded-3xl bg-gradient-to-br from-accent/10 to-accent/5 p-8 text-center sm:p-12">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to build your MVP or automate your workflows?</h2>
            <p className="mb-6 text-muted-foreground">
              Let&apos;s discuss how I can help you ship faster and scale smarter.
            </p>
            <Link
              href="https://cal.com/izzydevbuild/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-accent px-8 py-3 font-medium text-white transition-all duration-300 hover:bg-accent/90 hover:shadow-lg"
            >
              Schedule a Call
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
