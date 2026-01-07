"use client";

import HeroVibe from "@/components/HeroVibe";
import CTASection from "@/components/CTA";
import FAQSection from "@/components/FAQSection";
import ServicesSection from "@/components/ServicesSection";
import HowWeWork from "@/components/HowWeWork";
import ProjectBento from "@/components/ProjectBento";
import TechStackSection from "@/components/TechStackSection";
import { PageSchemas } from "@/components/PageSchemas";
import { automationFaqs } from "@/constants";

export default function AutomationPage() {
  return (
    <>
      <PageSchemas services={["automation"]} faqs={automationFaqs} />
      <main>
        <HeroVibe
          title={["CLONE", "YOUR", "BEST", "DAY"]}
          subtitle="What If Your Team Could Clone Their Best Day, Every Day?"
          description="You're not short on ideas. You're short on time. I build AI systems that handle the repetitive grind so your team can focus on strategy, creativity, and growth. Most clients save 10+ hours per week within the first month. What could you build with that time back?"
          ctaText="AUTOMATE NOW"
          ctaLink="#contact"
          layout="split"
        />

        <ProjectBento page="automation" />
        <ServicesSection page="automation" />

        <HowWeWork page="automation" />

        <TechStackSection page="automation" />

        <FAQSection page="automation" />

        <CTASection />
      </main>
    </>
  );
}
