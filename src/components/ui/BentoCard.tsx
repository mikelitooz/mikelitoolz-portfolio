"use client";

import { useRef, FC } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/gsap";

interface BentoCardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  tags: string[];
  link?: string;
  className?: string; // For grid spans
}

export const BentoCard: FC<BentoCardProps> = ({ title, description, image, tags, link, className = "" }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // Magnetic Cursor Effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !cursorRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(cursorRef.current, {
      x: x,
      y: y,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = () => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      scale: 1,
      opacity: 1,
      duration: 0.3,
    });
  };

  const handleMouseLeave = () => {
    if (!cursorRef.current) return;
    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
    });
  };

  const ContentWrapper = (link ? Link : "div") as any;
  const wrapperProps = link ? { href: link, target: "_blank" } : {};

  return (
    <ContentWrapper
      {...wrapperProps}
      // @ts-ignore
      className={`group relative overflow-hidden rounded-3xl bg-secondary/10 border border-white/5 hover:border-luxury-gold/30 transition-colors duration-500 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      {/* Background Image with Reveal */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-linear-to-t from-luxury-black via-luxury-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-8">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className="flex justify-between items-start mb-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium border border-white/20 rounded-full text-white/70 backdrop-blur-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            {link && (
              <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-luxury-gold group-hover:text-black transition-colors duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            )}
          </div>

          <h3 className="text-3xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/70 line-clamp-2 text-lg max-w-xl">{description}</p>
        </div>
      </div>

      {/* Magnetic Cursor Follower */}
      <div
        ref={cursorRef}
        className="absolute top-0 left-0 w-32 h-32 bg-luxury-gold/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-0"
      />
    </ContentWrapper>
  );
};
