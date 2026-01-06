"use client";

import React, { FC } from "react";
import { automationTools, fullStackTools } from "@/constants";
import { motion } from "framer-motion";
import Container from "./Container";
import { cn } from "@/lib/utils";

interface TechStackSectionProps {
  page: "automation" | "home";
}

const TechStackSection: FC<TechStackSectionProps> = ({ page }) => {
  const pageTechStack = page === "automation" ? automationTools : fullStackTools;
  // Duplicate list to ensure seamless loop
  const tools = [...pageTechStack, ...pageTechStack, ...pageTechStack, ...pageTechStack];

  return (
    <section className="relative overflow-hidden py-24 bg-swiss-charcoal border-t border-swiss-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-stone/20 to-transparent pointer-events-none" />

      <Container className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-sm font-medium text-swiss-gray tracking-[0.2em] uppercase mb-4">Powering The Next Generation</h2>
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
                  // Hover effect: light up the text
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

        {/* Second identical track for seamless loop is handled by the long duplicated list above 
            Actually, for a true seamless loop with x: -50%, we need enough content to cover 2x screen width. 
            Detailed Implementation: 
            The motion div moves from 0 to -50%. 
            The content inside must be [A, B] where A is the original list and B is the duplicate.
            If we use a very long list, we can just move it.
            Alternatively, standard marquee pattern:
        */}
      </div>

      {/* Reverse direction (Optional second row, maybe for 'home' page if list is long, 
          but for now let's stick to one massive impactful row as per 'Swiss Carbon') 
      */}
    </section>
  );
};

export default TechStackSection;
