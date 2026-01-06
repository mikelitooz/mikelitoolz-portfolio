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
        <HeroVibe title={["CLONE", "YOUR", "BEST", "DAY"]} ctaText="AUTOMATE NOW" ctaLink="#contact" />

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
