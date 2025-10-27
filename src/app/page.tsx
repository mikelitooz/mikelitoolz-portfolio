"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { StatsCard } from "@/components/stats-card";
import { TechStackBadge } from "@/components/tech-stack-badge";
import { ProcessTimeline } from "@/components/process-timeline";
import { FAQAccordion } from "@/components/faq-accordion";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  const services = [
    {
      icon: "⚙️",
      title: "MVP Development",
      description:
        "Full-stack web applications designed to validate your business concept and accelerate time-to-market with scalable architecture.",
    },
    {
      icon: "⚡",
      title: "AI Automation Solutions",
      description:
        "Enterprise-grade automation workflows that optimize operations, reduce overhead, and drive measurable efficiency gains.",
    },
    {
      icon: "🎨",
      title: "Product Design & UX",
      description:
        "User-centric interfaces crafted to enhance engagement, streamline workflows, and deliver exceptional digital experiences.",
    },
  ];

  const projects = [
    {
      title: "SaaS Analytics Platform",
      description: "Enterprise analytics solution delivering real-time insights into user behavior and engagement metrics.",
      image: "/saas-dashboard.jpg",
      tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
      link: "#",
    },
    {
      title: "AI Content Generation Suite",
      description: "Intelligent content creation platform leveraging GPT-4 to streamline content workflows for marketing teams.",
      image: "/ai-content-generator.jpg",
      tags: ["React", "Node.js", "OpenAI", "MongoDB"],
      link: "#",
    },
    {
      title: "Multi-Vendor Marketplace",
      description: "Scalable e-commerce ecosystem with integrated payment processing and real-time transaction monitoring.",
      image: "/marketplace-platform.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "WebSocket"],
      link: "#",
    },
    {
      title: "Project Management System",
      description: "Collaborative workspace featuring AI-driven prioritization and intelligent resource allocation.",
      image: "/task-management-board.png",
      tags: ["React", "Firebase", "AI", "Tailwind"],
      link: "#",
    },
    {
      title: "B2B Lead Nurturing Engine",
      description: "Automated qualification and engagement system designed to maximize conversion rates for enterprise sales.",
      image: "/lead-automation.jpg",
      tags: ["Node.js", "Zapier", "OpenAI", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Mobile API Infrastructure",
      description: "High-performance REST API architecture supporting real-time synchronization and secure authentication.",
      image: "/mobile-backend.jpg",
      tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
      link: "#",
    },
  ];

  const stats = [
    {
      icon: <span className="text-2xl">🏆</span>,
      value: "15+",
      label: "Projects Completed",
      subtitle: "Successfully delivered",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: <span className="text-2xl">👥</span>,
      value: "10+",
      label: "Happy Clients",
      subtitle: "Satisfied customers",
      bgColor: "bg-teal-500/10",
    },
    {
      icon: <span className="text-2xl">📈</span>,
      value: "20K+",
      label: "Following On Social Media",
      subtitle: "Active community",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: <span className="text-2xl">⚡</span>,
      value: "6+",
      label: "Years of Experience",
      subtitle: "Professional expertise",
      bgColor: "bg-orange-500/10",
    },
  ];

  const techStack = [
    { name: "Go", icon: <span className="text-cyan-400 font-bold">GO</span>, color: "bg-cyan-500/10" },
    { name: "Figma", icon: <span className="text-2xl">🎨</span>, color: "bg-red-500/10" },
    { name: "Firebase", icon: <span className="text-2xl">🔥</span>, color: "bg-yellow-500/10" },
    { name: "MaterialUI", icon: <span className="text-2xl">Ⓜ️</span>, color: "bg-blue-500/10" },
    { name: "Nginx", icon: <span className="text-green-500 font-bold">N</span>, color: "bg-green-500/10" },
    { name: "Strapi", icon: <span className="text-2xl">📦</span>, color: "bg-purple-500/10" },
    { name: "HTML", icon: <span className="text-orange-500 font-bold">5</span>, color: "bg-orange-500/10" },
    { name: "CSS", icon: <span className="text-blue-500 font-bold">3</span>, color: "bg-blue-500/10" },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We begin by deeply understanding your vision, business objectives, and target market. Through collaborative sessions, we identify core requirements, define success metrics, and establish a strategic roadmap that aligns technology with your business goals.",
      icon: "🔍",
      progress: "20%",
    },
    {
      number: "02",
      title: "Design & Architecture",
      description:
        "Our team crafts intuitive user experiences and robust system architecture. We create wireframes, prototypes, and technical specifications that ensure your product is both beautiful and built to scale from day one.",
      icon: "🎨",
      progress: "40%",
    },
    {
      number: "03",
      title: "Development & Integration",
      description:
        "Using modern frameworks and best practices, we build your product with clean, maintainable code. Our agile approach includes regular updates, iterative improvements, and seamless integration with your existing systems and third-party services.",
      icon: "⚙️",
      progress: "70%",
    },
    {
      number: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across devices, browsers, and use cases ensures your product performs flawlessly. We conduct comprehensive QA, security audits, and performance optimization to deliver enterprise-grade reliability.",
      icon: "🔬",
      progress: "90%",
    },
    {
      number: "05",
      title: "Launch & Growth Support",
      description:
        "We don&apos;t just build and leave. Our partnership continues with deployment support, performance monitoring, and strategic guidance to help you scale. We&apos;re invested in your long-term success.",
      icon: "🚀",
      progress: "100%",
    },
  ];

  const faqs = [
    {
      question: "What is an MVP and why do I need one?",
      answer:
        "An MVP (Minimum Viable Product) is a version of your product with just enough features to validate your business idea with real users. It allows you to test market demand, gather feedback, and iterate quickly without investing months or years in development. This approach reduces risk, saves money, and helps you build what customers actually want.",
    },
    {
      question: "How long does it take to build an MVP?",
      answer:
        "Most MVPs can be developed in 6-12 weeks, depending on complexity and scope. We follow an agile methodology with weekly sprints, so you'll see progress continuously. For more complex products requiring multiple integrations or advanced features, timelines may extend to 12-16 weeks. We'll provide a detailed timeline during the discovery phase.",
    },
    {
      question: "What technologies do you use for development?",
      answer:
        "We specialize in modern, proven technology stacks including Next.js, React, TypeScript, Node.js, PostgreSQL, and cloud platforms like AWS and Vercel. For AI automation, we leverage OpenAI, LangChain, and popular integration tools like Zapier. Technology choices are always tailored to your specific needs, scalability requirements, and long-term maintenance considerations.",
    },
    {
      question: "Do you provide support after the MVP is launched?",
      answer:
        "Absolutely. We offer comprehensive post-launch support including bug fixes, performance monitoring, security updates, and feature enhancements. Our support packages range from essential maintenance to full ongoing development partnerships. We believe in long-term relationships and are committed to your product's continued success.",
    },
    {
      question: "How much does it cost to develop an MVP?",
      answer:
        "MVP development typically ranges from $10,000 to $50,000, depending on complexity, features, and integrations required. We provide transparent, fixed-price quotes after the discovery phase so there are no surprises. Investment includes full-stack development, UI/UX design, testing, deployment, and initial support. We also offer flexible payment plans for early-stage founders.",
    },
  ];

  return (
    <main className="bg-background text-foreground">
      <Navbar />

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
        <div className="max-w-3xl mx-auto">
          <SectionTitle title="About" />
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-lg text-foreground/80 leading-relaxed mb-4">
              As a full-stack engineer specializing in rapid product development and intelligent automation, I partner with
              founders to transform concepts into market-ready solutions. My approach combines technical excellence with strategic
              thinking to ensure every build drives meaningful business outcomes.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              From early-stage MVPs to enterprise-grade automation systems, I deliver scalable, maintainable solutions that
              position your product for sustainable growth. Whether you&apos;re validating a new market or optimizing existing
              operations, I bring the technical expertise to accelerate your path to success.
            </p>
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

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-6">
              Our Tech Stack
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Technology Excellence</h2>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Leveraging cutting-edge technologies to build robust, scalable solutions
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <TechStackBadge key={index} {...tech} />
            ))}
          </div>
        </div>
      </section>

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
        subtitle="Ready to transform your vision into reality?"
        emailLabel="Start a Conversation"
      />

      <Footer />
    </main>
  );
}
