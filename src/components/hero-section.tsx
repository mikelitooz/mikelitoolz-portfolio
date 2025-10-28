"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface HeroSectionProps {
  title: string
  subtitle: string
  cta1?: { label: string; href: string }
  cta2?: { label: string; href: string }
}

export function HeroSection({ title, subtitle, cta1, cta2 }: HeroSectionProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

      // Animate title with split text effect
      tl.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
        }
      )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.5"
      )
      // Stagger CTA buttons
      .fromTo(
        ctaContainerRef.current?.children || [],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
        },
        "-=0.4"
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
        >
          {title}
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance"
        >
          {subtitle}
        </p>
        <div
          ref={ctaContainerRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {cta1 && (
            <Link
              href={cta1.href}
              className="px-8 py-3 text-lg sm:text-xl md:text-2xl bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              {cta1.label}
            </Link>
          )}
          {cta2 && (
            <Link
              href={cta2.href}
              className="px-8 py-3 text-lg sm:text-xl md:text-2xl border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-colors"
            >
              {cta2.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
