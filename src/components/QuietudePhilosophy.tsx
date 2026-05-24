"use client";

import { useRef, useEffect } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import Container from "./Container";

export default function QuietudePhilosophy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = textRef.current?.querySelectorAll(".quiet-line");

      if (lines) {
        lines.forEach((line) => {
          gsap.fromTo(
            line,
            { opacity: 0.1, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 1.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: line,
                start: "top 80%",
                end: "top 40%",
                scrub: 1,
              },
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const philosophy = [
    "Most web apps are noisy.",
    "They scream for attention.",
    "I build for clarity.",
    "Silence is the ultimate luxury.",
    "Function is the ultimate aesthetic.",
  ];

  return (
    <section
      ref={containerRef}
      className="py-32 md:py-48 relative bg-swiss-charcoal text-swiss-platinum border-t border-swiss-border/50"
    >
      <Container>
        <div
          ref={textRef}
          className="flex flex-col gap-8 md:gap-12 pl-4 md:pl-0 border-l-0 md:border-l border-swiss-border/30 md:ml-12 md:py-12"
        >
          {philosophy.map((line, index) => (
            <h2
              key={index}
              className="quiet-line text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-swiss-platinum leading-[1.1] max-w-5xl opacity-0 translate-y-8"
            >
              {index === philosophy.length - 1 ? <span className="text-accent">{line}</span> : line}
            </h2>
          ))}
        </div>
      </Container>
    </section>
  );
}
