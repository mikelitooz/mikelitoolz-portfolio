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
      "A beauty clinic deployed our WhatsApp AI agent and reduced support tickets by 60% while handling bookings autonomously after hours.",
    slug: "ai-customer-support-agents",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Systems",
    description:
      "Eliminate repetitive tasks by connecting your tools into self-running systems. From appointment booking to invoice processing, we automate the grind.",
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
      "Design and deploy the cloud architecture your AI applications need to run reliably at scale. From n8n Cloud to AWS, we build infrastructure that doesn't break at 2 AM.",
    useCase:
      "We architected a multi-workflow automation platform on n8n Cloud handling 500+ daily operations for a real estate agency.",
    slug: "cloud-infrastructure",
  },
];

// ─── CASE STUDIES ───────────────────────────────────────
export const caseStudies: CaseStudy[] = [
  {
    slug: "dr-jennifer-clinic",
    title: "Dr Jennifer's Clinic — Appointment Automation",
    description:
      "Built a complete appointment lifecycle automation for a medical clinic, replacing manual booking with an intelligent system featuring automated reminders, waitlist management, and voice AI calls.",
    image: "/dr-jennifer-workflow.png",
    tags: ["n8n", "Cal.com", "Voice AI", "Google Sheets"],
    link: "/case-studies/dr-jennifer-clinic",
    variant: "featured",
    problem:
      "Dr Jennifer's clinic was losing 10+ hours per week to manual appointment management. Staff manually entered bookings from Google Forms, had no automated way to handle cancellations, and frequently missed filling cancelled slots. Patients were no-showing at alarming rates because reminder systems were inconsistent — sometimes a text, sometimes nothing. The waitlist was managed on paper, meaning freed slots often went unfilled even when patients were waiting.",
    solution:
      "We built a unified n8n workflow that handles the complete appointment lifecycle through Cal.com integration. When a patient books, the system automatically logs the appointment to Google Sheets, sends a confirmation email, and alerts clinic staff. For cancellations and reschedules, the system instantly updates the appointment status, triggers the waitlist notification engine to offer the freed slot to waiting patients, and alerts staff via Gmail. The reminder engine runs on a scheduled cron job, sending automated reminders at 48 hours, 24 hours, and 2 hours before each appointment. At the 20-hour mark, a Voice AI agent calls the patient to confirm attendance, with the call summary and action taken logged automatically to the spreadsheet.",
    architecture:
      "Cal.com Webhook → n8n Event Router (BOOKING_CREATED / CANCELLED / RESCHEDULED) → Google Sheets (appointment database) → Gmail (staff alerts) → HTTP Webhook (waitlist notification trigger) → Scheduled Cron (reminder engine: 48h/24h/2h) → Voice AI Agent (20h confirmation call) → Google Sheets (status updates + call logs)",
    architectureImage: "/architecture-workflow.png",
    technologies: [
      { name: "n8n", category: "Automation Platforms" },
      { name: "Cal.com", category: "Automation Platforms" },
      { name: "Google Sheets", category: "Databases" },
      { name: "Gmail", category: "Automation Platforms" },
      { name: "Voice AI", category: "AI Models" },
      { name: "Webhooks", category: "Infrastructure" },
    ],
    results: [
      "Eliminated 10+ hours/week of manual booking administration",
      "Zero manual data entry — all appointments auto-logged to Google Sheets",
      "3-tier automated reminder system (48h, 24h, 2h) reduced no-shows significantly",
      "Voice AI confirmation calls at 20h mark with automated action logging",
      "Waitlist patients automatically notified when slots free up from cancellations",
      "Staff receive instant email alerts for all booking events",
    ],
    industry: "Healthcare",
  },
  {
    slug: "marcus-real-estate",
    title: "Marcus Real Estate — Full CRM Automation",
    description:
      "Designed a 4-workflow automation system for a real estate agency covering property viewing scheduling, AI-powered recommendations, automated follow-up sequences, and market report generation.",
    image: "/rag-assistant.jpg",
    tags: ["n8n", "Calendly", "OpenAI", "Google Sheets"],
    link: "/case-studies/marcus-real-estate",
    variant: "featured",
    problem:
      "Marcus Real Estate was drowning in manual lead management. Agents spent hours scheduling property viewings, sending confirmations, and following up with leads. There was no system to match properties to buyer preferences, follow-up emails were inconsistent, and market reports were assembled manually each week. Leads went cold because the response time between inquiry and first contact was too slow.",
    solution:
      "We built a 4-workflow automation ecosystem on n8n Cloud:\n\n1. **Viewing Scheduler**: Calendly triggers automatically create Google Calendar events, update the CRM (Google Sheets), and send dual confirmation emails — one to the client and one to the agent. A reminder engine runs every 6 hours, calculating 24h and 2h reminders and sending them to both parties.\n\n2. **Property Recommendations**: An AI-powered matching engine analyzes lead preferences (neighborhood, price range, beds, baths, timeline) against the property database and generates personalized property recommendations via OpenAI.\n\n3. **Follow-Up Sequences**: Automated email sequences triggered by lead status changes. New leads get a welcome sequence, viewing-scheduled leads get preparation emails, and cold leads get re-engagement campaigns.\n\n4. **Market Report Generator**: OpenAI analyzes current listings and market data to generate weekly market insight reports sent automatically to active leads.",
    architecture:
      "Calendly Trigger → Parse Booking → Google Calendar Event → Google Sheets CRM Update → Gmail (Client Confirmation + Agent Notification) → Scheduled Cron (6h reminder engine) → Gmail (24h/2h reminders)\n\nGoogle Sheets (Lead Data) → OpenAI (Property Matching AI) → Gmail (Personalized Recommendations)\n\nGoogle Sheets (Lead Status Change) → n8n Router → Gmail (Follow-Up Sequences)\n\nScheduled Cron (Weekly) → Google Sheets (Listings) → OpenAI (Market Analysis) → Gmail (Market Reports)",
    architectureImage: "/architecture-workflow.png",
    technologies: [
      { name: "n8n Cloud", category: "Automation Platforms" },
      { name: "Calendly", category: "Automation Platforms" },
      { name: "OpenAI", category: "AI Models" },
      { name: "Google Calendar", category: "Automation Platforms" },
      { name: "Google Sheets", category: "Databases" },
      { name: "Gmail", category: "Automation Platforms" },
    ],
    results: [
      "Automated viewing scheduling with dual confirmations (client + agent)",
      "24h and 2h reminder system for both clients and agents",
      "AI-powered property recommendations matched to buyer preferences",
      "Automated follow-up email sequences based on lead status",
      "Weekly AI-generated market reports sent to active leads",
      "CRM automatically updated at every touchpoint — zero manual data entry",
    ],
    industry: "Real Estate",
  },
  {
    slug: "headhunter-agent",
    title: "AI-Powered Nursing Recruitment Automation",
    description:
      "Designed an intelligent n8n workflow for a healthcare recruitment firm that automates candidate scraping, psychographic avatar classification, and personalized outreach.",
    image: "/headhunter-agent.png",
    tags: ["n8n", "PhantomBuster", "OpenAI", "Gmail API"],
    link: "/case-studies/headhunter-agent",
    variant: "featured",
    problem:
      "NextLTC, a nurse-owned recruitment firm, faced a critical scaling bottleneck. Prospecting was manual, taking 15+ hours a week to search LinkedIn and state directories, limiting outreach to ~50 candidates. Furthermore, all leads were treated the same with generic outreach yielding low response rates (~3%). They needed a way to automatically filter for specific regulatory constraints (compact license states, SNF experience) while standing out to burned-out Directors of Nursing.",
    solution:
      "I built an intelligent n8n workflow that automates the entire recruitment pipeline with psychology-driven segmentation.\n\nThe system integrates multiple data sources, using PhantomBuster to scrape LinkedIn and pulling from the Texas HHS Nursing Facility Directory (1,179 facilities). A 'Gatekeeper Filter' automatically disqualifies acute care specialists or those without compact licenses. Qualified candidates then pass through an 'Avatar Classification' engine that categorizes them into psychological profiles (e.g., Turnaround Specialist, MDS Expert, Interim Fixer, Passive Burnout). Finally, the system triggers persona-matched email templates optimized for the candidate's specific mindset.",
    architecture:
      "PhantomBuster / State Directories → n8n Webhook → Data Normalizer → Gatekeeper Filter (Disqualification) → OpenAI (Avatar Classification) → Routing Logic → Gmail API (Persona-Matched Templates)",
    architectureImage: "/architecture-agent.png",
    technologies: [
      { name: "n8n", category: "Automation Platforms" },
      { name: "PhantomBuster", category: "Infrastructure" },
      { name: "OpenAI", category: "AI Models" },
      { name: "Google Sheets", category: "Databases" },
    ],
    results: [
      "Scaled weekly outreach volume from ~50 to 500+ candidates",
      "Slashed manual prospecting time from 15+ hours/week to <1 hour/week",
      "Increased outreach response rates from 3% to 12-18%",
      "Expanded candidate database to 1,179 TX facilities + LinkedIn matches",
      "Implemented a 4-tier psychological avatar classification system for hyper-personalized messaging",
    ],
    industry: "Healthcare Recruitment",
  },
  {
    slug: "real-estate-rag-assistant",
    title: "Real Estate RAG Assistant",
    description:
      "Built a Secure Multi-Channel Lead Ingestion Engine using a RAG pipeline and Pinecone vector database that answers tenant questions instantly and qualifies leads before human intervention.",
    image: "/rag-assistant.png",
    tags: ["n8n", "Pinecone", "RAG", "AI Agents", "OpenAI"],
    link: "/case-studies/real-estate-rag-assistant",
    problem:
      "A property management firm was overwhelmed with tenant inquiries across multiple channels. Response times averaged 4-6 hours, qualified leads were slipping through, and agents couldn't keep up with the volume of repetitive questions about listings, pricing, and availability.",
    solution:
      "We built a RAG (Retrieval-Augmented Generation) pipeline powered by Pinecone vector database that ingests property data, lease terms, and FAQ documents. The AI assistant answers tenant questions instantly with accurate, source-backed responses. It qualifies leads by asking targeted questions about budget, timeline, and preferences before routing hot prospects to human agents.",
    architecture:
      "Document Ingestion → Embedding Generation → Pinecone Vector Store → Query Processing → RAG Pipeline → Response Generation → Lead Qualification Router → CRM Update",
    architectureImage: "/architecture-rag.png",
    technologies: [
      { name: "Python", category: "Infrastructure" },
      { name: "Pinecone", category: "Databases" },
      { name: "OpenAI", category: "AI Models" },
      { name: "LangChain", category: "AI Models" },
    ],
    results: [
      "Response time reduced from hours to under 2 minutes",
      "AI handles 85% of inquiries without human intervention",
      "Automated lead qualification before agent handoff",
      "Multi-channel support across web, email, and chat",
    ],
    industry: "Real Estate",
  },
  {
    slug: "whatsapp-booking-agent",
    title: "AI WhatsApp Shopping Assistant",
    description:
      "Built an AI-powered automated WhatsApp shopping assistant with NestJS, Prisma, and OpenAI. The agent handles customer inquiries, recommends beauty products, and facilitates the shopping experience.",
    image: "/chat-support.png", // Fallback image
    video: "/whatsapp-agent-demo.mp4",
    tags: ["NestJS", "WhatsApp API", "OpenAI", "Prisma"],
    link: "/case-studies/whatsapp-booking-agent",
    problem:
      "A beauty store lacked a scalable way to handle out-of-hours customer inquiries and provide personalized product recommendations. Customers wanted immediate answers about product availability, skin compatibility, and pricing through their preferred channel: WhatsApp.",
    solution:
      "Deployed 'Glow Beauty', an intelligent WhatsApp AI agent built specifically to serve as a 24/7 store assistant. The system uses OpenAI to understand complex natural language queries about beauty products, while a Prisma-managed SQLite database acts as the product knowledge base. It dynamically searches inventory and recommends the right products directly in the chat.",
    architecture:
      "WhatsApp Cloud API ↔ NestJS Backend ↔ OpenAI (Intent & RAG) ↔ Prisma (SQLite Product Knowledge Base)",
    architectureImage: "/architecture-agent.png",
    technologies: [
      { name: "NestJS", category: "Infrastructure" },
      { name: "OpenAI", category: "AI Models" },
      { name: "Prisma", category: "Databases" },
      { name: "WhatsApp API", category: "Infrastructure" },
    ],
    results: [
      "Enabled 24/7 autonomous bookings and product support",
      "Eliminated lost leads from off-hour messages",
      "Reduced staff time spent on WhatsApp by 80%",
      "Drove a 40% increase in WhatsApp-initiated sales",
    ],
    industry: "Hospitality & E-Commerce",
  },
  {
    slug: "the-weekend-lagos-chatbot",
    title: "Lagos Weekender — WhatsApp AI Concierge",
    description:
      "Developed a WhatsApp AI Concierge for '@thelagosweekender', answering inquiries about Lagos activities, venues, and pricing using a Pinecone vector database and an intelligent hallucination guard.",
    image: "/lagos-weekender.png", // Fallback image
    video: "/weekender-demo.mp4",
    tags: ["n8n", "WhatsApp API", "Pinecone", "OpenAI"],
    link: "/case-studies/the-weekend-lagos-chatbot",
    problem:
      "The Lagos Weekender team was overwhelmed by direct messages on WhatsApp asking for venue recommendations, pricing, opening hours, and booking requirements across Lagos. They needed a way to automate responses while ensuring the AI never halucinated incorrect ticket prices or venue details.",
    solution:
      "We built a robust WhatsApp AI assistant using n8n Cloud and the Meta Cloud/24 Manager APIs. The system features a custom data ingestion pipeline that syncs their spreadsheet database into a Pinecone vector store (LagosWeekenderKB). \n\nWhen a user messages, the OpenAI agent queries this database to provide hyper-specific, budget-matched itineraries and venue details. To ensure 100% pricing accuracy, we engineered a custom JavaScript 'Hallucination Guard' that intercepts the AI's response, detects any hedged language around prices (e.g., 'might', 'around', 'up to'), and automatically replaces it with a safe fallback ('Contact venue for exact pricing'). Furthermore, it utilizes Supabase Postgres for persistent chat memory, allowing the bot to maintain context across long weekend planning conversations.",
    architecture:
      "Data Pipeline: Google Sheets → Document Splitter → OpenAI Embeddings → Pinecone Vector Store\n\nChat Pipeline: WhatsApp Webhook → Message Extractor → OpenAI Agent (RAG + Supabase Memory) → Hallucination Guard (Custom JS) → Format Router → Meta Graph API Reply",
    architectureImage: "/architecture-rag.png",
    technologies: [
      { name: "n8n Cloud", category: "Automation Platforms" },
      { name: "OpenAI", category: "AI Models" },
      { name: "Pinecone", category: "Databases" },
      { name: "Supabase / Postgres", category: "Databases" },
      { name: "WhatsApp API", category: "Infrastructure" },
    ],
    results: [
      "Custom 'Hallucination Guard' ensures 0% hallucinated pricing to users",
      "Persistent session memory maintains conversation context across days",
      "Spreadsheet-to-Pinecone sync keeps the agent's knowledge constantly updated",
      "Seamless integration with Meta Cloud API for instant WhatsApp replies",
    ],
    industry: "Events & Lifestyle",
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
    description: "We prioritize automations that save money and generate leads, not just look impressive.",
  },
  {
    icon: Rocket,
    title: "Fullstack + AI Fluency",
    description: "We build web apps and intelligent workflows that work together seamlessly.",
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
    value: "6+",
    label: "Projects Delivered",
    subtitle: "Across healthcare, real estate, and e-commerce",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    value: "100+",
    label: "Hours Saved Weekly",
    subtitle: "For our combined clients",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    value: "85%",
    label: "Inquiry Automation",
    subtitle: "Average AI resolution rate",
    bgColor: "bg-orange-500/10",
  },
];

// ─── PROCESS STEPS (SIMPLIFIED METHODOLOGY) ─────────────
export const processSteps = [
  {
    number: 1,
    title: "Strategy Session",
    description:
      "We audit your current workflows, identify the biggest time-wasters, and map out exactly which processes to automate first. You leave with a clear automation roadmap and realistic ROI projections.",
  },
  {
    number: 2,
    title: "Automation Architecture",
    description:
      "We design the technical blueprint — which tools to connect, where AI fits in, and how data flows between systems. You see the architecture before any code gets written.",
  },
  {
    number: 3,
    title: "System Implementation",
    description:
      "We build in weekly sprints with regular demos. You see progress constantly, not just at launch. Workflows are tested rigorously against edge cases before going live.",
  },
  {
    number: 4,
    title: "Deployment & Monitoring",
    description:
      "We deploy your automation systems and monitor performance closely. If issues arise, we fix them fast. Your systems get smarter over time as we optimize based on real usage data.",
  },
];

// ─── FAQS ───────────────────────────────────────────────
export const faqs = [
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with businesses across healthcare, real estate, e-commerce, and professional services. If your team spends hours on repetitive tasks, manual data entry, or lead follow-ups — we can help. Our automation systems are industry-agnostic; the principles apply everywhere.",
  },
  {
    question: "How long does it take to build an automation system?",
    answer:
      "Most automation projects take 1-4 weeks from strategy session to deployment. Simple workflows (like appointment reminders) can be live in days, while complex multi-workflow systems (like a full CRM automation) take closer to 4-6 weeks. You'll see progress every week.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with n8n, OpenAI, Claude, Python, Next.js, and cloud platforms like Supabase and AWS. For automation, we use Zapier, Cal.com, Calendly, and custom API integrations. We choose tech based on what makes sense for your project, not what's trendy.",
  },
  {
    question: "Do you stick around after deployment?",
    answer:
      "Yes. We don't just deploy and vanish. We offer ongoing monitoring, optimization, and support. Automation systems need tuning as your business evolves. Whether you need maintenance or want to expand the system, we're here long-term.",
  },
  {
    question: "How much does automation cost?",
    answer:
      "It depends on scope, complexity, and number of workflows. We offer flexible pricing including fixed-price projects and monthly retainers. After understanding your requirements in a strategy session, we provide a detailed quote with transparent pricing. Most projects range from a few thousand to mid five figures.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. All data is encrypted in transit and at rest. APIs are locked down with proper authentication. Access is role-controlled. If you're in a regulated industry (healthcare, finance), we ensure GDPR, HIPAA, or other compliance requirements are met.",
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
