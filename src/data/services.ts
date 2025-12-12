export type Service = {
  slug: string
  title: string
  short: string
  long: string[]
  bullets?: string[]
  themePrimary?: "cyan" | "teal" | "amber"
}

export const services: Service[] = [
  {
    slug: "n-and-n",
    title: "N&N",
    short: "Next-gen automation and navigation systems engineered for reliability, scale, and insight.",
    long: [
      "Our N&N solutions unify orchestration, observability, and intelligent routing to help teams automate complex workflows with confidence.",
      "We design modular pipelines, build robust connectors, and implement near-real-time monitoring so your systems remain responsive and predictable.",
      "From prototyping to production hardening, we optimize throughput and reduce operational toil with measurable outcomes.",
    ],
    bullets: [
      "Modular orchestration and resilient scheduling",
      "Deep observability with actionable insights",
      "Event-driven architectures and backpressure control",
    ],
    themePrimary: "teal",
  },
  {
    slug: "langchain",
    title: "LangChain",
    short: "Production-grade LLM pipelines with tools, memory, and evaluators tuned to your domain.",
    long: [
      "We build LangChain-powered agents that reliably ground answers in your data, integrate with tools, and capture reasoning traces.",
      "Our patterns emphasize testable chains, structured outputs, and on-call friendly observability for AI in the loop.",
      "From retrieval and re-ranking to evaluation harnesses, we help you ship AI features with confidence.",
    ],
    bullets: [
      "RAG with hybrid search and re-ranking",
      "Function/tool calling with safety rails",
      "Evaluation, telemetry, and CI-friendly tests",
    ],
    themePrimary: "cyan",
  },
  {
    slug: "customized-websites",
    title: "Customized Websites",
    short: "Tailored, performant websites that reflect your brand and convert visitors into customers.",
    long: [
      "We craft responsive experiences with accessible, semantic HTML and modern performance techniques.",
      "Our team collaborates on content strategy and design systems so your site scales gracefully as you grow.",
      "We measure what matters—core vitals, engagement, and conversion—and iterate to maximize impact.",
    ],
    bullets: [
      "Design systems and component libraries",
      "Accessibility and Core Web Vitals excellence",
      "Content strategy and CMS integrations",
    ],
    themePrimary: "amber",
  },
  {
    slug: "openai-agent-sdk",
    title: "OpenAI Agent SDK",
    short: "Goal-driven agents with tool usage, planning, and guardrails for real business tasks.",
    long: [
      "We implement agentic workflows that securely call internal tools and external APIs to accomplish tasks end-to-end.",
      "Careful prompt engineering, safety checks, and auditability align agents with your constraints and expectations.",
      "We prioritize deterministic handoffs and fallback paths so the system stays reliable—even when tasks are complex.",
    ],
    bullets: [
      "Tool-enabled agents with planning",
      "Safety filters and audit trails",
      "Integration with CRMs, ERPs, and data lakes",
    ],
    themePrimary: "teal",
  },
  {
    slug: "ai-ml",
    title: "AI/ML",
    short: "From classical ML to modern LLMs—data pipelines, training, evaluation, and deployment.",
    long: [
      "We design data pipelines, feature stores, and evaluation frameworks to make ML measurable and maintainable.",
      "Our team tunes models for latency, cost, and robustness, with monitoring to catch regressions early.",
      "We help you choose the right approach—don’t overfit on novelty; optimize for outcomes.",
    ],
    bullets: [
      "Data engineering and feature stores",
      "Model training, tuning, and evaluation",
      "Serving, monitoring, and cost controls",
    ],
    themePrimary: "cyan",
  },
  {
    slug: "application-development",
    title: "Application Development",
    short: "Ship secure, scalable apps with modern DX and proven architecture patterns.",
    long: [
      "We build applications with clear domain boundaries, typed contracts, and great developer ergonomics.",
      "From greenfield to refactors, we emphasize testability, performance, and maintainability.",
      "Security, observability, and reliability are first-class concerns—not afterthoughts.",
    ],
    bullets: [
      "Domain-driven design & typed APIs",
      "Performance budgeting and profiling",
      "Robust CI/CD and observability",
    ],
    themePrimary: "amber",
  },
  {
    slug: "video-editing",
    title: "Video Editing",
    short: "Crisp storytelling with motion that elevates your brand and message.",
    long: [
      "We edit for clarity and emotion, balancing narrative and visual rhythm to keep viewers engaged.",
      "From cuts and color to captions and social-first formats, we tailor output to platform and audience.",
      "We collaborate on scripts, storyboards, and brand guidelines to deliver consistent quality.",
    ],
    bullets: [
      "Brand-consistent motion graphics",
      "Platform-optimized deliverables",
      "Captions, color grading, and audio polish",
    ],
    themePrimary: "teal",
  },
  {
    slug: "graphic-designing",
    title: "Graphic Designing",
    short: "Distinctive visuals that communicate clearly and feel unmistakably you.",
    long: [
      "We create cohesive design systems—logos, typography, and color—that scale across mediums.",
      "Our deliverables span web, print, and product, aligned to your voice and audience.",
      "Every artifact is purposeful: crafted for readability, recognition, and delight.",
    ],
    bullets: ["Identity systems and brand kits", "Marketing collateral and ads", "Web and product illustration"],
    themePrimary: "amber",
  },
  {
    slug: "content-creation",
    title: "Content Creation",
    short: "High-impact content strategy, copy, and visuals that educate, convert, and retain.",
    long: [
      "We plan, produce, and polish content that aligns with your positioning and speaks to your audience’s needs.",
      "From landing pages and blogs to scripts and case studies, our content is optimized for clarity, search, and conversion.",
      "We design repeatable workflows—briefs, review cycles, and analytics loops—so content scales without losing quality.",
    ],
    bullets: [
      "Editorial strategy and calendars",
      "SEO-focused articles and landing pages",
      "Scripts, case studies, and emails",
    ],
    themePrimary: "cyan",
  },
  {
    slug: "shopify-store-designing",
    title: "Shopify Store Designing",
    short: "Elegant, performant Shopify storefronts designed to convert and scale.",
    long: [
      "We design cohesive storefronts with accessible components, fast product browsing, and polished brand expression.",
      "Our builds emphasize Core Web Vitals, structured data, and conversion-optimized UX with A/B testing in mind.",
      "We support custom sections, metafields, and app integrations while keeping maintainability top of mind.",
    ],
    bullets: [
      "Conversion-first product pages",
      "Theme customization and sections",
      "Analytics, SEO, and app integrations",
    ],
    themePrimary: "amber",
  },
]

export const getServiceBySlug = (slug: string) => services.find((s) => s.slug === slug)
