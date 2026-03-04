"use client";

import React, { FC } from "react";
import { techStackCategories } from "@/constants";
import { motion } from "framer-motion";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface TechStackSectionProps {
  page: "automation" | "home";
}

const TechStackSection: FC<TechStackSectionProps> = ({ page }) => {
  // For automation page, show only AI + Automation categories; for home show all
  const categories =
    page === "automation"
      ? techStackCategories.filter((c) => c.category === "AI Models" || c.category === "Automation Platforms")
      : techStackCategories;

  // Flatten for the marquee
  const allTools = categories.flatMap((c) => c.tools);
  const tools = [...allTools, ...allTools, ...allTools, ...allTools];

  return (
    <section className="relative overflow-hidden py-24 bg-swiss-charcoal border-t border-swiss-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-stone/20 to-transparent pointer-events-none" />

      <Container className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-sm font-medium text-swiss-gray tracking-[0.2em] uppercase mb-4">Our Technology Stack</h2>

        {/* Category labels */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {categories.map((cat) => (
            <span
              key={cat.category}
              className="px-4 py-1.5 rounded-full border border-swiss-border text-xs text-swiss-gray tracking-widest uppercase"
            >
              {cat.category}
            </span>
          ))}
        </div>
      </Container>

      <div className="relative flex overflow-hidden select-none">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 120,
          }}
          className="flex whitespace-nowrap gap-16 md:gap-32 will-change-transform"
        >
          {tools.map((tool, i) => (
            <div key={`${tool.id}-${i}`} className="flex items-center gap-16 md:gap-32 group">
              <span
                className={cn(
                  "text-6xl md:text-9xl font-bold tracking-tighter uppercase transition-colors duration-500",
                  "text-transparent bg-clip-text bg-gradient-to-b from-swiss-platinum/10 to-swiss-platinum/5 stroke-text",
                  "group-hover:from-swiss-platinum group-hover:to-swiss-platinum/80"
                )}
                style={{
                  WebkitTextStroke: "1px rgba(237, 237, 237, 0.1)",
                }}
              >
                {tool.name}
              </span>
              <span className="w-4 h-4 rounded-full bg-accent/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
