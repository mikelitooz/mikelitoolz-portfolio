"use client";

import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { testimonials } from "@/constants/testimonials";
import { StructuredData, generateReviewSchema } from "@/lib/structured-data";
import Link from "next/link";
import { Star } from "lucide-react";

const TestimonialsSection: FC = () => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <StructuredData key={testimonial.id} data={generateReviewSchema(testimonial)} />
      ))}
      <section className="relative py-24 md:py-32 bg-swiss-charcoal border-t border-swiss-border">
        <Container>
          <div className="flex flex-col gap-16 md:gap-24">
            <SectionTitle title="What Founders Say" className="text-left" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
              {testimonials.map((testimonial, i) => (
                <div key={testimonial.id} className="flex flex-col gap-8 relative group">
                  {/* Decorative Quote */}
                  <span className="absolute -top-8 -left-8 text-8xl font-serif text-swiss-border opacity-50 select-none">
                    &ldquo;
                  </span>

                  <p className="text-xl md:text-2xl font-light text-swiss-platinum leading-relaxed italic relative z-10">
                    {testimonial.content}
                  </p>

                  <div className="flex items-center gap-4">
                    <span className="w-12 h-px bg-swiss-gray" />
                    <div className="flex flex-col">
                      <span className="text-white font-bold tracking-wide uppercase text-sm">{testimonial.author.name}</span>
                      <span className="text-swiss-gray text-xs uppercase tracking-widest">
                        {testimonial.author.role}, {testimonial.author.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TestimonialsSection;
