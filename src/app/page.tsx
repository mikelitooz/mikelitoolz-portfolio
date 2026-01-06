"use client";

import ServicesSection from "@/components/ServicesSection";
import ProjectBento from "@/components/ProjectBento";
// import ProjectSection from "@/components/ProjectSection";
import HowWeWork from "@/components/HowWeWork";
import QuietudePhilosophy from "@/components/QuietudePhilosophy";
// import AboutMe from "@/components/AboutMe";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTA";
import TechStackSection from "@/components/TechStackSection";
import HeroVibe from "@/components/HeroVibe";
import TestimonialsSection from "@/components/TestimonialsSection";
import { PageSchemas } from "@/components/PageSchemas";
import { faqs } from "@/constants";

export default function Home() {
  return (
    <>
      <PageSchemas services={["mvp", "design"]} faqs={faqs} />
      <main>
        <HeroVibe />

        <ServicesSection page="home" />

        <ProjectBento page="home" />

        <TestimonialsSection />

        <HowWeWork page="home" />

        <QuietudePhilosophy />

        <TechStackSection page="home" />

        <FAQSection page="home" />

        <CTASection />
      </main>
    </>
  );
}
