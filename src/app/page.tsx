"use client";

import ServicesSection from "@/components/ServicesSection";
import ProjectSection from "@/components/ProjectSection";
import HowWeWork from "@/components/HowWeWork";
import AboutMe from "@/components/AboutMe";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTA";
import TechStackSection from "@/components/TechStackSection";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { PageSchemas } from "@/components/PageSchemas";
import { faqs } from "@/constants";

export default function Home() {
  return (
    <>
      <PageSchemas services={["mvp", "design"]} faqs={faqs} />
      <main>
        <HeroSection
          title="Your Idea Doesn't Need Perfection. It Needs Validation."
          subtitle="Most MVPs die because they launch too late. I build products that get in front of users fast, collect real feedback faster, and iterate before your competitors even finish their roadmap."
          cta1={{ label: "See My Work", hoverLabel: "View Portfolio", href: "#projects" }}
          cta2={{ label: "Explore Automation", hoverLabel: "AI Solutions", href: "/automation" }}
        />

        <ServicesSection page="home" />

        <ProjectSection page="home" />

        <TestimonialsSection />

        <HowWeWork page="home" />

        <AboutMe />

        <TechStackSection page="home" />

        <FAQSection page="home" />

        <CTASection />
      </main>
    </>
  );
}
