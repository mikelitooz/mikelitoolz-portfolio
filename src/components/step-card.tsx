"use client"

import { useEffect, useRef } from "react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: string
}

export function StepCard({ number, title, description, icon }: StepCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative opacity-0 text-center bg-card border border-border rounded-lg p-6">
      <GlowingEffect
        spread={40}
        glow={true}
        disabled={false}
        proximity={80}
        inactiveZone={0.1}
        borderWidth={2}
      />
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center text-3xl">{icon}</div>
      </div>
      <div className="text-5xl font-bold text-accent mb-3">{number}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  )
}
