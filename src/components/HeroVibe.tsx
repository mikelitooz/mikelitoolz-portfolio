"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface HeroVibeProps {
  title?: string[];
  subtitle?: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  layout?: "default" | "split";
}

export default function HeroVibe({
  title = ["ISRAEL", "CHUKWUDI"],
  subtitle = "I am a full-stack developer interested in creating websites and other random tools on the internet.",
  description,
  ctaText = "START PROJECT",
  ctaLink = "#contact",
  layout = "default",
}: HeroVibeProps) {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Title Animation
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        if (chars.length) {
          tl.from(chars, {
            y: 200,
            opacity: 0,
            rotate: 5,
            duration: 1.2,
            stagger: 0.05,
            ease: "power3.out",
          });
        }
      }

      // Subtitle Animation
      if (subtitleRef.current) {
        tl.from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
          },
          "-=0.5"
        );
      }

      // Description Animation
      if (descriptionRef.current) {
        tl.from(
          descriptionRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 1,
          },
          "-=0.8"
        );
      }
    }, container);

    return () => ctx.revert();
  }, [title]);

  const isSplit = layout === "split";

  return (
    <section ref={container} className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className={`w-full max-w-[95vw] ${isSplit ? "lg:flex lg:justify-between lg:items-start" : ""}`}>
        {/* Title Section */}
        <h1
          ref={titleRef}
          className={`text-transit-heading leading-[0.8] tracking-tighter text-foreground text-left flex flex-col items-start gap-0 ${
            isSplit ? "lg:w-1/2" : ""
          }`}
        >
          {title.map((line, i) => (
            <SplitTitle key={i} text={line} />
          ))}
        </h1>

        {/* Content Section */}
        <div
          className={`${isSplit ? "mt-12 lg:mt-0 lg:w-[45%] lg:pb-4 flex flex-col gap-8" : "mt-12 md:mt-16 max-w-3xl space-y-8"}`}
        >
          {subtitle && (
            <p
              ref={subtitleRef}
              className={`font-medium leading-tight text-white ${
                isSplit ? "text-3xl md:text-5xl tracking-tight" : "text-2xl md:text-4xl"
              }`}
            >
              {subtitle}
            </p>
          )}
          {description && (
            <p
              ref={descriptionRef}
              className={`text-swiss-gray leading-relaxed ${
                isSplit ? "text-xl md:text-2xl max-w-xl" : "text-lg md:text-xl max-w-2xl"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const SplitTitle = ({ text }: { text: string }) => {
  return (
    <div className="inline-block overflow-hidden pb-2 pr-[0.2em]">
      {text.split("").map((char, i) => (
        <span key={i} className="char inline-block origin-bottom-left will-change-transform">
          {char}
        </span>
      ))}
    </div>
  );
};
