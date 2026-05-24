import { StaticImageData } from "next/image";
import {
  ApiIcon,
  AutomationIcon,
  ClaudeIcon,
  CssIcon,
  DesignIcon,
  FigmaIcon,
  FirebaseIcon,
  GoogleDocsIcon,
  GoogleSheetsIcon,
  HtmlIcon,
  JavaScriptIcon,
  LangchainIcon,
  MVPIcon,
  MySQLIcon,
  N8nIcon,
  NextjsIcon,
  NodejsIcon,
  NotionIcon,
  OpenAIIcon,
  PythonIcon,
  ReactIcon,
  ReminderImage,
  ShadcnIcon,
  SupabaseIcon,
  TailwindIcon,
  TypeScriptIcon,
  WebhookIcon,
  ZapierIcon,
} from "@/assets";
import { Rocket, Brain, Workflow, MessageSquareDot, Server, Database, Bot, Zap, Plug, ShieldCheck, Mic, FileText } from "lucide-react";

// ─── CALENDLY ───────────────────────────────────────────
export const CALENDLY_URL = "https://calendly.com/ifeanyi_micheal/30min";

// ─── TYPES ──────────────────────────────────────────────
export interface CaseStudy {
  slug: string;
  title: string;
  description: string;
  image: string | StaticImageData;
  video?: string;
  architectureImage?: string;
  tags: string[];
  link: string;
  variant?: "featured";
  problem: string;
  solution: string;
  architecture: string;
  technologies: { name: string; category: string }[];
  results: string[];
  industry: string;
}

export interface Solution {
  icon: typeof Brain;
  title: string;
  description: string;
  useCase: string;
  slug: string;
}

export interface BusinessProblem {
  icon: typeof Workflow;
  title: string;
  description: string;
}

// ─── SOCIAL LINKS ───────────────────────────────────────
export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/micheal-ifeanyi-45730b163/" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UC6C_TpuVGp357Hm2Wzy7Tfg" },
  { name: "GitHub", url: "https://github.com/mikelitoolz" },
  { name: "Email", url: "mailto:ifeanyi_micheal@yahoo.com" },
];

// ─── BUSINESS PROBLEMS ─────────────────────────────────
export const businessProblems: BusinessProblem[] = [
  {
    icon: Workflow,
    title: "Manual Workflows Draining Hours",
    description:
      "Your team spends 10+ hours a week on data entry, follow-ups, and scheduling. That's time bleeding away from strategy and growth.",
  },
  {
    icon: MessageSquareDot,
    title: "Lost Leads Outside Business Hours",
    description:
      "Prospects reach out at 11 PM. Nobody answers. By morning, they've moved on. You're losing revenue every night your systems sleep.",
  },
  {
    icon: Plug,
    title: "Disconnected Business Systems",
    description:
      "Your CRM doesn't talk to your calendar. Your calendar doesn't talk to your email. Your team wastes time copying data between tabs.",
  },
  {
    icon: Brain,
    title: "AI Experiments That Fail in Production",
    description:
      "You've tried ChatGPT. Maybe even built a prototype. But turning an AI demo into a reliable, production system? That's where most companies get stuck.",
  },
];

// ─── SOLUTIONS ──────────────────────────────────────────
export const solutions: Solution[] = [
  {
    icon: MessageSquareDot,
    title: "AI Customer Support Agents",
    description:
      "Deploy intelligent chatbots that understand context, answer questions accurately, qualify leads, and escalate only when necessary. Available 24/7 across WhatsApp, web, and email.",
    useCase:
      "A clinic deployed my WhatsApp AI agent and reduced support tickets by 60% while handling bookings autonomously after hours.",
    slug: "ai-customer-support-agents",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Systems",
    description:
      "Eliminate repetitive tasks by connecting your tools into self-running systems. From appointment booking to invoice processing, I automate the grind.",
    useCase:
      "A medical clinic automated their entire appointment lifecycle — booking, reminders, cancellations, and waitlist — saving 15+ hours per week.",
    slug: "workflow-automation-systems",
  },
  {
    icon: Brain,
    title: "AI Knowledge Assistants (RAG)",
    description:
      "Build AI assistants that answer questions using your actual business data. Powered by Retrieval-Augmented Generation, they give accurate, source-backed responses — not hallucinations.",
    useCase:
      "A real estate firm deployed a RAG assistant that answers tenant queries instantly and qualifies leads before human intervention.",
    slug: "ai-knowledge-assistants",
  },
  {
    icon: Server,
    title: "Cloud Infrastructure for AI",
    description:
      "Design and deploy the cloud architecture your AI applications need to run reliably at scale. From self-hosted n8n instances to AWS, I build infrastructure that doesn't break at 2 AM.",
    useCase:
      "I architected a multi-workflow automation platform on n8n handling 500+ daily operations for a scaling company.",
    slug: "cloud-infrastructure",
  },
];

// ─── CASE STUDIES ───────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    slug: "24manager-saas-billing",
    title: "24manager — Multi-Tenant SaaS Billing Engine",
    description:
      "Engineered a core financial engine in NestJS and Prisma for a multi-tenant platform. Implemented autonomous subscription loops and revenue splits using Paystack billing authorizations.",
    image: "/projects/24manager-billing.svg",
    tags: ["NestJS", "Prisma", "PostgreSQL", "Paystack API", "Cron Scheduling"],
    link: "/case-studies/24manager-saas-billing",
    variant: "featured",
    problem:
      "24manager required a secure billing infrastructure that existed outside of standard Paystack dashboard plans to support flexible custom-negotiated pricing and dynamic upgrades/downgrades. Additionally, they needed an automated way to calculate and distribute recurring 30% technical partner splits without manual accounting overhead.",
    solution:
      "Built a secure, multi-tenant billing orchestrator using NestJS 11 and Prisma 7. The system establishes 24manager as the primary subscription authority. When a customer initiates a plan, the engine uses Paystack solely to secure a tokenized `charge_authorization` code. A robust, transactional daily cron engine then handles recurring renewals programmatically, executes safe upgrades/downgrades, isolates client database records on a safe `tenantId` schema level, and automatically routes 30/70 partner revenue splits.",
    architecture:
      "SaaS Admin Panel → NestJS Gateway API → Prisma Core Client → PostgreSQL Multi-Tenant DB ↔ Scheduled Billing Cron ↔ Paystack charge_authorization API ↔ Revenue Split Router ↔ Slack Telemetry Webhooks",
    architectureImage: "/architecture-agent.png",
    technologies: [
      { name: "NestJS 11", category: "Infrastructure" },
      { name: "Prisma 7", category: "Databases" },
      { name: "PostgreSQL", category: "Databases" },
      { name: "Paystack API", category: "Infrastructure" },
      { name: "TypeScript", category: "Infrastructure" },
    ],
    results: [
      "Bypassed standard Paystack plan restrictions, achieving 100% price customization control",
      "Robust daily cron handling subscription renewals with automatic 3-day retry loops",
      "Secure multi-tenant data isolation using strict tenantId scoping and audit logging",
      "100% automated 30% technical partner revenue splits, saving hours of manual billing logs",
      "Seamless real-time webhook sync tracking payment status updates instantly",
    ],
    industry: "FinTech & SaaS",
  },
  {
    slug: "whatsapp-restaurant-bot",
    title: "Lagos Food — WhatsApp Catalog & Glovo Delivery Bot",
    description:
      "Architected a custom WhatsApp checkout chatbot linked directly to Glovo and PandaGo ODR APIs, enabling fully automated, hands-free delivery rider dispatches.",
    image: "/projects/lagosfood-bot.png",
    tags: ["WhatsApp Cloud API", "Node.js", "Glovo ODR API", "PandaGo API", "Webhooks"],
    link: "/case-studies/whatsapp-restaurant-bot",
    variant: "featured",
    problem:
      "Local fast-food restaurants suffered from high checkout friction on mobile websites and wasted 10-15 minutes on every order manually contacting and coordinating delivery riders after meals were packaged.",
    solution:
      "Designed and deployed an interactive shopping chatbot using the Meta WhatsApp Cloud API. The assistant serves dynamic product catalogs, handles cart additions, and tracks customer preferences. Upon payment verification, the kitchen is notified with an order ticket. When the chef clicks a custom 'Ready' button inside their WhatsApp management thread, a webhook instantly fires to invoke the Glovo or PandaGo On-Demand Delivery API, automatically booking a rider for pickup with zero manual coordination.",
    architecture:
      "WhatsApp Cloud API ↔ Meta Webhooks Router ↔ Node.js Orchestrator ↔ Custom Cart State Engine ↔ Kitchen WhatsApp Notification (with interactive 'Ready' CTA) ↔ Glovo / PandaGo Rider Booking API",
    architectureImage: "/architecture-workflow.png",
    technologies: [
      { name: "WhatsApp Cloud API", category: "Infrastructure" },
      { name: "Node.js", category: "Infrastructure" },
      { name: "Glovo ODR API", category: "Infrastructure" },
      { name: "PandaGo API", category: "Infrastructure" },
      { name: "Webhooks", category: "Infrastructure" },
    ],
    results: [
      "Reduced checkout drop-off rate by 60% compared to traditional web portals",
      "Eliminated 10-15 minutes of manual delivery coordination per order",
      "Hands-free rider dispatch: Glovo couriers arrive within minutes of food preparation",
      "Resilient Meta webhook processing loop ensuring 99.9% uptime",
    ],
    industry: "Hospitality & Logistics",
  },
  {
    slug: "seedsprout-lead-gen",
    title: "SeedSprout — Autonomous B2B Lead Ingestion",
    description:
      "Engineered an autonomous lead generation pipeline in n8n that daily monitors company registers, enriches contact details, and scores profiles using OpenAI.",
    image: "/projects/seedsprout-pipeline.png",
    tags: ["n8n", "Companies House API", "Apollo API", "OpenAI API", "Google Sheets"],
    link: "/case-studies/seedsprout-lead-gen",
    variant: "featured",
    problem:
      "B2B prospecting was severely bottlenecked by manual searches on UK Companies House registers, tedious copy-pasting of profiles, and high outreach costs.",
    solution:
      "Built a self-correcting n8n lead ingestion machine. The pipeline executes cron schedulers to poll the Companies House registry daily for new active incorporations. The retrieved companies are routed to the Apollo API to discover key decision-makers (CEOs, MDs, Founders), enriched with social profiles, and scored using OpenAI for psychographic matching. High-intent qualified leads are then appended directly into the master spreadsheet database and pushed to Slack for immediate outreach.",
    architecture:
      "Scheduled Cron → n8n Core Coordinator → Companies House API → Apollo Contact Enrichment → OpenAI Prospect Profiling → Google Sheets Master Database → Slack Sales Alerts",
    architectureImage: "/architecture-workflow.png",
    technologies: [
      { name: "n8n", category: "Automation Platforms" },
      { name: "Companies House API", category: "Infrastructure" },
      { name: "Apollo API", category: "Infrastructure" },
      { name: "OpenAI API", category: "AI Models" },
      { name: "Google Sheets", category: "Databases" },
    ],
    results: [
      "Scaled prospecting output from ~50 leads/week to over 2,000 highly targeted leads/week",
      "Reduced manual outbound prospecting time to absolute zero",
      "Slashed client acquisition costs by 78% by bypassing external agency lists",
      "Self-healing workflow architecture automatically handles API rate-limits and failures",
    ],
    industry: "Lead Generation & B2B",
  },
  {
    slug: "growthscan-ai-audit",
    title: "GrowthScan — Programmatic AI Lead Auditing Pipeline",
    description:
      "Built an AI-driven auditing engine in n8n and OpenAI that automatically parses company web assets and compiles client-facing growth reports.",
    image: "/projects/growthscan-audit.png",
    tags: ["n8n", "OpenAI (GPT-4o)", "Lead Scoring", "CRM Integration", "JSON Parser"],
    link: "/case-studies/growthscan-ai-audit",
    problem:
      "The sales team spent up to 90 minutes manually researching companies, auditing their SEO/social profiles, and drafting pitch decks, limiting daily outreach velocity.",
    solution:
      "Architected the GrowthScan Audit Engine in n8n. When a prospect submits their intake form, the engine triggers a comprehensive 6-pillar audit: web metadata collection, social presence checking (Facebook/Instagram), contact metrics validation, and SEO scoring. An OpenAI node synthesizes these datasets, scores the company out of 100, outlines critical SEO/conversion quick-wins, pushes sanitized leads directly to cold callers on Google Sheets, and updates Next.js customer reports with clean, escaped JSON.",
    architecture:
      "Next.js Form Intake → n8n Webhook Listener → Web Scraping Node → Social Verification Code → OpenAI Synthesis (6-Pillar scoring) → Google Sheets CRM → Slack Sales Pipeline Alert",
    architectureImage: "/architecture-rag.png",
    technologies: [
      { name: "n8n", category: "Automation Platforms" },
      { name: "OpenAI (GPT-4o)", category: "AI Models" },
      { name: "Google Sheets", category: "Databases" },
      { name: "Next.js API", category: "Infrastructure" },
      { name: "JavaScript / Code Node", category: "Infrastructure" },
    ],
    results: [
      "Reduced report drafting and auditing time from 90 minutes to under 4 seconds per lead",
      "Sanitized and validated contact streams to block bad form inputs and double spaces",
      "Auto-identified missing phone numbers, triggering specific outreach strategies",
      "Generated clean, guaranteed JSON formatting via structured OpenAI prompt escaping",
    ],
    industry: "AI & MarTech",
  },
  {
    slug: "dr-jennifer-clinic",
    title: "Dr Jennifer's Clinic — Booking & Reminder Automations",
    description:
      "Created a complete appointment booking lifecycle automation using Cal.com and n8n, saving 10+ hours a week and significantly reducing patient no-shows.",
    image: "/dr-jennifer-workflow.png",
    tags: ["n8n", "Cal.com", "Voice AI", "Google Sheets", "Gmail API"],
    link: "/case-studies/dr-jennifer-clinic",
    problem:
      "Dr Jennifer's clinic lost 10+ hours per week to manual appointment bookings, cancellations, waitlist tracking, and follow-ups. Patient no-shows were high due to inconsistent reminder scheduling.",
    solution:
      "Built a unified n8n automation ecosystem integrated with Cal.com. The system automatically syncs bookings to Google Sheets, triggers Gmail notifications, and manages a paperless waitlist. The system runs multi-tiered reminders (48h, 24h, 2h) and initiates an automated Voice AI confirmation call 20 hours prior, immediately recording patient responses back to the clinic's database.",
    architecture:
      "Cal.com Webhook → n8n Event Router → Google Sheets CRM → Scheduled Cron Reminders (48h/24h/2h) → Voice AI Confirmation Call → Automated Waitlist Booking Notifications",
    architectureImage: "/architecture-workflow.png",
    technologies: [
      { name: "n8n", category: "Automation Platforms" },
      { name: "Cal.com", category: "Automation Platforms" },
      { name: "Voice AI", category: "AI Models" },
      { name: "Google Sheets", category: "Databases" },
      { name: "Gmail API", category: "Automation Platforms" },
    ],
    results: [
      "Eliminated 10+ hours/week of manual patient scheduling administration",
      "Multi-tiered reminder systems reduced patient no-shows significantly",
      "Autonomous waitlist matching automatically notifies waiting patients of cancellations",
      "Voice AI confirmation responses logged directly to the spreadsheet database",
    ],
    industry: "Healthcare",
  },
];

// Legacy aliases for backward compatibility
export const projects = caseStudies.slice(0, 3);
export const automationCaseStudies = caseStudies;

// ─── TECH STACK (CATEGORIZED) ───────────────────────────
export const techStackCategories = [
  {
    category: "AI Models",
    tools: [
      { id: "ai-1", name: "OpenAI", icon: OpenAIIcon },
      { id: "ai-2", name: "Claude", icon: ClaudeIcon },
      { id: "ai-3", name: "LangChain", icon: LangchainIcon },
    ],
  },
  {
    category: "Automation Platforms",
    tools: [
      { id: "auto-1", name: "n8n", icon: N8nIcon },
      { id: "auto-2", name: "Zapier", icon: ZapierIcon },
      { id: "auto-3", name: "Webhooks", icon: WebhookIcon },
      { id: "auto-4", name: "API Integration", icon: ApiIcon },
    ],
  },
  {
    category: "Infrastructure",
    tools: [
      { id: "infra-1", name: "Next.js", icon: NextjsIcon },
      { id: "infra-2", name: "Node.js", icon: NodejsIcon },
      { id: "infra-3", name: "TypeScript", icon: TypeScriptIcon },
      { id: "infra-4", name: "Python", icon: PythonIcon },
      { id: "infra-5", name: "React", icon: ReactIcon },
    ],
  },
  {
    category: "Databases",
    tools: [
      { id: "db-1", name: "Supabase", icon: SupabaseIcon },
      { id: "db-2", name: "Firebase", icon: FirebaseIcon },
      { id: "db-3", name: "MySQL", icon: MySQLIcon },
      { id: "db-4", name: "Google Sheets", icon: GoogleSheetsIcon },
    ],
  },
];

// Legacy flat arrays for backward compat
export const fullStackTools = techStackCategories
  .flatMap((c) => c.tools);
export const automationTools = techStackCategories
  .filter((c) => c.category === "Automation Platforms" || c.category === "AI Models")
  .flatMap((c) => c.tools);

// ─── SERVICES → SOLUTIONS (HOMEPAGE CARDS) ──────────────
export const services = [
  {
    icon: MVPIcon,
    title: "AI Customer Support Agents",
    description:
      "Deploy intelligent chatbots that handle 85% of customer inquiries automatically. Available 24/7 across WhatsApp, web, and email — so your team focuses on complex issues only.",
  },
  {
    icon: AutomationIcon,
    title: "Workflow Automation Systems",
    description:
      "Eliminate 10+ hours/week of manual tasks. We connect your tools into self-running systems that handle booking, follow-ups, data entry, and reporting on autopilot.",
  },
  {
    icon: DesignIcon,
    title: "AI Knowledge Assistants",
    description:
      "Build AI assistants that answer questions using your actual business data. Powered by RAG pipelines, they give accurate, source-backed responses — not hallucinations.",
  },
  {
    icon: MVPIcon,
    title: "Cloud Infrastructure for AI",
    description:
      "Design and deploy the cloud architecture your AI applications need to run reliably at scale. From n8n Cloud to AWS, we build infrastructure that doesn't break.",
  },
];

// ─── WHY WORK WITH US ───────────────────────────────────
export const whyWorkWithMe = [
  {
    icon: Rocket,
    title: "Speed Without Shortcuts",
    description: "Fast execution, zero compromises on quality. You get both.",
  },
  {
    icon: Rocket,
    title: "Revenue-First Thinking",
    description: "I prioritize automations that save money and generate leads, not just look impressive.",
  },
  {
    icon: Rocket,
    title: "Fullstack + AI Fluency",
    description: "I build web apps and intelligent workflows that work together seamlessly.",
  },
  {
    icon: Rocket,
    title: "Clear, Human Communication",
    description: "Weekly updates in plain English. No jargon, no surprises.",
  },
];

// ─── STATS ──────────────────────────────────────────────
export const stats = [
  {
    icon: Rocket,
    value: "10+",
    label: "Systems Delivered",
    subtitle: "Across logistics, fintech, health, and B2B",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    value: "200+",
    label: "Hours Saved Weekly",
    subtitle: "For my combined active clients",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    value: "95%",
    label: "Outbound Automation",
    subtitle: "Lead pipeline efficiency rate",
    bgColor: "bg-orange-500/10",
  },
];

// ─── PROCESS STEPS (SIMPLIFIED METHODOLOGY) ─────────────
export const processSteps = [
  {
    number: 1,
    title: "Strategy Session",
    description:
      "I audit your current workflows, identify the biggest time-wasters, and map out exactly which processes to automate first. You leave with a clear automation roadmap and realistic ROI projections.",
  },
  {
    number: 2,
    title: "Automation Architecture",
    description:
      "I design the technical blueprint — which tools to connect, where AI fits in, and how data flows between systems. You see the architecture before any code gets written.",
  },
  {
    number: 3,
    title: "System Implementation",
    description:
      "I build in weekly sprints with regular demos. You see progress constantly, not just at launch. Workflows are tested rigorously against edge cases before going live.",
  },
  {
    number: 4,
    title: "Deployment & Monitoring",
    description:
      "I deploy your automation systems and monitor performance closely. If issues arise, I fix them fast. Your systems get smarter over time as I optimize based on real usage data.",
  },
];

// ─── FAQS ───────────────────────────────────────────────
export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "I work with businesses across logistics, SaaS, B2B outbound, and medical clinics. If your team spends hours on repetitive tasks, manual data entry, or lead follow-ups — I can help. My automation systems are industry-agnostic; the principles apply everywhere.",
  },
  {
    question: "How long does it take to build an automation system?",
    answer:
      "Most automation projects take 1-4 weeks from strategy session to deployment. Simple workflows (like appointment reminders) can be live in days, while complex multi-workflow systems (like a full billing database sync) take closer to 4-6 weeks. You'll see progress every week.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I build with NestJS, Prisma, n8n, OpenAI, Python, Next.js, and databases like PostgreSQL and Supabase. For automation, I integrate with Cal.com, Meta APIs, and various custom logistic hooks. I choose tech based on what makes sense for your project.",
  },
  {
    question: "Do you stick around after deployment?",
    answer:
      "Yes. I don't just deploy and vanish. I offer ongoing monitoring, optimization, and support. Automation systems need tuning as your business processes evolve. Whether you need maintenance or want to expand, I'm here long-term.",
  },
  {
    question: "How much does automation cost?",
    answer:
      "It depends on scope, complexity, and number of workflows. I offer flexible pricing including fixed-price projects and monthly retainers. After understanding your requirements in a strategy session, I provide a detailed quote with transparent pricing.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All data is encrypted in transit and at rest. APIs are locked down with proper authentication. Access is role-controlled. If you're in a regulated industry, I ensure compliance requirements are met.",
  },
];

// ─── AUTOMATION-SPECIFIC STEPS (LEGACY COMPAT) ──────────
export const automationSteps = processSteps;

export const automationCaseStudyCards = caseStudies;

export const automationServices = [
  {
    icon: AutomationIcon,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive manual tasks. We build systems handling your busywork automatically so you can focus on what actually grows the business.",
  },
  {
    icon: AutomationIcon,
    title: "AI Agents",
    description:
      "Deploy AI assistants handling complex tasks for you. From customer support to data analysis, these agents work 24/7 without breaks or errors.",
  },
  {
    icon: AutomationIcon,
    title: "Tool Integration",
    description:
      "Connect your apps so they talk to each other seamlessly. Stop copying data between systems or switching tabs constantly.",
  },
  {
    icon: AutomationIcon,
    title: "Smart Chatbots",
    description:
      "Build chatbots that understand context and nuance. They handle common questions instantly, qualify leads, and escalate only when necessary.",
  },
  {
    icon: AutomationIcon,
    title: "Data Collection",
    description:
      "Automatically gather data from websites and enrich your database. Get information you need without hiring a team to do it manually.",
  },
  {
    icon: AutomationIcon,
    title: "System Monitoring",
    description:
      "Receive alerts when something breaks before it becomes a crisis. Automated monitoring catches issues early and fixes simple problems autonomously.",
  },
  {
    icon: AutomationIcon,
    title: "Voice AI",
    description:
      "Add voice capabilities to your products. From voice commands to automated phone calls, make services more accessible and hands-free.",
  },
  {
    icon: AutomationIcon,
    title: "AI Content Generation",
    description:
      "Create high-quality content at scale using optimized AI prompts. Consistent tone, accurate outputs, less time editing.",
  },
];

export const automationFaqs = [
  {
    question: "What can be automated in my business?",
    answer:
      "Almost any repetitive task following a pattern. Customer support, lead follow-ups, data entry, content posting, invoice processing, scheduling, CRM updates, reporting. During our call, we'll walk through your workflows and identify the biggest time-wasters automation can eliminate.",
  },
  {
    question: "How is AI automation different from regular automation?",
    answer:
      "Regular automation follows strict instructions like a simple robot. AI automation understands context, handles unpredictable scenarios, and learns from patterns. Instead of just moving data around, it reads customer messages, writes personalized responses, and makes decisions based on what it sees.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Time savings start immediately once automation goes live. Most clients hit positive ROI within 3-6 months as the system handles increasing volume. Full payback typically happens in 6-12 months.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all. We build everything with user-friendly dashboards so your team can monitor and adjust without touching code. You'll get training on using the system, and we're available for ongoing support.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest. APIs are locked down with proper authentication. Access is controlled based on roles. If you're in a regulated industry, we ensure compliance with GDPR, HIPAA, or other requirements.",
  },
  {
    question: "Can this work with my current tools?",
    answer:
      "Almost certainly. We integrate with popular platforms like Salesforce, HubSpot, Slack, Google Workspace, Stripe, Shopify, and hundreds more. If you have proprietary systems, we build custom integrations.",
  },
];
