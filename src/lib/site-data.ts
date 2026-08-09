export const COMPANY = {
  name: "Solvix Core",
  tagline: "Premium technology solutions, serving businesses globally",
  email: "info@solvixcore.com",
  emailAdmin: "admin@solvixcore.com",
  phone: {
    canada: "+1 437 889 8256",
    uk: "+44 734 848 6506",
    pakistan: "+92 320 580 7054",
  },
  whatsapp: {
    canada: "https://wa.me/14378898256",
    uk: "https://wa.me/447348486506",
    pakistan: "https://wa.me/923205807054",
  },
};

export const NAV_LINKS = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/projects" },
  { label: "Industries", to: "/industries" },
  { label: "Technologies", to: "/technologies" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  group: string;
  blurb: string;
  accent: "primary" | "coral" | "violet" | "sage" | "peach";
};

export const SERVICES: Service[] = [
  {
    slug: "ai-solutions",
    title: "AI Solutions",
    group: "Intelligence",
    blurb: "Custom AI implementations powered by OpenAI, LangChain and advanced ML models tailored to your business.",
    accent: "primary",
  },
  {
    slug: "n8n-automation",
    title: "n8n Automation",
    group: "Intelligence",
    blurb: "Powerful workflow automation and integrations that eliminate manual tasks and connect your business tools.",
    accent: "violet",
  },
  {
    slug: "web-development",
    title: "Web Development",
    group: "Build",
    blurb: "Custom websites and applications built with modern tech stack — fast, secure and scalable.",
    accent: "sage",
  },
  {
    slug: "shopify-store-design",
    title: "Shopify Store Design",
    group: "Platforms",
    blurb: "Premium Shopify stores designed to convert — from setup and theme customisation to full e-commerce solutions.",
    accent: "peach",
  },
  {
    slug: "mobile-app-development",
    title: "App Development",
    group: "Build",
    blurb: "Native and cross-platform mobile applications for iOS and Android built with modern frameworks.",
    accent: "coral",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    group: "Growth",
    blurb: "High-quality content strategy, video editing and creation that resonates with your audience and drives engagement.",
    accent: "coral",
  },
  {
    slug: "marketing-seo",
    title: "Marketing & SEO",
    group: "Growth",
    blurb: "Data-driven marketing strategies and SEO optimisation to maximise your online visibility and drive qualified traffic.",
    accent: "sage",
  },
  {
    slug: "langchain-integration",
    title: "LangChain Integration",
    group: "Intelligence",
    blurb: "Advanced LLM application development using LangChain — chatbots, RAG pipelines and AI agents.",
    accent: "violet",
  },
  {
    slug: "openai-integration",
    title: "OpenAI Integration",
    group: "Intelligence",
    blurb: "Seamless OpenAI API integration — from GPT-powered features to DALL-E, Whisper and custom assistants.",
    accent: "primary",
  },
  {
    slug: "pos-systems",
    title: "Retail POS Systems",
    group: "Platforms",
    blurb: "End-to-end retail and hospitality POS systems with payment workflows, inventory sync and customer insights.",
    accent: "peach",
  },
  {
    slug: "crm-development",
    title: "CRM Development",
    group: "Platforms",
    blurb: "Custom CRM systems built around your sales process — lead management, pipeline tracking, client communication and reporting all in one place.",
    accent: "sage",
  },
];

export const STATS = [
  { value: 15, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 10, suffix: "+", label: "Team members" },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Planning",
    body: "We understand your business goals, target audience and technical requirements before writing a single line of code.",
  },
  {
    step: "02",
    title: "Design & Architecture",
    body: "Wireframes, UI designs and technical blueprints reviewed and approved by you before development begins.",
  },
  {
    step: "03",
    title: "Agile Development",
    body: "Two-week sprints with regular demos so you see progress and can provide feedback throughout the build.",
  },
  {
    step: "04",
    title: "Testing & QA",
    body: "Thorough testing across devices, browsers and scenarios to ensure everything works flawlessly.",
  },
  {
    step: "05",
    title: "Launch & Support",
    body: "Smooth deployment with post-launch monitoring and ongoing support to keep your solution running at its best.",
  },
];

export const TECHNOLOGIES = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "TanStack", "Vue.js"] },
  { group: "Backend", items: ["Node.js", "Python", "PHP", "Go", "GraphQL", "REST APIs"] },
  { group: "AI & Automation", items: ["OpenAI", "LangChain", "n8n", "LangGraph", "PyTorch", "Anthropic"] },
  { group: "E-Commerce", items: ["Shopify", "WooCommerce", "Stripe", "PayPal", "Klarna", "Square"] },
  { group: "Cloud & DevOps", items: ["AWS", "Vercel", "Netlify", "Docker", "GitHub Actions", "Cloudflare"] },
  { group: "Databases", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Supabase", "Firebase"] },
];

export const INDUSTRIES = [
  { name: "E-Commerce & Retail", note: "Shopify stores, headless storefronts and payment systems." },
  { name: "Healthcare", note: "Patient portals, clinic management and health tech platforms." },
  { name: "Finance & Fintech", note: "Payment processing, accounting automation and dashboards." },
  { name: "Real Estate", note: "Property listing platforms, CRM and lead management systems." },
  { name: "Education & EdTech", note: "Learning management systems and student portals." },
  { name: "Logistics & Supply Chain", note: "Fleet tracking, inventory and order management." },
  { name: "Hospitality & Tourism", note: "Booking systems, POS and guest experience platforms." },
  { name: "Professional Services", note: "CRM, automation and client management solutions." },
];

export const PROJECTS = [
  {
    slug: "ai-ecommerce-canada",
    title: "Business Information Website",
    sector: "Professional Services",
    year: "2025",
    summary: "A fully custom business information and accounting website for a UK-based firm — clean UI, service listings, client portal and integrated contact system.",
    metric: "Delivered in 3 weeks",
    image: "project-1",
  },
  {
    slug: "automation-uk",
    title: "Point of Sale System",
    sector: "Retail — Grocery",
    year: "2025",
    summary: "A full Point of Sale system built for a grocery store — product management, barcode scanning, sales tracking, daily reports and inventory alerts.",
    metric: "500+ daily transactions",
    image: "project-2",
  },
  {
    slug: "web-platform-pakistan",
    title: "Enterprise Web Platform",
    sector: "Technology",
    year: "2024",
    summary: "Custom Next.js platform with AI chatbot and real-time analytics for a Pakistan-based tech company.",
    metric: "3x user engagement",
    image: "project-3",
  },
];

export const CASE_STUDIES = [
  {
    slug: "ai-ecommerce-canada",
    client: "UK Accounting & Business Services Firm",
    title: "Professional business website that became the firm's primary lead source",
    challenge:
      "A UK-based accounting and business services firm had no online presence. Potential clients could not find them, verify their credentials or contact them easily — they were losing business to competitors with better websites.",
    approach:
      "We built a clean, professional multi-page website with service listings, team profiles, a client enquiry system and Google Business integration. The site was optimised for local SEO and mobile from day one.",
    results: [
      { k: "3 wks", v: "from brief to live" },
      { k: "Top 3", v: "Google local search ranking" },
      { k: "60%", v: "enquiries now via website" },
    ],
  },
  {
    slug: "automation-uk",
    client: "Grocery Store — UK",
    title: "Point of Sale system that replaced manual paper-based checkout",
    challenge:
      "A UK grocery store was running checkout on pen and paper — no inventory tracking, no daily sales reports and constant stock discrepancies that were costing the owner money every week.",
    approach:
      "We built a custom POS system with barcode scanning, product management, real-time inventory tracking, daily sales reports and low-stock alerts. The system runs on a tablet at the counter and syncs data to a web dashboard.",
    results: [
      { k: "500+", v: "daily transactions processed" },
      { k: "Zero", v: "manual stock errors since launch" },
      { k: "2 hrs", v: "saved daily on reconciliation" },
    ],
  },
  {
    slug: "web-platform-pakistan",
    client: "Pakistan Tech Company",
    title: "Enterprise platform with AI chatbot serving 50,000 users",
    challenge:
      "An outdated PHP system could not scale to meet growing user demand or integrate modern AI features.",
    approach:
      "We rebuilt the platform in Next.js with a LangChain-powered chatbot, real-time analytics and a headless CMS — deployed on AWS.",
    results: [
      { k: "3x", v: "user engagement" },
      { k: "50k+", v: "active users" },
      { k: "99.9%", v: "uptime achieved" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Solvix Core built us a website we are genuinely proud of. It looks professional, loads fast and has already brought in new clients we would never have reached before.",
    name: "James Mitchell",
    role: "Director, UK Business Services Firm",
  },
  {
    quote:
      "The POS system they built for us changed everything. No more pen and paper, no more stock confusion. I can see everything on my phone now — sales, stock, reports.",
    name: "Ahmed Khalil",
    role: "Owner, Grocery Store UK",
  },
  {
    quote:
      "Solvix Core rebuilt our platform from scratch in record time. The AI chatbot alone has reduced our support load significantly. Exceptional quality of work.",
    name: "Bilal Rana",
    role: "CTO, Tech Company Pakistan",
  },
];

export const CLIENTS = [
  "CANADA",
  "UK",
  "PAKISTAN",
  "SOLVIX CORE",
  "LEPRO TRADING",
  "GLOBAL REACH",
  "AI SOLUTIONS",
  "AUTOMATION",
];

export const PRICING = [
  {
    name: "Starter",
    price: "$299",
    cadence: "USD / one-time",
    tagline: "Perfect for small businesses and startups.",
    features: [
      "Up to 5-page website",
      "Responsive mobile design",
      "Basic SEO setup",
      "Contact form integration",
      "30 days support",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$799",
    cadence: "USD / one-time",
    tagline: "Our most popular solution for growing businesses.",
    features: [
      "Up to 15-page website",
      "Custom UI/UX design",
      "Advanced SEO optimisation",
      "CMS integration",
      "AI chatbot integration",
      "90 days support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "tailored quote",
    tagline: "Full-scale solutions for complex requirements.",
    features: [
      "Unlimited pages & features",
      "Custom web or mobile app",
      "AI & automation workflows",
      "Shopify / e-commerce",
      "Dedicated project manager",
      "1 year support & maintenance",
    ],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "Which countries do you serve?",
    a: "We proudly serve clients in Canada, the United Kingdom and Pakistan, with fully remote delivery worldwide. Contact us via WhatsApp or email in your timezone.",
  },
  {
    q: "How quickly can a project start?",
    a: "Most projects begin within one week of a signed agreement. We can accommodate urgent timelines — reach out and we will find a way.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes. We typically work on a 50% deposit with the balance on completion for fixed-price projects. Monthly retainer options are also available.",
  },
  {
    q: "What is your pricing currency?",
    a: "All prices are quoted in Canadian Dollars (CAD). We accept payment via bank transfer, credit card and PayPal.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You do — entirely, from the first commit. All source code, designs and assets are transferred to you upon final payment.",
  },
  {
    q: "Do you offer ongoing maintenance?",
    a: "Yes. We offer monthly maintenance and support retainers to keep your platform updated, secure and performing at its best.",
  },
];

export const POSTS = [
  {
    slug: "ai-for-small-business",
    title: "How AI is transforming small businesses in Canada, UK and Pakistan",
    category: "AI",
    date: "July 2025",
    read: "6 min",
    excerpt:
      "Practical AI tools like ChatGPT, LangChain and n8n are no longer just for enterprise — here is how SMBs are using them to compete.",
  },
  {
    slug: "shopify-conversion-tips",
    title: "10 Shopify optimisations that will boost your conversions this year",
    category: "E-Commerce",
    date: "June 2025",
    read: "7 min",
    excerpt:
      "From AI product recommendations to checkout UX — the most impactful improvements we have made across 50+ Shopify stores.",
  },
  {
    slug: "n8n-automation-guide",
    title: "Getting started with n8n: automate your business without code",
    category: "Automation",
    date: "May 2025",
    read: "8 min",
    excerpt:
      "A practical guide to building your first n8n workflow — connecting your CRM, email, invoicing and more in under an hour.",
  },
  {
    slug: "seo-2025-guide",
    title: "SEO in 2025: what has changed and what actually works now",
    category: "Marketing",
    date: "April 2025",
    read: "9 min",
    excerpt:
      "Google's AI-driven search landscape has changed the rules. Here is our updated playbook for earning organic traffic.",
  },
  {
    slug: "web-dev-trends-2025",
    title: "Web development trends every business should know in 2025",
    category: "Development",
    date: "March 2025",
    read: "5 min",
    excerpt:
      "From server components to edge deployment — the technologies we are building with right now and why they matter for your project.",
  },
  {
    slug: "mobile-app-vs-pwa",
    title: "Native mobile app vs PWA: which is right for your business?",
    category: "Mobile",
    date: "February 2025",
    read: "6 min",
    excerpt:
      "The honest comparison — cost, performance, reach and maintenance — to help you make the right decision for your budget.",
  },
];

export const ROLES = [
  { title: "Senior React Developer", team: "Engineering", location: "Remote (Canada / UK / Pakistan)" },
  { title: "AI Solutions Engineer", team: "Intelligence", location: "Remote (Global)" },
  { title: "UI/UX Designer", team: "Design", location: "Remote (Global)" },
  { title: "n8n Automation Specialist", team: "Automation", location: "Remote (Global)" },
  { title: "Shopify Developer", team: "E-Commerce", location: "Remote (Global)" },
  { title: "SEO & Marketing Strategist", team: "Growth", location: "Remote (Global)" },
];

export const OFFICES = [
  { city: "Canada", line: "Suite 104 - 2 Gurdwara Road, Ottawa, ON K2E 1A2", tz: "GMT-5", phone: "+1 437 889 8256", flag: "CA" },
  { city: "United Kingdom", line: "London, United Kingdom", tz: "GMT", phone: "+44 734 848 6506", flag: "GB" },
  { city: "Pakistan", line: "Lahore, Pakistan", tz: "GMT+5", phone: "+92 320 580 7054", flag: "PK" },
];

export const VALUES = [
  { title: "Client success first", body: "Everything we build is measured against real outcomes for your business, not our portfolio." },
  { title: "Transparency always", body: "Clear communication, honest timelines and no surprises — you are always in the loop." },
  { title: "Quality without compromise", body: "We do not ship work we would not be proud to put our name on." },
  { title: "Innovation-driven", body: "We stay at the cutting edge so our clients always have a competitive advantage." },
];

export const TIMELINE = [
  { year: "2024", title: "Solvix Core founded", body: "Started as a web development and AI agency serving clients in Canada, UK and Pakistan." },
  { year: "2024", title: "First projects delivered", body: "Delivered our first 5 projects including a business website for a UK firm and a POS system for a grocery store." },
  { year: "2025", title: "Team grows to 10+", body: "Expanded our team of developers, designers and AI specialists to serve more clients globally." },
  { year: "2025", title: "15+ projects milestone", body: "Reached 15+ successful project deliveries across web development, AI, automation and POS systems." },
  { year: "2025", title: "Partnered with Lepro Trading Inc", body: "Strategic partnership to expand our reach and deliver even greater value to clients worldwide." },
  { year: "2025", title: "Serving globally", body: "Now serving clients in Canada, UK, Pakistan and beyond — 98% client satisfaction rate." },
];

export const TEAM = [
  { name: "Umar Farooq", role: "Founder & CEO", initials: "UF" },
  { name: "Sarah Ahmed", role: "Head of Development", initials: "SA" },
  { name: "James Wilson", role: "AI Solutions Lead", initials: "JW" },
  { name: "Fatima Khan", role: "Design Director", initials: "FK" },
  { name: "Daniel Brooks", role: "Automation Specialist", initials: "DB" },
  { name: "Aisha Malik", role: "Client Success Manager", initials: "AM" },
];

export const AWARDS = [
  { year: "2025", name: "Partnered with Lepro Trading Inc — Canada" },
  { year: "2025", name: "500+ Projects Delivered Milestone" },
  { year: "2024", name: "98% Client Satisfaction Rate" },
  { year: "2024", name: "Expanded to 3 Countries — CA, UK, PK" },
];
