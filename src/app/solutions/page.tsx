"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import Container from "@/components/Container";
import { SectionTitle } from "@/components/section-title";
import { solutions, caseStudies, CALENDLY_URL } from "@/constants";

const CalendlyModal = dynamic(() => import("@/components/CalendlyModal"), { ssr: false });

export default function SolutionsPage() {
    const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

    return (
        <main className="pt-32 pb-24">
            {/* Hero */}
            <section className="pb-16 md:pb-24">
                <Container>
                    <p className="text-sm text-swiss-gray tracking-[0.3em] uppercase mb-4">
                        What We Build
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-swiss-platinum tracking-tight">
                        Our Solutions
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-swiss-gray max-w-3xl leading-relaxed">
                        We design, build, and deploy AI automation systems that solve
                        specific business problems. Every solution is tailored to your
                        workflows and integrated with your existing tools.
                    </p>
                </Container>
            </section>

            {/* Solutions */}
            {solutions.map((solution, index) => {
                const Icon = solution.icon;
                // Find related case studies
                const relatedCases = caseStudies.filter((cs) =>
                    cs.tags.some((tag) =>
                        solution.title.toLowerCase().includes(tag.toLowerCase())
                    ) || cs.description.toLowerCase().includes(solution.slug.split("-")[0])
                ).slice(0, 2);

                return (
                    <section
                        key={solution.slug}
                        className={`py-16 md:py-24 border-t border-swiss-border ${index % 2 === 0 ? "" : "bg-swiss-charcoal"
                            }`}
                        id={solution.slug}
                    >
                        <Container>
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="grid grid-cols-1 lg:grid-cols-12 gap-12"
                            >
                                {/* Left column */}
                                <div className="lg:col-span-5">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                                            <Icon className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <span className="text-sm text-swiss-gray tracking-[0.2em] uppercase font-mono">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>

                                    <h2 className="text-3xl md:text-5xl font-bold text-swiss-platinum tracking-tight mb-6">
                                        {solution.title}
                                    </h2>

                                    <p className="text-lg text-swiss-gray leading-relaxed mb-8">
                                        {solution.description}
                                    </p>

                                    <button
                                        onClick={() => setIsCalendlyOpen(true)}
                                        className="px-8 py-4 bg-foreground text-background font-medium tracking-wide rounded-full hover:bg-accent transition-colors duration-300"
                                    >
                                        Discuss This Solution
                                    </button>
                                </div>

                                {/* Right column */}
                                <div className="lg:col-span-7 space-y-8">
                                    {/* Use Case */}
                                    <div className="p-8 bg-swiss-black/40 border border-swiss-border rounded-xl">
                                        <span className="text-xs text-swiss-gray tracking-[0.2em] uppercase mb-3 block">
                                            Example Use Case
                                        </span>
                                        <p className="text-swiss-gray leading-relaxed">
                                            {solution.useCase}
                                        </p>
                                    </div>

                                    {/* Related Case Studies */}
                                    {relatedCases.length > 0 && (
                                        <div>
                                            <span className="text-xs text-swiss-gray tracking-[0.2em] uppercase mb-4 block">
                                                Related Case Studies
                                            </span>
                                            <div className="space-y-3">
                                                {relatedCases.map((rc) => (
                                                    <Link
                                                        key={rc.slug}
                                                        href={`/case-studies/${rc.slug}`}
                                                        className="group flex items-center justify-between p-4 border border-swiss-border rounded-lg hover:border-swiss-gray/40 transition-colors"
                                                    >
                                                        <span className="text-swiss-platinum group-hover:text-white transition-colors">
                                                            {rc.title}
                                                        </span>
                                                        <span className="text-swiss-gray text-sm">→</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </Container>
                    </section>
                );
            })}

            {/* Bottom CTA */}
            <section className="py-16 md:py-24 bg-swiss-charcoal border-t border-swiss-border">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-swiss-platinum mb-6 tracking-tight">
                            Not Sure Which Solution Fits?
                        </h2>
                        <p className="text-lg text-swiss-gray mb-8 leading-relaxed">
                            Book a free strategy session. We&apos;ll audit your workflows
                            and recommend the right automation approach for your business.
                        </p>
                        <button
                            onClick={() => setIsCalendlyOpen(true)}
                            className="px-10 py-5 bg-foreground text-background font-semibold text-lg tracking-wide rounded-full hover:scale-105 transition-transform duration-300"
                        >
                            Book Strategy Call
                        </button>
                    </div>
                </Container>
            </section>

            <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
        </main>
    );
}
