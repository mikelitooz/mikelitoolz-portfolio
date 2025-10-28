"use client";

import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { StatsCard } from "@/components/stats-card";
import { TechStackSection } from "@/components/tech-stack-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQAccordion } from "@/components/faq-accordion";
import { ContactSection } from "@/components/contact-section";
import { faqs, processSteps, projects, services, stats } from "@/constants";
import { AboutImage, ProfileImage } from "@/assets";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        title="Transforming Vision Into Validated Products"
        subtitle="Strategic product development and AI automation solutions that empower founders to launch faster, scale smarter, and compete effectively in today's market."
        cta1={{ label: "View Portfolio", href: "#projects" }}
        cta2={{ label: "Explore AI Solutions", href: "/automation" }}
      />

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Comprehensive Development Services"
            subtitle="Strategic solutions engineered for growth-focused founders"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="Portfolio Highlights"
            subtitle="Production-ready solutions delivering measurable business impact"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium mb-6">
              ✓ Our Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How It <span className="text-accent">Works</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Our proven 5-step methodology ensures your project is delivered on time, within budget, and exceeds expectations.
              From discovery to deployment, we&apos;re with you every step of the way.
            </p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Why Partner With Us" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Text Content - Left Side */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-accent">
                Your Success Is Our Priority
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                We understand that launching a product or scaling your business requires more than just code—it demands a
                strategic partner who&apos;s invested in your vision. Our approach is centered around delivering solutions that
                directly impact your bottom line, reduce time-to-market, and position you ahead of the competition.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Whether you&apos;re a founder validating a new market opportunity or an established business seeking to automate
                and optimize operations, we bring proven expertise in full-stack development and AI automation to accelerate
                your growth trajectory.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                From MVP to scale, we deliver production-ready, maintainable solutions built with modern technologies—ensuring
                your product is not just functional, but engineered for sustainable success.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl max-w-md w-full">
                <Image
                  src={ProfileImage}
                  alt="Professional development workspace"
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              📊 Live Analytics
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              WHY <span className="text-accent">US</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Because we are not just developers, we are your partners in success. We have a proven track record of delivering
              exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatsCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section (carousel) */}
      <TechStackSection />

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Frequently Asked <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Have questions about our MVP development process? Find answers to common questions below.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <ContactSection
        title="Let's Build Together"
        subtitle="Let's discuss how I can bring your project to life. Let's have a quick 30 minutes call to discuss the details."
        emailLabel="Book a call"
      />
    </main>
  );
}
