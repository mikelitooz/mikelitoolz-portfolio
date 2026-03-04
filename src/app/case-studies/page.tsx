import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import { caseStudies } from "@/constants";
import { generatePageMetadata } from "@/lib/metadata";

export const metadata: Metadata = generatePageMetadata({
    title: "Case Studies | Micheal Ifeanyi — AI Automation Agency",
    description:
        "Real automation projects we've built for healthcare clinics, real estate agencies, and B2B companies. See how AI agents and workflow automation save businesses 10+ hours per week.",
    keywords: ["case studies", "AI automation examples", "workflow automation results"],
    canonical: "https://www.michealifeanyi.com/case-studies",
});

export default function CaseStudiesPage() {
    return (
        <main className="pt-32 pb-24">
            <Container>
                <div className="mb-16">
                    <p className="text-sm text-swiss-gray tracking-[0.3em] uppercase mb-4">
                        Our Work
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-swiss-platinum tracking-tight">
                        Case Studies
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-swiss-gray max-w-2xl leading-relaxed">
                        Real automation systems we&apos;ve built for real businesses.
                        Every project below solved a measurable problem with AI.
                    </p>
                </div>

                <div className="flex flex-col gap-16 md:gap-24">
                    {caseStudies.map((cs, index) => (
                        <Link
                            key={cs.slug}
                            href={`/case-studies/${cs.slug}`}
                            className="group flex flex-col gap-6"
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-swiss-border pb-6">
                                <h2 className="text-3xl md:text-5xl font-bold text-swiss-platinum uppercase tracking-tighter group-hover:text-white transition-colors">
                                    {cs.title}
                                </h2>
                                <div className="flex items-center gap-4 text-swiss-gray font-mono text-sm tracking-widest uppercase">
                                    <span>{String(index + 1).padStart(2, "0")}</span>
                                    <span className="w-8 h-px bg-swiss-gray/50" />
                                    <span>{cs.industry}</span>
                                </div>
                            </div>

                            <div className="relative w-full aspect-video md:aspect-[21/9] bg-swiss-stone overflow-hidden rounded-sm">
                                {cs.video ? (
                                    <video
                                        src={cs.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                ) : (
                                    <Image
                                        src={cs.image}
                                        alt={cs.title}
                                        fill
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                                    />
                                )}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                                    <span className="px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-full">
                                        Read Case Study
                                    </span>
                                </div>
                            </div>

                            <p className="text-lg text-swiss-gray max-w-3xl leading-relaxed">
                                {cs.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {cs.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray rounded-full"
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
