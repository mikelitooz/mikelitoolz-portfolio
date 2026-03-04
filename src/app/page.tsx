"use client";

import ServicesSection from "@/components/ServicesSection";
import ProjectBento from "@/components/ProjectBento";
import BusinessProblems from "@/components/BusinessProblems";
import HowWeWork from "@/components/HowWeWork";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTA";
import TechStackSection from "@/components/TechStackSection";
import BlackBoxHero from "@/components/BlackBoxHero";
import TestimonialsSection from "@/components/TestimonialsSection";
import { PageSchemas } from "@/components/PageSchemas";
import { faqs } from "@/constants";

export default function Home() {
  return (
    <>
      <PageSchemas services={["mvp", "automation"]} faqs={faqs} />
      <main>
        <BlackBoxHero />

        <BusinessProblems />

        <ServicesSection page="home" />

        <ProjectBento page="home" />

        <TestimonialsSection />

        <HowWeWork page="home" />

        <TechStackSection page="home" />

        <FAQSection page="home" />

        <CTASection />
      </main>
    </>
  );
}
