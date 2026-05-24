import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { caseStudies } from "@/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
    title: "Systems Archive | Micheal Ifeanyi — Independent AI Engineer",
    description:
        "Clinical audit trail of custom-engineered billing engines, logistics bots, and enrichment pipelines deployed into production by Micheal Ifeanyi.",
    keywords: ["case studies", "AI engineering examples", "workflow automation results", "FinTech SaaS billing"],
    canonical: "https://www.michealifeanyi.com/case-studies",
});

export default function CaseStudiesPage() {
    return (
        <main className="pt-32 pb-24 grid-bg font-mono">
            <Container>
                <div className="mb-20">
                    <p className="text-xs text-accent tracking-[0.3em] uppercase mb-4">
                        [ Systems Archive ]
                    </p>
                    <h1 className="text-transit-heading text-swiss-platinum">
                        Case Studies
                    </h1>
                    <p className="mt-6 text-xs md:text-sm text-swiss-gray max-w-2xl leading-relaxed">
                        Clinical audit trail of custom-engineered billing engines, WhatsApp ODR dispatch bots, and self-healing enrichment pipelines deployed into active enterprise environments.
                    </p>
                </div>

                <div className="flex flex-col gap-20">
                    {caseStudies.map((cs, index) => (
                        <Link
                            key={cs.slug}
                            href={`/case-studies/${cs.slug}`}
                            className="group flex flex-col gap-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-swiss-border pb-6">
                                <h2 className="text-2xl md:text-4xl font-bold text-swiss-platinum uppercase tracking-tighter group-hover:text-accent transition-colors font-sans">
                                    {cs.title}
                                </h2>
                                <div className="flex items-center gap-4 text-swiss-gray font-mono text-xs tracking-widest uppercase">
                                    <span>[ {String(index + 1).padStart(2, "0")} ]</span>
                                    <span className="w-8 h-px bg-swiss-gray/30" />
                                    <span>{cs.industry}</span>
                                </div>
                            </div>

                            <div className="relative w-full aspect-video md:aspect-[21/9] bg-swiss-stone overflow-hidden rounded-none border border-swiss-border">
                                {cs.video ? (
                                    <video
                                        src={cs.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                                    />
                                ) : (
                                    <Image
                                        src={cs.image}
                                        alt={cs.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                                    />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                                    <span className="px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-none hover:bg-accent transition-colors">
                                        Read Case Study
                                    </span>
                                </div>
                            </div>

                            <p className="text-xs md:text-sm text-swiss-gray max-w-3xl leading-relaxed">
                                {cs.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {cs.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray bg-swiss-stone/20 rounded-none group-hover:border-accent/40 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
							</div>
                        </Link>
                    ))}
                </div>
            </Container>
        </main>
    );
}
