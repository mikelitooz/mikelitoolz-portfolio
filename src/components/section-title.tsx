"use client"

import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true,
        },
      })

      // Animate title
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        }
      )

      // Animate subtitle if it exists
      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.4"
        )
      }
    })

    return () => ctx.revert()
  }, [subtitle])

  return (
    <div ref={containerRef} className="text-center mb-12">
      <h2
        ref={titleRef}
        className="text-4xl sm:text-5xl font-bold mb-4"
        style={{ opacity: 0 }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          ref={subtitleRef}
          className="text-lg text-foreground/70"
          style={{ opacity: 0 }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
