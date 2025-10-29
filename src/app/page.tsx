"use client";

import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { WhyCard } from "@/components/why-card";
import { StatsCard } from "@/components/stats-card";
import { TechStackSection } from "@/components/tech-stack-section";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQAccordion } from "@/components/faq-accordion";
import { ContactSection } from "@/components/contact-section";
import { faqs, processSteps, projects, services, stats, whyWorkWithMe } from "@/constants";
import { ProfileImage } from "@/assets";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      {/* Hero Section */}
      <HeroSection
        title="Turn Your Idea Into a Live Product Fast"
        subtitle="Most founders struggle to find developers who ship on time without technical drama. I build MVPs and AI automation systems that help you launch quickly, test your market, and scale without the headaches."
        cta1={{ label: "See My Work", hoverLabel: "View Portfolio 🎯", href: "#projects" }}
        cta2={{ label: "Explore Automation", hoverLabel: "Discover AI Power 🤖", href: "/automation" }}
      />

      {/* Services Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            title="What I Build"
            subtitle="Practical solutions that help you launch and grow faster"
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
            title="Recent Projects"
            subtitle="Real products built for real businesses"
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
              ✓ The Process
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              How We <span className="text-accent">Work Together</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              A simple, transparent process from idea to launch. You&apos;ll see progress every week, no surprises, and a product you&apos;re proud to ship.
            </p>
          </div>
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="About Me" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Text Content - Left Side */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-2xl font-semibold text-accent">
                Fullstack Developer & AI Automation Specialist
              </h3>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I&apos;m Izzy, a Fullstack Developer focused on helping founders and businesses turn their ideas into fast, scalable, and visually appealing MVPs. I build products that combine performance, usability, and design using tools like Next.js, Supabase,ShadCn, TailwindCSS, n8n, and Claude AI.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                By combining code with no-code tools, I speed up development while maintaining high quality, delivering production-ready applications that are efficient, stable, and easy to maintain.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With experience in AI-powered automation, workflow optimization, and fullstack development, I&apos;ve helped startups streamline operations, ship faster, and reach users sooner. My approach blends technical expertise with a clear understanding of business goals, ensuring every project delivers real results and long-term value.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative rounded-lg overflow-hidden border border-border shadow-2xl max-w-xs w-full aspect-[3/4]">
                <Image
                  src={ProfileImage}
                  alt="Professional development workspace"
                  fill
                  sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 320px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Work With <span className="text-accent">Me</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              You need more than just a developer. You need a partner who gets results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithMe.map((item, index) => (
              <WhyCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              📊 Track Record
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Proven <span className="text-accent">Results</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Numbers don&apos;t lie. Here&apos;s what I&apos;ve accomplished building for founders and businesses.
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
              Common <span className="text-accent">Questions</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Got questions about how this works? Here are the answers founders usually ask.
            </p>
          </div>
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <ContactSection
        title="Ready to Launch Your Product?"
        subtitle="Book a quick call and I'll walk you through how we can bring your idea to life. No pressure, just honest advice."
        emailLabel="Let&apos;s talk about your project"
        emailHoverLabel="Start Your Journey! 🚀"
      />
    </main>
  );
}
