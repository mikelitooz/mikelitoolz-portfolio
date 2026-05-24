"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Container from "./Container";
import { CALENDLY_URL } from "@/constants";

const CalendlyModal = dynamic(() => import("./CalendlyModal"), { ssr: false });

export default function CTASection() {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <section className="relative py-24 md:py-32 bg-swiss-charcoal overflow-hidden" id="contact">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center max-w-4xl mx-auto"
        >
          {/* Decorative glow */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

          <p className="text-sm md:text-base text-swiss-gray tracking-[0.3em] uppercase mb-6">
            Let&apos;s Work Together
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-swiss-platinum tracking-tight leading-[1.1]">
            Stop Losing Hours to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Manual Work
            </span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-swiss-gray max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute strategy session. We&apos;ll audit your
            workflows, identify the biggest time-wasters, and show you exactly
            how AI automation can save your team 10+ hours every week.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="group relative px-10 py-5 bg-foreground text-background font-semibold text-lg tracking-wide rounded-full hover:scale-105 transition-transform duration-300 overflow-hidden"
            >
              <span className="relative z-10">Book Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>

            <a
              href={`mailto:ifeanyi_micheal@yahoo.com`}
              className="px-10 py-5 border border-swiss-gray/40 text-swiss-platinum font-medium text-lg tracking-wide rounded-full hover:border-swiss-platinum transition-colors duration-300"
            >
              Send an Email
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-swiss-gray text-sm tracking-wide">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              Results in weeks, not months
            </span>
          </div>
        </motion.div>
      </Container>

      {/* Calendly Modal */}
      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
}
