"use client"

import Link from "next/link"

interface HeroSectionProps {
  title: string
  subtitle: string
  cta1?: { label: string; href: string }
  cta2?: { label: string; href: string }
}

export function HeroSection({ title, subtitle, cta1, cta2 }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">{title}</h1>
        <p className="text-lg sm:text-xl text-foreground/70 mb-8 text-balance">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {cta1 && (
            <Link
              href={cta1.href}
              className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              {cta1.label}
            </Link>
          )}
          {cta2 && (
            <Link
              href={cta2.href}
              className="px-8 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent/10 transition-colors"
            >
              {cta2.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
