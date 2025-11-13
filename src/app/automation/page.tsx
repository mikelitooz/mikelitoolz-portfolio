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
        title="What If Your Team Could Clone Their Best Day, Every Day?"
        subtitle="You're not short on ideas. You're short on time. I build AI systems that handle the repetitive grind so your team can focus on strategy, creativity, and growth. Most clients save 10+ hours per week within the first month. What could you build with that time back?"
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
