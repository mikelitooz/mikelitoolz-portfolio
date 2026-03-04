import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { StructuredData, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/structured-data";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";

interface InsightPostPageProps {
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

export async function generateMetadata({ params }: InsightPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return { title: "Post Not Found" };
    }

    return {
        title: `${post.title} | Micheal Ifeanyi — AI Automation Agency`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: post.image ? [post.image] : ["https://www.michealifeanyi.com/og-image.png"],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: post.image ? [post.image] : ["https://www.michealifeanyi.com/og-image.png"],
        },
        alternates: {
            canonical: `https://www.michealifeanyi.com/insights/${slug}`,
        },
    };
}

export default async function InsightPostPage({ params }: InsightPostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleSchema = generateArticleSchema(post);
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: "https://www.michealifeanyi.com" },
        { name: "Insights", url: "https://www.michealifeanyi.com/insights" },
        { name: post.title, url: `https://www.michealifeanyi.com/insights/${post.slug}` },
    ]);

    return (
        <>
            <StructuredData data={articleSchema} />
            <StructuredData data={breadcrumbSchema} />
            <main className="min-h-screen bg-background pt-32 pb-24">
                <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                    {/* Back */}
                    <Link
                        href="/insights"
                        className="mb-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-swiss-gray transition-colors hover:text-swiss-platinum"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Insights
                    </Link>

                    {/* Header */}
                    <header className="mb-12 border-b border-swiss-border pb-12">
                        <div className="mb-6">
                            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray rounded-full">
                                {post.category}
                            </span>
                        </div>

                        <h1 className="mb-6 text-4xl font-bold text-swiss-platinum sm:text-5xl lg:text-6xl tracking-tighter leading-[0.95]">
                            {post.title}
                        </h1>

                        <p className="mb-8 text-xl text-swiss-gray leading-relaxed">
                            {post.description}
                        </p>

                        <div className="flex flex-wrap items-center gap-6 text-sm text-swiss-gray uppercase tracking-widest font-mono">
                            <span className="text-swiss-platinum">{post.author}</span>
                            <div className="flex items-center gap-1.5">
                                <Calendar className="h-4 w-4" />
                                <time dateTime={post.date}>
                                    {new Date(post.date).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Clock className="h-4 w-4" />
                                <span>{post.readingTime}</span>
                            </div>
                        </div>

                        {post.tags.length > 0 && (
                            <div className="mt-6 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="flex items-center gap-1.5 px-3 py-1 text-xs border border-swiss-border text-swiss-gray rounded-full"
                                    >
                                        <Tag className="h-3.5 w-3.5" />
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </header>

                    {/* Image */}
                    {post.image && (
                        <div className="relative mb-16 aspect-video overflow-hidden rounded-lg border border-swiss-border bg-swiss-stone">
                            <Image src={post.image} alt={post.title} fill className="object-cover" />
                        </div>
                    )}

                    {/* Content */}
                    <div className="prose prose-lg prose-invert max-w-none">
                        <MDXRemote source={post.content} />
                    </div>

                    {/* CTA */}
                    <div className="mt-24 border border-swiss-border bg-swiss-charcoal rounded-xl p-12 text-center">
                        <h2 className="mb-4 text-3xl font-bold text-swiss-platinum tracking-tight">
                            Want to automate this?
                        </h2>
                        <p className="mb-8 text-swiss-gray max-w-2xl mx-auto">
                            Let&apos;s discuss how we can build this automation for your business.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-block bg-foreground text-background px-10 py-4 font-bold uppercase tracking-widest rounded-full transition-all duration-300 hover:scale-105"
                        >
                            Book Strategy Call
                        </Link>
                    </div>
                </article>
            </main>
        </>
    );
}
