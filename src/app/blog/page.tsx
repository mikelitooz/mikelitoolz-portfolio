import type { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, Tag } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { StructuredData, generateBlogListingSchema } from '@/lib/structured-data';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog - MVP Development & AI Automation Insights | Israel Chukwudi',
  description:
    'Learn about MVP development, AI automation, n8n workflows, and modern web development. Practical guides and insights from building real products.',
  alternates: {
    canonical: 'https://www.izzydevbuilds.xyz/blog',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const blogSchema = generateBlogListingSchema(posts);

  return (
    <>
      <StructuredData data={blogSchema} />
      <main className="min-h-screen bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">Blog</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Practical insights on MVP development, AI automation, and building products that ship fast.
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length === 0 ? (
            <div className="rounded-3xl bg-white p-12 text-center shadow-sm">
              <p className="text-muted-foreground">No blog posts yet. Check back soon for articles on MVP development and AI automation.</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
                >
                  {/* Image placeholder */}
                  {post.image ? (
                    <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5">
                      <Image src={post.image} alt={post.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    </div>
                  ) : (
                    <div className="aspect-video w-full bg-gradient-to-br from-accent/20 to-accent/5" />
                  )}

                  {/* Content */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Category */}
                    <div className="mb-3 flex items-center gap-2">
                      <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">{post.category}</span>
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 text-xl font-bold text-foreground group-hover:text-accent transition-colors">{post.title}</h2>

                    {/* Description */}
                    <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-3">{post.description}</p>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readingTime}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Tag className="h-3 w-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
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
