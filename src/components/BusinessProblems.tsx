"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { businessProblems } from "@/constants";

const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" as Easing },
    },
};

export default function BusinessProblems() {
    return (
        <section className="relative py-24 md:py-32 bg-swiss-charcoal border-b border-swiss-border font-mono" id="problems">
            <Container>
                <div className="mb-16 max-w-3xl">
                    <div className="text-xs text-accent tracking-[0.2em] uppercase mb-3 font-mono">[ 02 / The Friction ]</div>
                    <SectionTitle title="Operational Friction" className="text-left md:text-left text-transit-heading" />
                    <p className="text-sm md:text-base text-swiss-gray mt-6 leading-relaxed font-mono">
                        Most high-growth companies I embed in suffer from the same core failure modes. They are not short on ambition — they are short on robust, automated engineering systems.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    {businessProblems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative p-8 rounded-none border border-swiss-border bg-swiss-stone/50 hover:border-accent hover:bg-swiss-black transition-all duration-300"
                            >
                                {/* Number accent in bracket */}
                                <span className="absolute top-6 right-6 text-xs text-swiss-gray font-mono">
                                    [ {String(index + 1).padStart(2, "0")} ]
                                </span>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-none bg-swiss-border flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                                        <Icon className="w-5 h-5 text-swiss-gray group-hover:text-accent transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-swiss-platinum mb-3 uppercase tracking-wide group-hover:text-accent transition-colors font-sans">
                                            {problem.title}
                                        </h3>
                                        <p className="text-xs md:text-sm text-swiss-gray leading-relaxed font-mono">
                                            {problem.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Transition statement */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 md:mt-20 pt-12 border-t border-swiss-border"
                >
                    <p className="text-xl md:text-2xl font-bold text-swiss-platinum max-w-3xl leading-snug uppercase tracking-tight font-sans">
                        I engineer custom autonomous systems that eliminate these bottlenecks —{" "}
                        <span className="text-accent underline decoration-wavy decoration-1 underline-offset-4">
                            permanently.
                        </span>
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
