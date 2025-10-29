"use client";

import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";
import { ProjectCard } from "@/components/project-card";
import { ServiceCard } from "@/components/service-card";
import { AutomationTechStack } from "@/components/automation-tech-stack";
import { ContactSection } from "@/components/contact-section";
import { FAQAccordion } from "@/components/faq-accordion";
import { Timeline } from "@/components/timeline";
import { automationCaseStudies, automationFaqs, automationSteps, automationServices } from "@/constants";

export default function AutomationPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        title="Stop Wasting Time on Repetitive Tasks"
        subtitle="Most businesses lose hours every week on manual work that could be automated. I build AI systems that handle the busy work for you so your team can focus on what actually grows the business."
        cta1={{ label: "Book a Call", hoverLabel: "Let's Talk! 🚀", href: "#contact" }}
        cta2={{ label: "See Case Studies", hoverLabel: "View Results 📊", href: "#case-studies" }}
      />

      {/* Case Studies */}
      <section id="case-studies" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Real Results" subtitle="See how automation saved time and money for real businesses" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {automationCaseStudies.map((study, index) => (
              <ProjectCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="What I Can Automate"
            subtitle="Smart solutions that save you time and eliminate manual headaches"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="How It Works" subtitle="A simple process to get automation working in your business" />
          <div className="mt-16">
            <Timeline steps={automationSteps} />
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
              Common <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Wondering if automation is right for your business? Here&apos;s what people usually ask.
            </p>
          </div>
          <FAQAccordion faqs={automationFaqs} />
        </div>
      </section>

      <ContactSection
        title="Ready to Automate Your Workflows?"
        subtitle="Book a call and let's talk about what's eating up your time. I'll show you exactly how automation can help."
        emailLabel="Let's talk about your project"
        emailHoverLabel="Start Saving Time! ⚡"
      />
    </main>
  );
}
