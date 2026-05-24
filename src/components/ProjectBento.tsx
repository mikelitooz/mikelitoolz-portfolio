"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { caseStudies } from "@/constants";

interface ProjectBentoProps {
  page: "automation" | "home";
}

const ProjectBento: FC<ProjectBentoProps> = ({ page }) => {
  // Show first 3 for home, all for automation
  const pageProjects = page === "home" ? caseStudies.slice(0, 4) : caseStudies;

  return (
    <section className="relative py-24 md:py-32 bg-swiss-charcoal border-b border-swiss-border" id="projects">
      <Container>
        <div className="mb-24 font-mono">
          <div className="text-xs text-accent tracking-[0.2em] uppercase mb-3">[ 03 / Engineering Systems ]</div>
          <SectionTitle title="Case Studies" className="text-left md:text-left text-transit-heading" />
        </div>

        <div className="flex flex-col gap-24 md:gap-32 font-mono">
          {pageProjects.map((project, index) => (
            <div key={index} className="group flex flex-col gap-8">
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-4 border-b border-swiss-border pb-6">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-swiss-platinum uppercase tracking-tighter group-hover:text-accent transition-colors font-sans">
                  {project.title}
                </h3>
                <div className="flex items-center gap-4 text-swiss-gray font-mono text-xs md:text-sm tracking-widest uppercase">
                  <span>[ {String(index + 1).padStart(2, "0")} ]</span>
                  <span className="w-12 h-px bg-swiss-gray/30" />
                  <span>{project.industry || project.tags?.[0] || "Development"}</span>
                </div>
              </div>

              <div className="relative w-full aspect-video md:aspect-[21/9] bg-swiss-stone overflow-hidden rounded-none border border-swiss-border cursor-pointer">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-out"
                  />
                )}

                <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px]">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="px-8 py-4 bg-swiss-platinum text-swiss-black font-bold uppercase tracking-widest rounded-none hover:bg-accent transition-colors duration-300"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>

              <p className="text-sm md:text-base text-swiss-gray max-w-3xl leading-relaxed font-mono">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-mono tracking-wider uppercase border border-swiss-border text-swiss-gray bg-swiss-stone/30 rounded-none group-hover:border-accent/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA for home page */}
        {page === "home" && caseStudies.length > 4 && (
          <div className="mt-20 text-center font-mono">
            <Link
              href="/case-studies"
              className="inline-block px-8 py-4 border border-swiss-gray/40 text-swiss-platinum font-bold tracking-widest uppercase rounded-none hover:border-accent hover:text-accent transition-colors duration-300"
            >
              View All Case Studies
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
};

export default ProjectBento;
