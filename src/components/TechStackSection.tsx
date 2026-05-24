"use client";

import React, { FC } from "react";
import Image from "next/image";
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

  return (
    <section className="relative overflow-hidden py-24 bg-swiss-charcoal border-t border-swiss-border">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-swiss-stone/20 to-transparent pointer-events-none" />

      <Container className="flex flex-col mb-12">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-swiss-platinum uppercase mb-16">
          Our Technology Stack
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {categories.map((cat, catIndex) => (
            <div key={cat.category} className="flex flex-col gap-6">
              <h3 className="text-lg font-medium text-swiss-gray tracking-[0.2em] border-b border-swiss-border/50 pb-4 uppercase">
                {cat.category}
              </h3>
              <div className="flex flex-col gap-4">
                {cat.tools.map((tool, i) => {
                  const Icon = tool.icon as any;
                  // Handle both valid React components (from lucide-react) and imported image objects (png/svg from next)
                  const isImageObject = Icon && typeof Icon === "object" && "src" in Icon;

                  return (
                    <motion.div
                      key={tool.id}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                      className="flex items-center gap-4 group"
                    >
                      <div className="w-10 h-10 rounded bg-swiss-stone/50 border border-swiss-border/50 flex items-center justify-center p-2 group-hover:bg-swiss-stone transition-colors text-swiss-gray group-hover:text-swiss-platinum">
                        {isImageObject ? (
                          <Image src={Icon} alt={tool.name} className="w-full h-full object-contain" />
                        ) : (
                          <Icon className="w-full h-full" />
                        )}
                      </div>
                      <span className="text-lg font-medium text-swiss-gray group-hover:text-swiss-platinum transition-colors">
                        {tool.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TechStackSection;
