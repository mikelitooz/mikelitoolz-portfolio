"use client";

import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  progress: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      const stepElements = timelineRef.current?.querySelectorAll(".timeline-step");
      const iconElements = timelineRef.current?.querySelectorAll(".timeline-icon");
      const contentElements = timelineRef.current?.querySelectorAll(".timeline-content");
      const progressBars = timelineRef.current?.querySelectorAll(".progress-bar");
      const badges = timelineRef.current?.querySelectorAll(".timeline-badge");

      stepElements?.forEach((step, index) => {
        const icon = iconElements?.[index];
        const content = contentElements?.[index];
        const progressBar = progressBars?.[index];
        const badge = badges?.[index];

        if (!icon || !content || !progressBar || !badge) return;

        // Timeline for each step
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            once: true,
          },
        });

        // Animate icon circle
        tl.fromTo(
          icon,
          { opacity: 0, scale: 0.5, rotate: -180 },
          { opacity: 1, scale: 1, rotate: 0, duration: 0.6, ease: "back.out(1.7)" }
        )
        // Animate badge with pulse
        .fromTo(
          badge,
          { scale: 0, rotate: -90 },
          { scale: 1, rotate: 0, duration: 0.4, ease: "back.out(2)" },
          "-=0.3"
        )
        // Animate content card
        .fromTo(
          content,
          { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
          { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        // Animate progress bar
        .fromTo(
          progressBar,
          { width: "0%" },
          { width: steps[index].progress, duration: 1.5, ease: "power2.out" },
          "-=0.5"
        );
      });
    });

    return () => ctx.revert();
  }, [steps]);

  return (
    <div ref={timelineRef} className="relative max-w-5xl mx-auto">
      {/* Vertical connecting line - hidden on mobile */}
      <div className="hidden md:block absolute left-[50px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent/20 via-accent/50 to-accent/20" />

      <div className="space-y-8 md:space-y-16">
        {steps.map((step, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`timeline-step relative flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-start md:items-center gap-6 md:gap-12`}
            >
              {/* Icon Circle */}
              <div className="relative z-10 flex-shrink-0">
                <div className="timeline-icon w-[100px] h-[100px] rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/30 flex items-center justify-center relative group hover:scale-105 transition-transform" style={{ opacity: 0 }}>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.1}
                    borderWidth={2}
                  />
                  <div className="text-4xl">{step.icon}</div>
                  <div className="timeline-badge absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-xs font-bold flex items-center justify-center border-2 border-background" style={{ opacity: 0 }}>
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${isEven ? "md:text-left" : "md:text-right"}`}>
                <div className="timeline-content relative bg-card border border-border rounded-xl p-6 md:p-8 hover:border-accent/50 transition-all" style={{ opacity: 0 }}>
                  <GlowingEffect
                    spread={40}
                    glow={true}
                    disabled={false}
                    proximity={80}
                    inactiveZone={0.1}
                    borderWidth={2}
                  />
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold">
                      Step {step.number}
                    </div>
                    <span className="text-sm text-foreground/60 font-medium">{step.progress}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>

                  {/* Progress Bar */}
                  <div className="mt-6 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="progress-bar h-full bg-gradient-to-r from-accent to-accent/60 rounded-full"
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
