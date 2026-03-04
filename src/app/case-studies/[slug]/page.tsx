import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { caseStudies } from "@/constants";
import { generatePageMetadata } from "@/lib/metadata";

// Static generation
export async function generateStaticParams() {
    return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const cs = caseStudies.find((c) => c.slug === slug);
    if (!cs) return {};

    return generatePageMetadata({
        title: `${cs.title} | Micheal Ifeanyi — AI Automation Agency`,
        description: cs.description,
        keywords: [...cs.tags, cs.industry, "case study", "AI automation"],
        canonical: `https://www.michealifeanyi.com/case-studies/${cs.slug}`,
    });
}

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const cs = caseStudies.find((c) => c.slug === slug);
    if (!cs) notFound();

    return (
        <main className="pt-32 pb-24">
            {/* JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "TechArticle",
                        headline: cs.title,
                        description: cs.description,
                        author: {
                            "@type": "Person",
                            name: "Micheal Ifeanyi",
                        },
                        publisher: {
                            "@type": "Organization",
                            name: "Micheal Ifeanyi — AI Automation Agency",
                            url: "https://www.michealifeanyi.com",
                        },
                        about: cs.industry,
                        keywords: cs.tags.join(", "),
                    }),
                }}
            />

            {/* Hero */}
            <section className="pb-16 md:pb-24">
                <Container>
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-swiss-gray text-sm tracking-widest uppercase mb-8 hover:text-swiss-platinum transition-colors"
                    >
                        ← Back to Case Studies
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {cs.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray rounded-full"
                            >
                                {tag}
                            </span>
                        ))}
                        <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-blue-500/30 text-blue-400 rounded-full">
                            {cs.industry}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-swiss-platinum tracking-tight leading-[1.1]">
                        {cs.title}
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-swiss-gray max-w-3xl leading-relaxed">
                        {cs.description}
                    </p>
                </Container>
            </section>

            {/* Hero Image or Video */}
            <section className="pb-16">
                <Container>
                    <div className="relative w-full aspect-video md:aspect-[21/9] bg-swiss-stone overflow-hidden rounded-lg">
                        {cs.video ? (
                            <video
                                src={cs.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <Image
                                src={cs.image}
                                alt={cs.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        )}
                    </div>
                </Container>
            </section>

            {/* Problem */}
            <section className="py-16 md:py-24 border-t border-swiss-border">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-sm text-swiss-gray tracking-[0.2em] uppercase">
                                The Problem
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-swiss-platinum mt-2">
                                What Was Broken
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-swiss-gray leading-relaxed whitespace-pre-line">
                                {cs.problem}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Solution */}
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-sm text-swiss-gray tracking-[0.2em] uppercase">
                                The Solution
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-swiss-platinum mt-2">
                                What We Built
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-swiss-gray leading-relaxed whitespace-pre-line">
                                {cs.solution}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Architecture */}
            <section className="py-16 md:py-24 border-t border-swiss-border">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-sm text-swiss-gray tracking-[0.2em] uppercase">
                                Architecture
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-swiss-platinum mt-2">
                                System Design
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="p-8 bg-swiss-charcoal border border-swiss-border rounded-xl font-mono text-sm text-swiss-gray leading-relaxed whitespace-pre-line">
                                {cs.architecture}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Technologies */}
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-sm text-swiss-gray tracking-[0.2em] uppercase">
                                Technologies
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-swiss-platinum mt-2">
                                Tech Stack
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="flex flex-wrap gap-3">
                                {cs.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-center gap-1 px-6 py-4 bg-swiss-black/40 border border-swiss-border rounded-xl"
                                    >
                                        <span className="text-swiss-platinum font-semibold">
                                            {tech.name}
                                        </span>
                                        <span className="text-xs text-swiss-gray tracking-wider uppercase">
                                            {tech.category}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Results */}
            <section className="py-16 md:py-24 border-t border-swiss-border">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-sm text-swiss-gray tracking-[0.2em] uppercase">
                                Results
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-swiss-platinum mt-2">
                                The Outcome
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <ul className="space-y-4">
                                {cs.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center mt-0.5">
                                            <span className="w-2 h-2 rounded-full bg-green-400" />
                                        </span>
                                        <span className="text-lg text-swiss-gray leading-relaxed">
                                            {result}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Container>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-swiss-platinum mb-4">
                            Want Results Like These?
                        </h2>
                        <p className="text-lg text-swiss-gray mb-8">
                            Book a free strategy session and let&apos;s discuss how AI
                            automation can transform your operations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link
                                href="/#contact"
                                className="px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                            >
                                Book Strategy Call
                            </Link>
                            <Link
                                href="/case-studies"
                                className="px-8 py-4 border border-swiss-gray/40 text-swiss-platinum font-medium tracking-widest uppercase rounded-full hover:border-swiss-platinum transition-colors"
                            >
                                More Case Studies
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
