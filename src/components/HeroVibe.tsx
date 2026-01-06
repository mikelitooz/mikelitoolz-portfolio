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
  ctaText?: string;
  ctaLink?: string;
}

export default function HeroVibe({
  title = ["ISRAEL", "CHUKWUDI"],
  subtitle = "I am a full-stack developer interested in creating websites and other random tools on the internet.",
  ctaText = "START PROJECT",
  ctaLink = "#contact",
}: HeroVibeProps) {
  const container = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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
    }, container);

    return () => ctx.revert();
  }, [title]);

  return (
    <section ref={container} className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-[90vw]">
        <h1
          ref={titleRef}
          className="text-transit-heading leading-[0.8] tracking-tighter text-foreground text-left flex flex-col items-start gap-0"
        >
          {title.map((line, i) => (
            <SplitTitle key={i} text={line} />
          ))}
        </h1>

        <div className="mt-12 md:mt-24 max-w-2xl">
          <p ref={subtitleRef} className="text-xl md:text-3xl font-normal leading-tight text-foreground/80">
            {subtitle}
          </p>
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
