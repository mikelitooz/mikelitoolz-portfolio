import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { StructuredData, generateBlogListingSchema } from "@/lib/structured-data";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog - MVP Development & AI Automation Insights | Israel Chukwudi",
  description:
    "Learn about MVP development, AI automation, n8n workflows, and modern web development. Practical guides and insights from building real products.",
  alternates: {
    canonical: "https://www.izzydevbuilds.xyz/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const blogSchema = generateBlogListingSchema(posts);

  return (
    <>
      <StructuredData data={blogSchema} />
      <main className="min-h-screen bg-background py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-transit-heading text-foreground mix-blend-difference">INSIGHTS</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Practical insights on MVP development, AI automation, and building products that ship fast.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="rounded-none border border-border bg-card p-12 text-center">
              <p className="text-muted-foreground">No blog posts yet. Check back soon.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col border border-border bg-card transition-colors duration-300 hover:bg-secondary/20"
                >
                  {/* Image placeholder */}
                  {post.image ? (
                    <div className="relative aspect-video w-full overflow-hidden bg-secondary">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-secondary" />
                  )}

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Category */}
                    <div className="mb-4">
                      <span className="border border-foreground/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {post.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-2xl font-bold text-foreground leading-tight group-hover:text-foreground/70 transition-colors uppercase tracking-tight">
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.description}</p>

                    {/* Meta */}
                    <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-xs font-medium text-muted-foreground uppercase tracking-widest">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
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
