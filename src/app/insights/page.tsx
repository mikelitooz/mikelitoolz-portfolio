import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { StructuredData, generateBlogListingSchema } from "@/lib/structured-data";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
    title: "Technical Insights | Micheal Ifeanyi — AI Automation Agency",
    description:
        "Practical insights on AI automation, n8n workflows, RAG pipelines, and building production AI systems. Learn from real projects.",
    keywords: ["AI automation insights", "n8n tutorials", "workflow automation guides", "RAG pipeline guides"],
    canonical: "https://www.michealifeanyi.com/insights",
});

export default function InsightsPage() {
    const posts = getAllPosts();
    const blogSchema = generateBlogListingSchema(posts);

    return (
        <>
            <StructuredData data={blogSchema} />
            <main className="min-h-screen bg-background pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="mb-16">
                        <p className="text-sm text-swiss-gray tracking-[0.3em] uppercase mb-4">
                            Knowledge Base
                        </p>
                        <h1 className="text-5xl md:text-7xl font-bold text-swiss-platinum tracking-tight">
                            Technical Insights
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-swiss-gray max-w-2xl leading-relaxed">
                            Practical guides on AI automation, n8n workflows, and building
                            production AI systems. Lessons from real client projects.
                        </p>
                    </div>

                    {/* Posts Grid */}
                    {posts.length === 0 ? (
                        <div className="rounded-xl border border-swiss-border bg-swiss-charcoal p-12 text-center">
                            <p className="text-swiss-gray">No articles yet. Check back soon.</p>
                        </div>
                    ) : (
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {posts.map((post) => (
                                <Link
                                    key={post.slug}
                                    href={`/insights/${post.slug}`}
                                    className="group flex flex-col border border-swiss-border bg-swiss-charcoal rounded-xl overflow-hidden transition-colors duration-300 hover:border-swiss-gray/40"
                                >
                                    {post.image ? (
                                        <div className="relative aspect-video w-full overflow-hidden bg-swiss-stone">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    ) : (
                                        <div className="aspect-video w-full bg-swiss-stone" />
                                    )}

                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="mb-4">
                                            <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray rounded-full">
                                                {post.category}
                                            </span>
                                        </div>

                                        <h2 className="mb-3 text-xl font-bold text-swiss-platinum leading-tight group-hover:text-white transition-colors">
                                            {post.title}
                                        </h2>

                                        <p className="mb-4 flex-1 text-sm text-swiss-gray line-clamp-3 leading-relaxed">
                                            {post.description}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-swiss-border pt-4 text-xs font-mono text-swiss-gray tracking-widest uppercase">
                                            <time dateTime={post.date}>
                                                {new Date(post.date).toLocaleDateString("en-US", {
                                                    month: "short",
                                                    day: "numeric",
                                                    year: "numeric",
                                                })}
                                            </time>
                                            <span>{post.readingTime}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>
        </>
    );
}
