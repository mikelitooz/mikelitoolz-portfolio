"use client"

import Link from "next/link"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
}

export function ProjectCard({ title, description, image, tags, link }: ProjectCardProps) {
  return (
    <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 animate-fade-in-up">
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
