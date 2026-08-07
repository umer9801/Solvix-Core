export const COMPANY = {
  name: "Solvix Core",
  tagline: "Premium technology solutions for modern businesses",
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
  { label: "Pricing", to: "/pricing" },
  { label: "Industries", to: "/industries" },
  { label: "Technologies", to: "/technologies" },
  { label: "Blog", to: "/blog" },
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
];

export const STATS = [
  { value: 500, suffix: "+", label: "Projects delivered" },
  { value: 3, suffix: "", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 50, suffix: "+", label: "Expert team members" },
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
    title: "AI-Powered E-Commerce Platform",
    sector: "E-Commerce",
    year: "2025",
    summary: "A full Shopify + AI recommendation engine for a Canadian retail brand, boosting conversions by 42%.",
    metric: "+42% conversion rate",
    image: "project-1",
  },
  {
    slug: "automation-uk",
    title: "Business Automation Suite",
    sector: "Professional Services",
    year: "2025",
    summary: "n8n-powered automation connecting CRM, invoicing and email — saving 120 hours per month for a UK firm.",
    metric: "120 hrs/mo saved",
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
    client: "Canadian Retail Brand",
    title: "AI recommendation engine that tripled average order value",
    challenge:
      "A Canadian e-commerce store was struggling with low repeat purchases and poor product discovery on their Shopify store.",
    approach:
      "We integrated a custom OpenAI-powered recommendation engine with personalised email automation via n8n, all connected to their Shopify backend.",
    results: [
      { k: "42%", v: "conversion rate uplift" },
      { k: "3x", v: "average order value" },
      { k: "6 wks", v: "from brief to launch" },
    ],
  },
  {
    slug: "automation-uk",
    client: "UK Professional Services Firm",
    title: "120 hours a month reclaimed through smart automation",
    challenge:
      "Manual data entry between CRM, invoicing software and email was consuming two full-time staff.",
    approach:
      "We built a suite of n8n workflows connecting HubSpot, Xero and Gmail, with AI-assisted document parsing and exception handling.",
    results: [
      { k: "120 hrs", v: "saved every month" },
      { k: "38k GBP", v: "annual cost saving" },
      { k: "2 wks", v: "implementation time" },
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
      "Solvix Core transformed our business with their AI automation. The n8n workflows they built have saved us hundreds of hours every month.",
    name: "James Mitchell",
    role: "CEO, TechVentures Canada",
  },
  {
    quote:
      "Outstanding web development work. The team delivered beyond our expectations — fast, modern, and exactly what our brand needed.",
    name: "Sarah Thornton",
    role: "Founder, Digital Hub London",
  },
  {
    quote:
      "Solvix Core's AI solutions took our e-commerce store to the next level. The Shopify customisation and marketing automation is world-class.",
    name: "Ahmed Raza",
    role: "Director, Commerce Pakistan",
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
    price: "$1,299",
    cadence: "CAD / one-time",
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
    price: "$3,999",
    cadence: "CAD / one-time",
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
  { year: "2019", title: "Solvix Core founded", body: "Started as a web development studio serving clients in Canada with a focus on quality and delivery." },
  { year: "2020", title: "Expanded to UK market", body: "Opened operations serving United Kingdom businesses, growing our team and service offering." },
  { year: "2021", title: "Pakistan operations launched", body: "Established our Pakistan presence, building a world-class development team." },
  { year: "2022", title: "AI & Automation practice", body: "Launched our intelligence practice, delivering LangChain, OpenAI and n8n solutions." },
  { year: "2023", title: "500+ projects milestone", body: "Delivered over 500 projects across Canada, UK and Pakistan — 98% client satisfaction." },
  { year: "2025", title: "Partnered with Lepro Trading Inc", body: "Strategic partnership to expand reach and deliver even greater value to clients globally." },
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
