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
        <section className="relative py-24 md:py-32 bg-swiss-charcoal" id="problems">
            <Container>
                <div className="mb-16 max-w-3xl">
                    <SectionTitle title="Sound Familiar?" className="text-left md:text-left" />
                    <p className="text-lg md:text-xl text-swiss-gray mt-6 leading-relaxed">
                        Most businesses we work with are dealing with the same set of
                        problems. They&apos;re not short on ambition — they&apos;re short on
                        systems.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
                >
                    {businessProblems.map((problem, index) => {
                        const Icon = problem.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="group relative p-8 md:p-10 rounded-2xl border border-swiss-border bg-swiss-black/40 hover:border-swiss-gray/40 transition-all duration-500"
                            >
                                {/* Number accent */}
                                <span className="absolute top-6 right-6 text-7xl font-bold text-white/[0.03] select-none">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-swiss-platinum mb-3 group-hover:text-white transition-colors">
                                            {problem.title}
                                        </h3>
                                        <p className="text-swiss-gray leading-relaxed">
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
                    <p className="text-2xl md:text-3xl font-semibold text-swiss-platinum max-w-3xl leading-snug">
                        We design AI automation systems that solve these problems —{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            permanently.
                        </span>
                    </p>
                </motion.div>
            </Container>
        </section>
    );
}
