"use client";

import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import ProjectSection from "@/components/ProjectSection";
import TechStackSection from "@/components/TechStackSection";

export default function AutomationPage() {
  return (
    <main>
      <HeroSection
        title="Stop Wasting Time on Repetitive Tasks"
        subtitle="Most businesses lose hours every week on manual work that could be automated. I build AI systems that handle the busy work for you so your team can focus on what actually grows the business."
        cta1={{ label: "Book a Call", hoverLabel: "Let's Talk! 🚀", href: "https://cal.com/izzydevbuild/30min" }}
        cta2={{ label: "See Case Studies", hoverLabel: "View Results 📊", href: "#projects" }}
      />

      <ProjectSection page="automation" />
      <ServicesSection page="automation" />

      <HowWeWork page="automation" />

      <TechStackSection page="automation" />

      <FAQSection page="automation" />

      <CTASection />
    </main>
  );
}
