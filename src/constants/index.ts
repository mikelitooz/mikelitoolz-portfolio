import {
  AirbillsImage,
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
  KayiImage,
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
import { Search, Palette, Cog, FlaskConical, Rocket } from "lucide-react";

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

export const socialLinks = [
  { name: "Twitter / X", url: "https://x.com/izzydev_" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/israelchukwudi/" },
  { name: "Telegram", url: "https://www.instagram.com/izzydev_/" },
  { name: "YouTube", url: "https://www.youtube.com/@Izzydev_1" },
  { name: "GitHub", url: "https://github.com/chiizzy1" },
  { name: "Email", url: "mailto:izzydevbuilds@gmail.com" },
];

export const services = [
  {
    icon: MVPIcon,
    title: "MVP Development",
    description:
      "Your first version doesn't need every feature. It needs the ones that prove your idea works. I build MVPs that test assumptions fast and iterate based on what real users actually do, not what surveys say they'll do.",
  },
  {
    icon: AutomationIcon,
    title: "AI Automation",
    description:
      "If you're spending hours on data entry, follow-ups, or content generation, you're bleeding time and money. I automate the repetitive tasks so your team can focus on decisions that actually move the needle.",
  },
  {
    icon: DesignIcon,
    title: "UI/UX Design",
    description:
      "A beautiful interface that confuses users is useless. I design for clarity first, aesthetics second. If someone has to think for more than 5 seconds, I redesign it until they don't.",
  },
];

export const projects = [
  {
    title: "AirbillsPay",
    description:
      "The founder's users were stuck using multiple, unreliable apps just to pay for airtime, data, and TV. I Built a single, high-performance platform to centralize it all. Now, a 10-minute, high-friction chore is a 30-second tap. The service went from fragmented to trusted, capturing users who previously dropped off.",
    image: AirbillsImage,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    link: "https://app.airbillspay.com/",
    variant: "featured" as const,
  },
  {
    title: "Kayi Digital Bank",
    description:
      "The founders needed to capture Nigeria's unbanked market and high-volume diaspora remittances, but lacked a unified platform. Built a full-featured digital bank and 'super app' from the ground up. This MVP gave them a secure, all-in-one tool for payments, wallets, and remittances, turning a complex vision into a market-ready product.",
    image: KayiImage,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    link: "https://www.kayi.ng/",
    variant: "featured" as const,
  },
  {
    title: "SaaS Analytics Dashboard",
    description:
      "Founder was drowning in Google Analytics trying to understand what users cared about. Built a dashboard tracking 5 key metrics. Now they check it every morning instead of avoiding analytics entirely. Decision-making went from guesswork to data-driven.",
    image: "/saas-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    link: "",
    variant: "featured" as const,
  },
];

export const whyWorkWithMe = [
  {
    icon: Rocket,
    title: "Speed Without Shortcuts",
    description: "Fast execution, zero compromises on quality. You get both.",
  },
  {
    icon: Rocket,
    title: "Revenue-First Thinking",
    description: "I prioritize features that get users paying, not just looking.",
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

export const stats = [
  {
    icon: Rocket,
    value: "10+",
    label: "Projects Completed",
    subtitle: "Successfully delivered",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Rocket,
    value: "6+",
    label: "Happy Clients",
    subtitle: "Satisfied customers",
    bgColor: "bg-teal-500/10",
  },
  {
    icon: Rocket,
    value: "100+",
    label: "Hours Saved",
    subtitle: "Estimated hours automated for clients",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Rocket,
    value: "3+",
    label: "Years of Experience",
    subtitle: "Professional expertise",
    bgColor: "bg-orange-500/10",
  },
];

export const processSteps = [
  {
    number: 1,
    title: "Discovery Call",
    description:
      "We talk through your vision, goals, and constraints. I ask pointed questions to figure out what you actually need versus what sounds impressive. You'll leave the call with clarity on next steps and a realistic timeline.",
    icon: Search,
  },
  {
    number: 2,
    title: "Design & Planning",
    description:
      "I create wireframes and a technical roadmap so you see exactly what we're building before any code gets written. This prevents scope creep, misalignment, and expensive surprises down the road.",
    icon: Palette,
  },
  {
    number: 3,
    title: "Build & Iterate",
    description:
      "I build in weekly sprints with regular demos and feedback loops. You see progress constantly, not just at launch. If priorities shift, we adjust quickly without derailing the entire project.",
    icon: Cog,
  },
  {
    number: 4,
    title: "Test & Polish",
    description:
      "I test thoroughly across devices and browsers to catch bugs before users do. Security, performance, and usability all get attention so your product feels professional, not rushed.",
    icon: FlaskConical,
  },
  {
    number: 5,
    title: "Launch & Support",
    description:
      "I deploy your product and monitor the first few days closely. If issues arise or you need guidance on next steps, I'm here. Your success matters beyond launch day.",
    icon: Rocket,
  },
];

export const faqs = [
  {
    question: "What is an MVP and why do I need one?",
    answer:
      "An MVP is the fastest way to test if your idea solves a real problem. Instead of spending months building every feature you imagine, you launch with core functionality, watch how real users behave, and iterate from there. It's about validation first, perfection later. Most successful products started ugly and improved based on feedback.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take 1-4 weeks from start to launch. Simple concepts with basic features can be faster, while more complex apps with multiple integrations might take closer to 6 weeks. You'll see progress every week, not just at the end. During our first call, I'll give you a realistic timeline based on what you need.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I build with modern, reliable tools like Next.js, React, TypeScript, Node.js, and databases like PostgreSQL or Supabase. For automation, I use OpenAI, Claude, Zapier, and N8n. I choose tech based on what makes sense for your project, not what's trendy. The goal is maintainable code that won't become a nightmare to scale.",
  },
  {
    question: "Do you stick around after launch?",
    answer:
      "Yes. I don't just deliver code and vanish. I offer ongoing support for bug fixes, monitoring, and updates as you grow. Whether you need occasional maintenance or a long-term development partner, I'm flexible. Your success after launch matters to me.",
  },
  {
    question: "How much does an MVP cost?",
    answer:
      "It depends on scope, complexity, and timeline. I offer flexible pricing including fixed-price projects and hourly rates. After understanding your requirements, I'll provide a detailed quote with transparent pricing and zero hidden costs. Most MVPs range from a few thousand to mid five figures.",
  },
];

export const automationSteps = [
  {
    number: 1,
    title: "Understand Your Workflow",
    description:
      "I walk through your current processes to identify what's draining your time. We pinpoint tasks ready for automation and calculate how many hours you'll reclaim each week.",
    icon: Rocket,
  },
  {
    number: 2,
    title: "Design the System",
    description:
      "I map out how the automation will work, connecting your existing tools and building custom solutions where needed. You see the plan before anything goes live.",
    icon: Rocket,
  },
  {
    number: 3,
    title: "Deploy & Optimize",
    description:
      "I set everything up, test rigorously, and monitor performance. As your business grows, I refine the automation to keep it running smoothly and saving you time.",
    icon: Rocket,
  },
];

export const automationCaseStudies = [
  {
    title: "AI Customer Support",
    description:
      "Built AI chatbot handling 85% of customer questions automatically. Support team now focuses only on complex issues. Ticket volume dropped 60%, response time under 2 minutes.",
    image: "/customer-support-ai.jpg",
    tags: ["OpenAI", "Python", "Zapier"],
    link: "https://youtu.be/YwFi7QV7ug4?si=1NlV2bZG3666Ug0o",
  },
  {
    title: "Appointment Booking Workflow",
    description:
      "A clinic was losing 10+ hours/week (est. $1,500/mo) to manual booking entry from Google Forms and losing revenue from unfilled cancellations. I Replaced their broken system with a unified n8n workflow. Now, bookings are synced instantly and cancellations automatically trigger the waitlist, recovering lost revenue and saving all admin time.",
    image: ReminderImage,
    tags: ["n8n", "Cal.com", "Google Sheets"],
    link: "https://www.youtube.com/watch?v=F4cqWnT_C4A&list=PL_eMcrNUJ-Q1TwPAf8CGItIIQMzN6tap1&pp=gAQB",
  },
  {
    title: "AI Content Generator",
    description:
      "Marketing team could write 5 blog posts per month but needed 20. Built an AI tool matching their brand voice. They now edit drafts instead of staring at blank pages. Last month: 18 posts published, zero all-nighters.",
    image: "/ai-content-generator.jpg",
    tags: ["n8n", "OpenAI", "Notion"],
    link: "",
  },
  {
    title: "Project Management Tool",
    description:
      "Team spent 2 hours weekly in planning meetings discussing dependencies. Built AI-powered workspace suggesting what to work on next based on task analysis. Meetings dropped to 30 minutes. Shipping speed increased 40%.",
    image: "/task-management-board.png",
    tags: ["n8n", "OpenAI", "Notion"],
    link: "",
  },
  // {
  //   title: "Lead Qualification System",
  //   description:
  //     "Automated lead scoring and follow-up for B2B sales team. Reps now spend time with qualified prospects only. Pipeline tripled without hiring more people.",
  //   image: "/lead-nurturing.jpg",
  //   tags: ["LangChain", "Node.js", "SendGrid"],
  //   link: "",
  // },
  // {
  //   title: "Content Publishing Workflow",
  //   description:
  //     "Created AI system generating and scheduling social content across platforms. Marketing team cut production time 70% while posting more consistently than ever.",
  //   image: "/ai-content-generator.jpg",
  //   tags: ["OpenAI", "Python", "Buffer API"],
  //   link: "",
  // },
  // {
  //   title: "Lead Automation System",
  //   description:
  //     "Sales team manually qualified 100+ leads per week. Built AI system scoring leads based on behavior, routing only hot prospects to reps. Sales team now spends Fridays strategizing instead of cold calling dead ends.",
  //   image: "/lead-automation.jpg",
  //   tags: ["Node.js", "Zapier", "OpenAI", "PostgreSQL"],
  //   link: "",
  // },
];

export const automationServices = [
  {
    icon: AutomationIcon,
    title: "Workflow Automation",
    description:
      "Eliminate repetitive manual tasks. I build systems handling your busywork automatically so you can focus on what actually grows the business.",
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
      "Almost any repetitive task following a pattern. Customer support, lead follow-ups, data entry, content posting, invoice processing, scheduling, CRM updates, reporting. During our call, I'll walk through your workflows and identify the biggest time-wasters automation can eliminate.",
  },
  {
    question: "How is AI automation different from regular automation?",
    answer:
      "Regular automation follows strict instructions like a simple robot. AI automation understands context, handles unpredictable scenarios, and learns from patterns. Instead of just moving data around, it reads customer messages, writes personalized responses, and makes decisions based on what it sees. That's the difference.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Time savings start immediately once automation goes live. Most clients hit positive ROI within 3-6 months as the system handles increasing volume. Full payback typically happens in 6-12 months. Exact timeline depends on what we're automating and setup complexity. I'll give you realistic projections after assessing your workflows.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all. I build everything with user-friendly dashboards so your team can monitor and adjust without touching code. You'll get training on using the system, and I'm available for ongoing support. If you want major changes later, I handle the technical work.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. All data is encrypted in transit and at rest. APIs are locked down with proper authentication. Access is controlled based on roles. If you're in a regulated industry (healthcare, finance, etc.), I ensure everything meets compliance requirements like GDPR or HIPAA. Your data stays safe.",
  },
  {
    question: "Can this work with my current tools?",
    answer:
      "Almost certainly. I integrate with popular platforms like Salesforce, HubSpot, Slack, Google Workspace, Stripe, Shopify, and hundreds more. If you have proprietary or custom systems, I can build custom integrations. The goal is making your tools work together seamlessly without disrupting your team's workflow.",
  },
];
