"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group rounded-[20px] border border-foreground transition-all duration-300">
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 py-6 px-8">
        {/* Left side - Content */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl lg:text-3xl font-bold">{title}</h3>

            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <div key={tag} className="text-sm px-3 py-0.5 border">
                  <span>{tag}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base lg:text-lg leading-[1.8]">{description}</p>
            {link && (
              <Link
                href={link}
                className="inline-flex items-center gap-3 text-project-card-text border px-4 py-2.5 rounded-[50px]  transition-all font-medium text-base group/link w-fit"
              >
                <span>View Project</span>
                <div className="w-8 h-8 rounded-full bg-card-foreground flex items-center justify-center group-hover/link:translate-x-1 transition-transform">
                  <ArrowRight className="text-accent-foreground" />
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Right side - Mockup Preview */}
        <div className="flex items-center justify-center">
          <div className="w-full p-4 rounded-2xl bg-card-foreground/10">
            <div className="relative w-full h-[300px]">
              <Image src={image} alt={`${title} preview`} fill className="object-cover rounded-xl group-hover:scale-[1.02]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
