"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { automationCaseStudies, projects } from "@/constants";
import { BentoCard } from "./ui/BentoCard";

interface ProjectBentoProps {
  page: "automation" | "home";
}

const ProjectBento: FC<ProjectBentoProps> = ({ page }) => {
  const pageProjects = page === "automation" ? automationCaseStudies : projects;

  return (
    <section className="relative py-24 md:py-32 bg-swiss-charcoal" id="projects">
      <Container>
        <div className="mb-24">
          <SectionTitle title="Selected Works" className="text-left md:text-left" />
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {pageProjects.map((project, index) => (
            <div key={index} className="group flex flex-col gap-8 md:gap-12">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-swiss-border pb-6">
                <h3 className="text-5xl md:text-7xl lg:text-8xl font-bold text-swiss-platinum uppercase tracking-tighter group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-swiss-gray font-mono text-sm md:text-base tracking-widest uppercase">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="w-12 h-px bg-swiss-gray/50" />
                  <span>{project.tags?.[0] || "Development"}</span>
                </div>
              </div>

              <div className="relative w-full aspect-video md:aspect-[21/9] bg-swiss-stone overflow-hidden rounded-sm cursor-pointer">
                {/* Image Reveal/Zoom */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Hover Details Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                  <Link
                    href={project.link || "#"}
                    target="_blank"
                    className="px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              <p className="text-xl text-swiss-gray max-w-3xl leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ProjectBento;
