import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { StructuredData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

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
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Micheal Ifeanyi — Insights`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [post.image] : ["https://www.michealifeanyi.com/icon-512x512.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : ["https://www.michealifeanyi.com/icon-512x512.png"],
    },
    alternates: {
      canonical: `https://www.michealifeanyi.com/blog/${slug}`,
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
    { name: "Home", url: "https://www.michealifeanyi.com" },
    { name: "Blog", url: "https://www.michealifeanyi.com/blog" },
    { name: post.title, url: `https://www.michealifeanyi.com/blog/${post.slug}` },
  ]);

  return (
    <>
      <StructuredData data={articleSchema} />
      <StructuredData data={breadcrumbSchema} />
      <main className="min-h-screen bg-background py-20">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {/* Back to Blog */}
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Insights
          </Link>

          {/* Article Header */}
          <header className="mb-12 border-b border-border pb-12">
            {/* Category */}
            <div className="mb-6">
              <span className="border border-foreground/10 px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-muted-foreground">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="mb-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9]">
              {post.title}
            </h1>

            {/* Description */}
            <p className="mb-8 text-xl text-muted-foreground leading-relaxed">{post.description}</p>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground uppercase tracking-widest font-medium">
              <div className="flex items-center gap-2">
                <span className="text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
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
                  <span
                    key={tag}
                    className="flex items-center gap-1.5 border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    <Tag className="h-3.5 w-3.5" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.image && (
            <div className="relative mb-16 aspect-video overflow-hidden border border-border bg-secondary">
              <Image src={post.image} alt={post.title} fill className="object-cover" />
            </div>
          )}

          {/* Article Content */}
          <div className="prose prose-lg prose-neutral max-w-none bg-transparent p-0">
            <MDXRemote source={post.content} />
          </div>

          {/* CTA Section */}
          <div className="mt-24 border border-border bg-secondary/30 p-12 text-center">
            <h2 className="mb-6 text-3xl font-bold text-foreground uppercase tracking-tight">Ready to build?</h2>
            <p className="mb-8 text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s discuss how I can help you ship faster and scale smarter.
            </p>
            <Link
              href="https://cal.com/izzydevbuild/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-foreground text-background px-10 py-4 font-bold uppercase tracking-widest transition-all duration-300 hover:bg-muted-foreground hover:text-white"
            >
              Schedule a Call
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
