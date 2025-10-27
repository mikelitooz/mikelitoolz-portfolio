"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SectionTitle } from "@/components/section-title";
import { StepCard } from "@/components/step-card";
import { ProjectCard } from "@/components/project-card";
import { ToolBadge } from "@/components/tool-badge";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function AutomationPage() {
  const steps = [
    {
      number: 1,
      title: "Process Analysis & Discovery",
      description: "Comprehensive audit of existing workflows to identify automation opportunities and quantify efficiency gains.",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Intelligent System Design",
      description: "Strategic integration of enterprise AI tools and custom APIs engineered for optimal performance and reliability.",
      icon: "⚙️",
    },
    {
      number: 3,
      title: "Deployment & Continuous Optimization",
      description: "Full implementation with rigorous testing, monitoring, and ongoing refinement to maximize ROI.",
      icon: "🚀",
    },
  ];

  const caseStudies = [
    {
      title: "Enterprise Customer Support Automation",
      description: "AI-powered conversational system delivering 24/7 support with 85% resolution rate and 60% reduction in ticket volume.",
      image: "/customer-support-ai.jpg",
      tags: ["OpenAI", "Python", "Zapier"],
    },
    {
      title: "B2B Lead Qualification Engine",
      description: "Intelligent nurturing system that increased qualified pipeline by 3x through automated scoring and personalized outreach.",
      image: "/lead-nurturing.jpg",
      tags: ["LangChain", "Node.js", "SendGrid"],
    },
    {
      title: "Multi-Channel Content Orchestration",
      description: "End-to-end content generation and distribution platform reducing production time by 70% across all marketing channels.",
      image: "/ai-content-generator.jpg",
      tags: ["OpenAI", "Python", "Buffer API"],
    },
  ];

  const tools = [
    { name: "OpenAI", icon: "🤖" },
    { name: "Zapier", icon: "🔄" },
    { name: "LangChain", icon: "🔗" },
    { name: "Next.js", icon: "▲" },
    { name: "Python", icon: "🐍" },
    { name: "Node.js", icon: "⚡" },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navbar />

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
          <SectionTitle
            title="Implementation Methodology"
            subtitle="Proven framework for successful automation delivery"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
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
            {caseStudies.map((study, index) => (
              <ProjectCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <SectionTitle
            title="Technology Stack"
            subtitle="Enterprise-grade tools architected for reliability and scale"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {tools.map((tool) => (
              <ToolBadge key={tool.name} {...tool} />
            ))}
          </div>
          <p className="text-foreground/70 mt-8 text-center">
            Seamless integration of cutting-edge AI capabilities with your existing infrastructure to deliver
            intelligent, production-ready automation solutions.
          </p>
        </div>
      </section>

      <ContactSection
        title="Ready to Scale Your Operations?"
        subtitle="Let's discuss how automation can transform your business"
        emailLabel="Request Consultation"
        showSocials={false}
      />

      <Footer />
    </main>
  )
}
