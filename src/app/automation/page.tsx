"use client";

import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";
import { StepCard } from "@/components/step-card";
import { ProjectCard } from "@/components/project-card";
import { AutomationTechStack } from "@/components/automation-tech-stack";
import { ContactSection } from "@/components/contact-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { automationCaseStudies, automationFaqs, automationSteps } from "@/constants";

export default function AutomationPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        title="AI-Powered Automation for Operational Excellence"
        subtitle="Custom automation solutions engineered to eliminate bottlenecks, reduce operational costs, and unlock exponential productivity gains for your organization."
        cta1={{ label: "Schedule Consultation", href: "#contact" }}
        cta2={{ label: "View Success Stories", href: "#case-studies" }}
      />

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Implementation Methodology" subtitle="Proven framework for successful automation delivery" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {automationSteps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Proven Results"
            subtitle="Real-world automation implementations driving measurable business impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationCaseStudies.map((study, index) => (
              <ProjectCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack (carousel) */}
      <AutomationTechStack />

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Automation <span className="text-accent">Questions Answered</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Get clarity on how AI automation can transform your business operations and drive sustainable growth.
            </p>
          </div>
          <FAQAccordion faqs={automationFaqs} />
        </div>
      </section>

      <ContactSection
        title="Ready to Scale Your Operations?"
        subtitle="Let's discuss how automation can transform your business"
        emailLabel="Book a call"
      />
    </main>
  );
}
