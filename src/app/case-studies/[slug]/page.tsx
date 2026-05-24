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
        title: `${cs.title} | Micheal Ifeanyi — Independent AI Engineer`,
        description: cs.description,
        keywords: [...cs.tags, cs.industry, "case study", "AI automation", "embedded engineering"],
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
        <main className="pt-32 pb-24 grid-bg font-mono">
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
                            name: "Micheal Ifeanyi — Independent AI Engineer",
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
                        className="inline-flex items-center gap-2 text-swiss-gray text-xs tracking-widest uppercase mb-8 hover:text-accent transition-colors font-mono"
                    >
                        ← Back to Systems Archive
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {cs.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray rounded-none bg-swiss-stone"
                            >
                                {tag}
                            </span>
                        ))}
                        <span className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-accent/30 text-accent rounded-none bg-swiss-stone">
                            {cs.industry}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-swiss-platinum tracking-tight leading-[1.1] uppercase font-sans">
                        {cs.title}
                    </h1>

                    <p className="mt-6 text-xs md:text-sm text-swiss-gray max-w-3xl leading-relaxed font-mono">
                        {cs.description}
                    </p>
                </Container>
            </section>

            {/* Hero Image or Video */}
            <section className="pb-16">
                <Container>
                    <div className="relative w-full aspect-video md:aspect-[21/9] bg-swiss-stone overflow-hidden rounded-none border border-swiss-border">
                        {cs.video ? (
                            <video
                                src={cs.video}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full opacity-90"
                            />
                        ) : (
                            <Image
                                src={cs.image}
                                alt={cs.title}
                                fill
                                className="object-cover opacity-90"
                                priority
                            />
                        )}
                    </div>
                </Container>
            </section>

            {/* Problem */}
            <section className="py-16 md:py-24 border-t border-swiss-border font-mono">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-xs text-accent tracking-[0.2em] uppercase">
                                [ 01 / Operational Bottleneck ]
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-swiss-platinum mt-2 uppercase font-sans">
                                The Friction
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xs md:text-sm text-swiss-gray leading-relaxed whitespace-pre-line font-mono">
                                {cs.problem}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Solution */}
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border font-mono">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-xs text-accent tracking-[0.2em] uppercase">
                                [ 02 / Solution Design ]
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-swiss-platinum mt-2 uppercase font-sans">
                                System Architecture
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-xs md:text-sm text-swiss-gray leading-relaxed whitespace-pre-line font-mono">
                                {cs.solution}
                            </p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Architecture Visualizer */}
            <section className="py-16 md:py-24 border-t border-swiss-border font-mono">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-xs text-accent tracking-[0.2em] uppercase">
                                [ 03 / Data Pipeline Flow ]
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-swiss-platinum mt-2 uppercase font-sans">
                                System Topology
                            </h2>
                        </div>
                        <div className="lg:col-span-8 flex flex-col gap-8">
                            {cs.architectureImage && (
                                <div className="w-full rounded-none overflow-hidden border border-swiss-border bg-swiss-stone relative">
                                    <Image
                                        src={cs.architectureImage}
                                        alt={`${cs.title} System Architecture`}
                                        width={1200}
                                        height={800}
                                        className="w-full object-cover opacity-80"
                                    />
                                </div>
                            )}
                            <div className="p-8 bg-swiss-stone border border-swiss-border rounded-none font-mono text-xs text-accent leading-relaxed whitespace-pre-line tracking-wide">
                                <div className="text-[10px] text-swiss-gray mb-4 uppercase tracking-[0.2em]">[ Telemetry Pipeline Map ]</div>
                                {cs.architecture}
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Technologies */}
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border font-mono">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-xs text-accent tracking-[0.2em] uppercase">
                                [ 04 / Engineering Stack ]
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-swiss-platinum mt-2 uppercase font-sans">
                                Tech Integration
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="flex flex-wrap gap-3">
                                {cs.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="flex flex-col items-start gap-1 px-6 py-4 bg-swiss-stone border border-swiss-border rounded-none hover:border-accent hover:bg-swiss-black transition-all duration-300 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-12px)]"
                                    >
                                        <span className="text-swiss-platinum font-bold text-sm tracking-tight font-sans uppercase">
                                            {tech.name}
                                        </span>
                                        <span className="text-[10px] text-swiss-gray tracking-widest uppercase">
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
            <section className="py-16 md:py-24 border-t border-swiss-border font-mono">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <span className="text-xs text-accent tracking-[0.2em] uppercase">
                                [ 05 / Production Telemetry ]
                            </span>
                            <h2 className="text-2xl md:text-3xl font-bold text-swiss-platinum mt-2 uppercase font-sans">
                                System Outcome
                            </h2>
                        </div>
                        <div className="lg:col-span-8">
                            <ul className="space-y-6">
                                {cs.results.map((result, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-none bg-accent/10 border border-accent/20 flex items-center justify-center mt-1">
                                            <span className="w-1.5 h-1.5 rounded-none bg-accent animate-pulse" />
                                        </span>
                                        <span className="text-xs md:text-sm text-swiss-gray leading-relaxed">
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
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border font-mono">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <div className="text-xs text-accent tracking-[0.2em] uppercase mb-4">[ Engagement Endpoint ]</div>
                        <h2 className="text-2xl md:text-4xl font-bold text-swiss-platinum mb-4 uppercase font-sans">
                            Need Systems Like These?
                        </h2>
                        <p className="text-xs md:text-sm text-swiss-gray mb-8 leading-relaxed max-w-md mx-auto">
                            Connect with me to schedule a technical audit and discuss how my custom embedded engineering cycles can scale your operations.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider">
                            <Link
                                href="/#contact"
                                className="px-8 py-4 bg-swiss-platinum text-swiss-black rounded-none hover:bg-accent transition-colors duration-300 w-full sm:w-auto"
                            >
                                Book Strategy Call
                            </Link>
                            <Link
                                href="/case-studies"
                                className="px-8 py-4 border border-swiss-gray/40 text-swiss-platinum rounded-none hover:border-accent hover:text-accent transition-colors duration-300 w-full sm:w-auto"
                            >
                                Systems Archive
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>
        </main>
    );
}
