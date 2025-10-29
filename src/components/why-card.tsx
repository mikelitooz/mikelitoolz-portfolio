"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface WhyCardProps {
  icon: string;
  title: string;
  description: string;
}

export function WhyCard({ icon, title, description }: WhyCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!cardRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
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
            trigger: cardRef.current,
            start: "top 85%",
            once: true,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={cardRef}
      className="relative bg-card border border-border rounded-lg p-8 hover:border-accent/50 transition-colors"
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
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </div>
  );
}
