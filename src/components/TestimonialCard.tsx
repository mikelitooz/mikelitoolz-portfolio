"use client";

import { Star, BadgeCheck } from "lucide-react";
import type { Testimonial } from "@/constants/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-[0_2px_20px_rgba(45,51,64,0.08)] hover:shadow-[0_4px_30px_rgba(45,51,64,0.12)] transition-all duration-300 ease-in-out h-full flex flex-col">
      <div className="flex items-center gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
        ))}
      </div>

      <p className="text-base text-muted-foreground leading-relaxed mb-6 flex-grow">
        &ldquo;{testimonial.content}&rdquo;
      </p>

      <div className="border-t border-gray-100 pt-6">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h4 className="font-semibold text-foreground">{testimonial.author.name}</h4>
              {testimonial.verified && (
                <BadgeCheck className="w-4 h-4 text-accent" aria-label="Verified client" />
              )}
            </div>
            <p className="text-sm text-muted-foreground">{testimonial.author.role}</p>
            <p className="text-sm text-accent font-medium">{testimonial.author.company}</p>
          </div>
        </div>
        {testimonial.project && (
          <p className="text-xs text-muted-foreground mt-3 italic">Project: {testimonial.project}</p>
        )}
      </div>
    </div>
  );
}
