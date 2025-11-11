"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { GlowingEffect } from "@/components/ui/glowing-effect";

interface TimelineStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

interface TimelineProps {
  steps: TimelineStep[];
}

export function Timeline({ steps }: TimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !lineRef.current || !glowRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards
      const cards = timelineRef.current?.querySelectorAll(".timeline-card");
      cards?.forEach((card) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Animate nodes
      const nodes = timelineRef.current?.querySelectorAll(".timeline-node");
      nodes?.forEach((node) => {
        gsap.fromTo(
          node,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: node,
              start: "top 85%",
              once: true,
            },
          }
        );
      });

      // Scroll-following glow on center line with null safety
      if (glowRef.current && timelineRef.current) {
        gsap.to(glowRef.current, {
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
            invalidateOnRefresh: false,
            onUpdate: (self) => {
              // Guard against stale refs when page regains focus
              if (!glowRef.current || !timelineRef.current) return;

              const progress = self.progress;
              const timelineHeight = timelineRef.current.offsetHeight || 0;
              const glowPosition = progress * timelineHeight;

              if (glowRef.current) {
                gsap.to(glowRef.current, {
                  top: glowPosition,
                  duration: 0.1,
                });
              }
            },
          },
        });
      }
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
      {/* Vertical Line */}
      <div
        ref={lineRef}
        className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 md:left-1/2 md:-translate-x-1/2"
      />

      {/* Scroll-following Glow */}
      <div
        ref={glowRef}
        className="absolute left-8 w-0.5 h-24 md:left-1/2 md:-translate-x-1/2 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(212, 165, 116, 0.8), transparent)",
          filter: "blur(2px)",
          top: 0,
        }}
      />

      {/* Timeline Items */}
      <div className="space-y-12">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`relative flex items-center ${
              index % 2 === 0 ? "md:flex-row md:gap-12" : "md:flex-row-reverse md:gap-12"
            } gap-8`}
          >
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
              <div
                className="timeline-card relative bg-secondary/50 backdrop-blur-sm border border-accent/20 rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 ml-16 md:ml-0 overflow-hidden"
                style={{ opacity: 0 }}
              >
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={80}
                  inactiveZone={0.1}
                  borderWidth={2}
                />
                <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <span className="text-3xl">{step.icon}</span>
                  <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                </div>
                <p className="text-foreground/70 leading-relaxed">{step.description}</p>
              </div>
            </div>

            {/* Center Node */}
            <div className="timeline-node absolute left-8 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center backdrop-blur-sm z-10 shadow-[0_0_15px_rgba(212,165,116,0.4)]">
                <span className="text-lg font-bold text-accent">{String(step.number).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Spacer for alternating layout */}
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
