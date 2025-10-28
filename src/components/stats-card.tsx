"use client"

import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useEffect, useRef } from "react"
import { gsap, ScrollTrigger } from "@/lib/gsap"

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  subtitle: string;
  bgColor: string;
}

export function StatsCard({ icon, value, label, subtitle, bgColor }: StatsCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const valueRef = useRef<HTMLDivElement>(null)
  const scrollTriggersRef = useRef<ScrollTrigger[]>([])

  useEffect(() => {
    if (!valueRef.current || !cardRef.current) return

    // Extract number from value (e.g., "15+" -> 15, "20K+" -> 20)
    const numMatch = value.match(/(\d+)/)
    const targetNumber = numMatch ? parseInt(numMatch[1]) : 0
    const suffix = value.replace(/\d+/, "")

    // Counter animation
    const counter = { value: 0 }

    const counterTween = gsap.to(counter, {
      value: targetNumber,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        once: true,
      },
      onUpdate: () => {
        if (valueRef.current) {
          valueRef.current.textContent = Math.floor(counter.value) + suffix
        }
      },
    })

    // Card entrance animation
    const entranceTween = gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          once: true,
        }
      }
    )

    // Store ScrollTrigger instances after creation
    if (counterTween.scrollTrigger) {
      scrollTriggersRef.current.push(counterTween.scrollTrigger)
    }
    if (entranceTween.scrollTrigger) {
      scrollTriggersRef.current.push(entranceTween.scrollTrigger)
    }

    return () => {
      // Kill ScrollTrigger instances first
      scrollTriggersRef.current.forEach(trigger => {
        try {
          if (trigger) {
            trigger.kill()
          }
        } catch (e) {
          // Silently ignore errors during cleanup
        }
      })
      scrollTriggersRef.current = []

      // Kill the tweens
      try {
        counterTween.kill()
        entranceTween.kill()
      } catch (e) {
        // Silently ignore errors during cleanup
      }
    }
  }, [value])

  return (
    <div
      ref={cardRef}
      className="relative bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-all hover:transform hover:scale-105"
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
      <div className={`${bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <div ref={valueRef} className="text-4xl font-bold mb-2">
        0{value.replace(/\d+/, "")}
      </div>
      <h3 className="text-lg font-semibold mb-2">{label}</h3>
      <p className="text-foreground/60 text-sm">{subtitle}</p>
    </div>
  );
}
