import {
  ApiIcon,
  ClaudeIcon,
  CssIcon,
  FigmaIcon,
  FirebaseIcon,
  GoogleDocsIcon,
  GoogleSheetsIcon,
  HtmlIcon,
  JavaScriptIcon,
  LangchainIcon,
  MySQLIcon,
  N8nIcon,
  NextjsIcon,
  NodejsIcon,
  NotionIcon,
  OpenAIIcon,
  PythonIcon,
  ReactIcon,
  ShadcnIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  WebhookIcon,
  ZapierIcon,
} from "@/assets";

export const fullStackTools = [
  { id: "fullstac-1", name: "React", icon: ReactIcon },
  { id: "fullstac-2", name: "Next.js", icon: NextjsIcon },
  { id: "fullstac-3", name: "Tailwind CSS", icon: TailwindIcon },
  { id: "fullstac-4", name: "TypeScript", icon: TypeScriptIcon },
  { id: "fullstac-5", name: "Node.js", icon: NodejsIcon },
  { id: "fullstac-6", name: "Firebase", icon: FirebaseIcon },
  { id: "fullstac-7", name: "Supabase", icon: SupabaseIcon },
  { id: "fullstac-8", name: "Shadcn", icon: ShadcnIcon },
  { id: "fullstac-9", name: "HTML", icon: HtmlIcon },
  { id: "fullstac-10", name: "CSS", icon: CssIcon },
  { id: "fullstac-11", name: "JavaScript", icon: JavaScriptIcon },
  { id: "fullstac-12", name: "Python", icon: PythonIcon },
  { id: "fullstac-13", name: "MySQL", icon: MySQLIcon },
  { id: "fullstac-14", name: "Figma", icon: FigmaIcon },
];

export const automationTools = [
  { id: "automation-1", name: "Zapier", icon: ZapierIcon },
  { id: "automation-2", name: "Google Sheets", icon: GoogleSheetsIcon },
  { id: "automation-3", name: "Google Docs", icon: GoogleDocsIcon },
  { id: "automation-4", name: "Claude", icon: ClaudeIcon },
  { id: "automation-5", name: "API Integration", icon: ApiIcon },
  { id: "automation-6", name: "Langchain", icon: LangchainIcon },
  { id: "automation-7", name: "OpenAI", icon: OpenAIIcon },
  { id: "automation-8", name: "Notion", icon: NotionIcon },
  { id: "automation-9", name: "N8n", icon: N8nIcon },
  { id: "automation-10", name: "Webhook", icon: WebhookIcon },
];

export const services = [
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

export const projects = [
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

export const stats = [
  {
    icon: "🏆",
    value: "15+",
    label: "Projects Completed",
    subtitle: "Successfully delivered",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: "👥",
    value: "10+",
    label: "Happy Clients",
    subtitle: "Satisfied customers",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: "📈",
    value: "20K+",
    label: "Following On Social Media",
    subtitle: "Active community",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: "⚡",
    value: "6+",
    label: "Years of Experience",
    subtitle: "Professional expertise",
    bgColor: "bg-orange-500/10",
  },
];

export const processSteps = [
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

export const faqs = [
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

export const automationSteps = [
  {
    number: 1,
    title: "Process Analysis & Discovery",
    description: "Comprehensive audit of existing workflows to identify automation opportunities and quantify efficiency gains.",
    icon: "🔍",
  },
  {
    number: 2,
    title: "Intelligent System Design",
    description:
      "Strategic integration of enterprise AI tools and custom APIs engineered for optimal performance and reliability.",
    icon: "⚙️",
  },
  {
    number: 3,
    title: "Deployment & Continuous Optimization",
    description: "Full implementation with rigorous testing, monitoring, and ongoing refinement to maximize ROI.",
    icon: "🚀",
  },
];

export const automationCaseStudies = [
  {
    title: "Enterprise Customer Support Automation",
    description:
      "AI-powered conversational system delivering 24/7 support with 85% resolution rate and 60% reduction in ticket volume.",
    image: "/customer-support-ai.jpg",
    tags: ["OpenAI", "Python", "Zapier"],
  },
  {
    title: "B2B Lead Qualification Engine",
    description:
      "Intelligent nurturing system that increased qualified pipeline by 3x through automated scoring and personalized outreach.",
    image: "/lead-nurturing.jpg",
    tags: ["LangChain", "Node.js", "SendGrid"],
  },
  {
    title: "Multi-Channel Content Orchestration",
    description:
      "End-to-end content generation and distribution platform reducing production time by 70% across all marketing channels.",
    image: "/ai-content-generator.jpg",
    tags: ["OpenAI", "Python", "Buffer API"],
  },
];

export const automationFaqs = [
  {
    question: "What types of business processes can be automated?",
    answer:
      "Nearly any repetitive, rule-based process can benefit from automation. Common use cases include customer support workflows, lead qualification and nurturing, data entry and synchronization, content generation and distribution, invoice processing, appointment scheduling, email campaigns, reporting and analytics, CRM updates, and document management. We assess your unique workflows to identify high-impact opportunities that deliver measurable ROI.",
  },
  {
    question: "How do AI automation solutions differ from traditional automation?",
    answer:
      "Traditional automation follows rigid, predefined rules and struggles with unstructured data or contextual decisions. AI automation leverages machine learning and natural language processing to handle complex scenarios, understand context, learn from patterns, and make intelligent decisions. This means systems can interpret customer inquiries, generate personalized responses, extract insights from unstructured documents, and continuously improve performance—capabilities impossible with conventional automation.",
  },
  {
    question: "What is the typical ROI timeline for automation implementation?",
    answer:
      "Most clients see measurable returns within 3-6 months of deployment. Initial efficiency gains appear immediately as automated processes begin handling routine tasks. Full ROI typically materializes within 6-12 months as systems mature and adoption scales across teams. Factors influencing timeline include process complexity, integration requirements, and implementation scope. We provide detailed ROI projections during the discovery phase, tracking key metrics like time saved, cost reduction, and productivity increases.",
  },
  {
    question: "Do I need technical expertise to manage automated systems?",
    answer:
      "No technical expertise is required. We design automation solutions with user-friendly interfaces and intuitive management dashboards. Your team receives comprehensive training and documentation covering system operation, monitoring, and basic troubleshooting. We also provide ongoing support for maintenance, updates, and optimization. For complex modifications or scaling, our team handles technical implementation while you maintain strategic oversight through accessible reporting tools.",
  },
  {
    question: "How do you ensure data security and compliance in automated workflows?",
    answer:
      "Security and compliance are fundamental to every automation we build. We implement end-to-end encryption for data transmission, secure API authentication protocols, role-based access controls, and audit logging for all automated actions. For regulated industries, we ensure GDPR, HIPAA, SOC 2, or other relevant compliance standards are met. All integrations undergo security assessments, and we follow industry best practices for credential management and data handling throughout the automation lifecycle.",
  },
  {
    question: "Can automation solutions integrate with our existing tools and systems?",
    answer:
      "Yes, integration with your existing technology stack is a core component of our approach. We work with popular platforms including Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, Stripe, Shopify, and hundreds of other business tools via APIs and integration platforms like Zapier and Make. For proprietary systems, we develop custom integrations to ensure seamless data flow across your entire ecosystem without disrupting current operations.",
  },
];
