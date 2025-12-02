"use client";

import { FC } from "react";
import Container from "./Container";
import { SectionTitle } from "./section-title";
import { TestimonialCard } from "./TestimonialCard";
import { testimonials } from "@/constants/testimonials";
import { StructuredData, generateReviewSchema } from "@/lib/structured-data";
import { Star } from "lucide-react";
import Link from "next/link";

const TestimonialsSection: FC = () => {
  return (
    <>
      {testimonials.map((testimonial) => (
        <StructuredData key={testimonial.id} data={generateReviewSchema(testimonial)} />
      ))}
      <section className="relative overflow-hidden py-16 md:py-24 bg-gray-50">
        <Container className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            <SectionTitle title="Trusted by Founders Who Value Results" />

            <div className="flex items-center gap-2 mb-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">5.0</span>
              <span className="text-muted-foreground">({testimonials.length} reviews)</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-12">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            <div className="text-center">
              <p className="text-muted-foreground mb-4">Ready to validate your idea?</p>
              <Link
                href="https://cal.com/izzydevbuild/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors duration-200"
              >
                Schedule a Discovery Call
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default TestimonialsSection;
