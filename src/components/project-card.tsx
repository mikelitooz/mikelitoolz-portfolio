"use client"

import Link from "next/link"
import Image from "next/image"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import { useEffect, useRef } from "react"
import { gsap } from "@/lib/gsap"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
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
      className="group relative bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
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
      <div className="relative h-48 overflow-hidden bg-secondary">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 bg-secondary text-accent rounded-full">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <Link
            href={link}
            className="inline-block text-accent hover:text-primary transition-colors font-medium text-sm"
          >
            View Project →
          </Link>
        )}
      </div>
    </div>
  )
}
