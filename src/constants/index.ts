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
  { name: "Instagram", url: "https://www.instagram.com/izzydev_/" },
  { name: "YouTube", url: "https://www.youtube.com/@Izzydev_1" },
  { name: "GitHub", url: "https://github.com/chiizzy1" },
  { name: "Email", url: "mailto:izzydevbuilds@gmail.com" },
];

export const services = [
  {
    icon: Rocket,
    title: "MVP Development",
    description:
      "Your first version will be ugly. That's the point. I build the minimum you need to test with real users, then we iterate based on what actually happens—not what we think will happen.",
  },
  {
    icon: Rocket,
    title: "AI Automation",
    description:
      "I automate the boring stuff—data entry, lead qualification, content generation. Most automation projects pay for themselves in saved time within 2 months.",
  },
  {
    icon: Rocket,
    title: "Interface Design",
    description:
      "Pretty isn't enough. I design interfaces that make sense to your actual users, not just to other designers. If they can't figure it out in 10 seconds, I redesign it.",
  },
];

export const projects = [
  {
    title: "SaaS Analytics Dashboard",
    description:
      "A startup founder was drowning in Google Analytics trying to figure out which features users actually cared about. Built a simplified dashboard that tracks 5 key metrics. They now check it every morning instead of avoiding their analytics tab.",
    image: "/saas-dashboard.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind"],
    link: "#",
    variant: "featured" as const,
  },
  {
    title: "AI Content Generator",
    description:
      "Marketing team needed 20 blog posts per month but could only write 5. Built an AI tool that generates first drafts matching their brand voice. They now edit instead of staring at blank pages. 15 posts published last month.",
    image: "/ai-content-generator.jpg",
    tags: ["React", "Node.js", "OpenAI", "MongoDB"],
    link: "#",
    variant: "standard" as const,
  },
  {
    title: "Multi-Vendor Marketplace",
    description:
      "E-commerce platform needed to onboard vendors faster. Built a self-service system where sellers can list products and start taking orders in under 10 minutes. First vendor made a sale within an hour of signing up.",
    image: "/marketplace-platform.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "WebSocket"],
    link: "#",
    variant: "standard" as const,
  },
  {
    title: "Project Management Tool",
    description:
      "Team was spending 2 hours per week in planning meetings. Built a workspace where AI analyzes task dependencies and suggests what to work on next. Meetings dropped to 30 minutes. Team ships faster.",
    image: "/task-management-board.png",
    tags: ["React", "Firebase", "AI", "Tailwind"],
    link: "#",
    variant: "standard" as const,
  },
  {
    title: "Lead Automation System",
    description:
      "Sales team was manually qualifying 100+ leads weekly. Built an AI system that scores leads based on behavior and routes only hot prospects to reps. Sales team now spends Fridays on strategy instead of cold outreach.",
    image: "/lead-automation.jpg",
    tags: ["Node.js", "Zapier", "OpenAI", "PostgreSQL"],
    link: "#",
    variant: "featured" as const,
  },
  {
    title: "Mobile Backend API",
    description:
      "Mobile app kept crashing when users exceeded 10K. Rewrote the backend API with proper caching and database indexing. Now handles 50K+ users without breaking. Response times under 100ms.",
    image: "/mobile-backend.jpg",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT"],
    link: "#",
    variant: "compact" as const,
  },
];

export const whyWorkWithMe = [
  {
    icon: Rocket,
    title: "Fast, Reliable Execution",
    description: "From idea to launch faster than you expect. No delays, no excuses.",
  },
  {
    icon: Rocket,
    title: "Built to Make You Money",
    description: "I focus on features that get customers paying, not just looking cool.",
  },
  {
    icon: Rocket,
    title: "Fullstack + AI Expertise",
    description: "Sleek web apps and intelligent workflows that work together seamlessly to save you time and accelerate growth.",
  },
  {
    icon: Rocket,
    title: "Clear Communication",
    description: "Weekly updates, no technical jargon, and you're always in the loop.",
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
      "We hop on a quick call to understand your vision and goals. I ask the right questions to figure out what you actually need, not just what sounds cool. By the end, you'll have clarity on next steps and a realistic timeline.",
    icon: Search,
  },
  {
    number: 2,
    title: "Design & Planning",
    description:
      "I create wireframes and a technical roadmap so you can see exactly what we're building before we write code. This prevents surprises and keeps us aligned on your vision throughout the project.",
    icon: Palette,
  },
  {
    number: 3,
    title: "Build & Iterate",
    description:
      "I build your product in weekly sprints, so you see progress constantly. You get regular updates, demos, and opportunities to give feedback. This agile approach means we can adjust quickly if priorities change.",
    icon: Cog,
  },
  {
    number: 4,
    title: "Test & Polish",
    description:
      "I test everything thoroughly across devices and browsers to catch bugs before your users do. Security, performance, and user experience all get attention to ensure your product feels professional and reliable.",
    icon: FlaskConical,
  },
  {
    number: 5,
    title: "Launch & Support",
    description:
      "I deploy your product and stick around to make sure everything runs smoothly. If issues pop up or you need guidance on next steps, I'm here to help. Your success matters to me beyond launch day.",
    icon: Rocket,
  },
];

export const faqs = [
  {
    question: "What is an MVP and why do I need one?",
    answer:
      "An MVP is the fastest way to test if your idea actually works. Instead of spending months building everything, you launch with core features, see how real users respond, and adjust from there. It saves you time, money, and the pain of building something nobody wants. Think of it as validating your concept before going all-in.",
  },
  {
    question: "How long does it take to build an MVP?",
    answer:
      "Most MVPs take 1-4 weeks from start to launch. Simple concepts with basic features can be faster, while more complex apps with multiple integrations might take closer to 6 weeks. You'll see progress every week, not just at the end. During our first call, I'll give you a realistic timeline based on what you need.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "I build with modern, reliable tools like Next.js, React, TypeScript, Node.js, and databases like PostgreSQL or Supabase. For automation, I use OpenAI, Claude, Zapier, and N8n. I pick the tech stack based on what makes sense for your project, not what's trendy. The goal is clean, maintainable code that won't become a nightmare to scale.",
  },
  {
    question: "Do you stick around after launch?",
    answer:
      "Yes. I don't just hand over the code and disappear. I offer ongoing support to fix bugs, monitor performance, and make updates as you grow. Whether you need occasional maintenance or a long-term development partner, I'm flexible. Your success after launch matters to me.",
  },
  {
    question: "How much does an MVP cost?",
    answer:
      "MVP development costs vary based on complexity, features, and timeline. We offer flexible pricing models including fixed-price projects and hourly rates. After understanding your requirements, we provide a detailed quote with transparent pricing and no hidden costs.",
  },
];

export const automationSteps = [
  {
    number: 1,
    title: "Understand Your Workflow",
    description:
      "I walk through your current processes to spot what's eating up your time. We identify tasks that can be automated and calculate how many hours you'll save each week.",
    icon: Rocket,
  },
  {
    number: 2,
    title: "Design the System",
    description:
      "I map out exactly how the automation will work, connecting your tools and building custom solutions where needed. You'll see the plan before anything goes live.",
    icon: Rocket,
  },
  {
    number: 3,
    title: "Deploy & Optimize",
    description:
      "I set everything up, test thoroughly, and monitor performance. As your business grows, I refine the automation to keep it running smoothly and saving you time.",
    icon: Rocket,
  },
];

export const automationCaseStudies = [
  {
    title: "AI Customer Support",
    description:
      "Built an AI chatbot that handles 85% of customer questions automatically. The support team now only deals with complex issues, cutting ticket volume by 60%.",
    image: "/customer-support-ai.jpg",
    tags: ["OpenAI", "Python", "Zapier"],
  },
  {
    title: "Lead Qualification System",
    description:
      "Automated lead scoring and follow-up for a B2B team. Sales reps now spend time with qualified prospects only, tripling their pipeline without hiring more people.",
    image: "/lead-nurturing.jpg",
    tags: ["LangChain", "Node.js", "SendGrid"],
  },
  {
    title: "Content Publishing Workflow",
    description:
      "Created an AI system that generates and schedules social content across platforms. Marketing team cut content production time by 70% while posting more consistently.",
    image: "/ai-content-generator.jpg",
    tags: ["OpenAI", "Python", "Buffer API"],
  },
];

export const automationServices = [
  {
    icon: Rocket,
    title: "Workflow Automation",
    description:
      "Stop doing repetitive tasks manually. I build systems that handle your busy work automatically, so you can focus on what actually grows your business.",
  },
  {
    icon: Rocket,
    title: "AI Agents",
    description:
      "Get AI assistants that handle complex tasks for you. From customer support to data analysis, these agents work 24/7 without breaks or mistakes.",
  },
  {
    icon: Rocket,
    title: "Tool Integration",
    description:
      "Connect your apps so they talk to each other seamlessly. No more copying data between systems or switching between tabs all day.",
  },
  {
    icon: Rocket,
    title: "Smart Chatbots",
    description:
      "Build chatbots that actually understand your customers. They handle common questions instantly, qualify leads, and escalate only when needed.",
  },
  {
    icon: Rocket,
    title: "Data Collection",
    description:
      "Automatically gather data from websites and enrich your database. Get the information you need without hiring a team to do it manually.",
  },
  {
    icon: Rocket,
    title: "System Monitoring",
    description:
      "Get alerts when something breaks before it becomes a crisis. Automated monitoring catches issues early and fixes simple problems on its own.",
  },
  {
    icon: Rocket,
    title: "Voice AI",
    description:
      "Add voice capabilities to your products. From voice commands to automated phone calls, make your services more accessible and hands-free.",
  },
  {
    icon: Rocket,
    title: "AI Content Generation",
    description:
      "Create high-quality content at scale using optimized AI prompts. Consistent tone, accurate outputs, and less time spent editing.",
  },
];

export const automationFaqs = [
  {
    question: "What can be automated in my business?",
    answer:
      "Pretty much any repetitive task that follows a pattern. Customer support, lead follow-ups, data entry, content posting, invoice processing, scheduling, CRM updates, reporting—the list goes on. During our call, I'll walk through your workflows and point out the biggest time-wasters that automation can handle.",
  },
  {
    question: "How is AI automation different from regular automation?",
    answer:
      "Regular automation is like a simple robot following strict instructions. AI automation is smarter—it understands context, handles unpredictable scenarios, and learns from patterns. So instead of just moving data around, it can read customer messages, write personalized responses, and make decisions based on what it sees. That's the game-changer.",
  },
  {
    question: "How quickly will I see results?",
    answer:
      "You'll see time savings immediately once the automation goes live. Most clients hit positive ROI within 3-6 months as the system handles more volume. Full payback typically happens in 6-12 months. The exact timeline depends on what we're automating and how complex your setup is. I'll give you realistic projections after we assess your workflows.",
  },
  {
    question: "Do I need to know how to code?",
    answer:
      "Not at all. I build everything with user-friendly dashboards so your team can monitor and adjust without touching code. You'll get training on how to use the system, and I'm available for ongoing support when you need it. If you want to make major changes down the road, I handle the technical work.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. I take security seriously. All data is encrypted in transit and at rest, APIs are locked down with proper authentication, and access is controlled based on roles. If you're in a regulated industry (healthcare, finance, etc.), I make sure everything meets compliance requirements like GDPR or HIPAA. Your data stays safe.",
  },
  {
    question: "Can this work with my current tools?",
    answer:
      "Almost certainly. I integrate with popular platforms like Salesforce, HubSpot, Slack, Google Workspace, Stripe, Shopify, and hundreds more. If you have proprietary or custom systems, I can build custom integrations. The goal is to make your tools work together seamlessly without disrupting how your team already operates.",
  },
];
