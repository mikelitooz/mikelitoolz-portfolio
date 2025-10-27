"use client"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-12 animate-fade-in-up">
      <h2 className="text-4xl sm:text-5xl font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-foreground/70">{subtitle}</p>}
    </div>
  )
}
