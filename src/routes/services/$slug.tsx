import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { FAQS, PRICING, PROJECTS, SERVICES, TECHNOLOGIES, PROCESS } from "@/lib/site-data";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import aiIntegration from "@/assets/ai-integration.PNG";
import webDevelopment from "@/assets/web-development.PNG";
import contentCreation from "@/assets/content-creation.PNG";
import marketingImage from "@/assets/marketing.PNG";
import langchainImage from "@/assets/langchain.PNG";
import posPortfolio from "@/assets/pos-portfolio.jpeg";

const images: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

const heroImages: Record<string, string> = {
  "ai-solutions": aiIntegration,
  "web-development": webDevelopment,
  "content-creation": contentCreation,
  "marketing-seo": marketingImage,
  "langchain-integration": langchainImage,
  "openai-integration": aiIntegration,
  "pos-systems": posPortfolio,
};

const servicePricing: Record<string, typeof PRICING> = {
  "ai-solutions": [
    {
      name: "Pilot",
      price: "$12,999",
      cadence: "CAD / fixed",
      tagline: "Proof of value with a working AI feature.",
      featured: false,
      features: [
        "AI discovery workshop",
        "Prototype integration",
        "Model evaluation and hardening",
      ],
    },
    {
      name: "Production",
      price: "$34,999",
      cadence: "CAD / fixed",
      tagline: "Full production-ready AI feature with monitoring.",
      featured: true,
      features: [
        "Custom model pipeline",
        "Secure deployment",
        "Ongoing performance tuning",
      ],
    },
    {
      name: "Scale",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "An enterprise-grade AI platform for long-term growth.",
      featured: false,
      features: [
        "Multi-model architecture",
        "Enterprise data governance",
        "Dedicated support squad",
      ],
    },
  ],
  "n8n-automation": [
    {
      name: "Launch",
      price: "$8,999",
      cadence: "CAD / fixed",
      tagline: "Automate a core workflow with real business impact.",
      featured: false,
      features: [
        "Workflow mapping",
        "n8n implementation",
        "Toolchain integration",
      ],
    },
    {
      name: "Grow",
      price: "$22,999",
      cadence: "CAD / fixed",
      tagline: "Multi-system automation with fail-safe operations.",
      featured: true,
      features: [
        "Advanced orchestration",
        "Retry logic and alerts",
        "Ongoing transaction visibility",
      ],
    },
    {
      name: "Enterprise",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A fully managed automation platform for your business.",
      featured: false,
      features: [
        "Custom operations centre",
        "SLA-backed automation",
        "Dedicated automation engineers",
      ],
    },
  ],
  "web-development": [
    {
      name: "Start",
      price: "$9,499",
      cadence: "CAD / fixed",
      tagline: "A modern website or web app built for launch.",
      featured: false,
      features: [
        "Responsive UX",
        "CMS or admin panel",
        "Performance tuning",
      ],
    },
    {
      name: "Scale",
      price: "$28,999",
      cadence: "CAD / fixed",
      tagline: "A scalable web platform with analytics and automation.",
      featured: true,
      features: [
        "Custom API architecture",
        "Production reliability",
        "Observability and testing",
      ],
    },
    {
      name: "Custom",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "The right web platform for complex business operations.",
      featured: false,
      features: [
        "Headless or full-stack build",
        "Enterprise integrations",
        "Ongoing feature roadmap",
      ],
    },
  ],
  "shopify-store-design": [
    {
      name: "Launch",
      price: "$7,499",
      cadence: "CAD / fixed",
      tagline: "A high-converting Shopify store built to sell.",
      featured: false,
      features: [
        "Storefront design",
        "Checkout optimisation",
        "Shopify setup",
      ],
    },
    {
      name: "Growth",
      price: "$19,999",
      cadence: "CAD / fixed",
      tagline: "A richer Shopify store with custom conversion tools.",
      featured: true,
      features: [
        "Custom sections",
        "Inventory sync",
        "Conversion analytics",
      ],
    },
    {
      name: "Enterprise",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A Shopify ecosystem built for retail scale.",
      featured: false,
      features: [
        "POS and inventory workflows",
        "Headless commerce",
        "Ongoing optimization",
      ],
    },
  ],
  "mobile-app-development": [
    {
      name: "MVP",
      price: "$14,999",
      cadence: "CAD / fixed",
      tagline: "A polished mobile app to validate your idea.",
      featured: false,
      features: [
        "Native or cross-platform ux",
        "Core feature set",
        "App store deployment",
      ],
    },
    {
      name: "Product",
      price: "$34,999",
      cadence: "CAD / fixed",
      tagline: "A fully featured app ready for scale.",
      featured: true,
      features: [
        "Advanced mobile flows",
        "Backend integration",
        "Performance monitoring",
      ],
    },
    {
      name: "Platform",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A mobile product engineered for long-term growth.",
      featured: false,
      features: [
        "Offline and sync logic",
        "Security and auth",
        "Release and support plan",
      ],
    },
  ],
  "content-creation": [
    {
      name: "Kickoff",
      price: "$4,999",
      cadence: "CAD / fixed",
      tagline: "A content launch package to build your brand voice.",
      featured: false,
      features: [
        "Content strategy",
        "Video and copy drafts",
        "Distribution plan",
      ],
    },
    {
      name: "Campaign",
      price: "$12,999",
      cadence: "CAD / fixed",
      tagline: "A cross-channel campaign with measurable engagement.",
      featured: true,
      features: [
        "Video, blog and social assets",
        "SEO and conversion copy",
        "Performance reporting",
      ],
    },
    {
      name: "Retainer",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A steady content engine for audience growth.",
      featured: false,
      features: [
        "Editorial cadence",
        "Creative direction",
        "Ongoing optimisation",
      ],
    },
  ],
  "marketing-seo": [
    {
      name: "Launch",
      price: "$3,999",
      cadence: "CAD / fixed",
      tagline: "SEO and marketing foundations for immediate visibility.",
      featured: false,
      features: [
        "Keyword planning",
        "Campaign setup",
        "Conversion tracking",
      ],
    },
    {
      name: "Growth",
      price: "$11,999",
      cadence: "CAD / fixed",
      tagline: "A growth program that scales demand reliably.",
      featured: true,
      features: [
        "Monthly content",
        "Paid media optimisation",
        "SEO technical fixes",
      ],
    },
    {
      name: "Partner",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A long-term acquisition and retention program.",
      featured: false,
      features: [
        "Growth strategy",
        "Campaign execution",
        "Performance reviews",
      ],
    },
  ],
  "langchain-integration": [
    {
      name: "Pilot",
      price: "$14,999",
      cadence: "CAD / fixed",
      tagline: "A LangChain proof-of-concept with real data.",
      featured: false,
      features: [
        "Prompt engineering",
        "Chain orchestration",
        "Custom retrieval setup",
      ],
    },
    {
      name: "Production",
      price: "$32,999",
      cadence: "CAD / fixed",
      tagline: "A production-ready LangChain app or agent.",
      featured: true,
      features: [
        "Resilient chain design",
        "Monitoring and logs",
        "Secure data access",
      ],
    },
    {
      name: "Platform",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A full AI agent platform for knowledge workflows.",
      featured: false,
      features: [
        "Multi-agent orchestration",
        "Enterprise governance",
        "Continuous improvement",
      ],
    },
  ],
  "openai-integration": [
    {
      name: "Feature",
      price: "$12,999",
      cadence: "CAD / fixed",
      tagline: "A single OpenAI-powered feature integrated into your product.",
      featured: false,
      features: [
        "API integration",
        "User experience design",
        "Prompt tuning",
      ],
    },
    {
      name: "Product",
      price: "$28,999",
      cadence: "CAD / fixed",
      tagline: "An OpenAI-powered product launch with real user outcomes.",
      featured: true,
      features: [
        "Custom workflow automation",
        "UX and safety review",
        "Launch-ready delivery",
      ],
    },
    {
      name: "Custom",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A strategic OpenAI integration built for your business model.",
      featured: false,
      features: [
        "Security and compliance",
        "API orchestration",
        "Long-term maintenance",
      ],
    },
  ],
  "pos-systems": [
    {
      name: "Retail Start",
      price: "$9,999",
      cadence: "CAD / fixed",
      tagline: "A modern POS system to replace manual retail workflows.",
      featured: false,
      features: [
        "Inventory sync",
        "Payments setup",
        "Basic reporting",
      ],
    },
    {
      name: "Retail Growth",
      price: "$24,999",
      cadence: "CAD / fixed",
      tagline: "A complete retail POS solution with customer and stock automation.",
      featured: true,
      features: [
        "Multi-location inventory",
        "CRM integration",
        "Reporting dashboards",
      ],
    },
    {
      name: "Enterprise",
      price: "Bespoke",
      cadence: "tailored quote",
      tagline: "A tailored retail tech stack for hospitality and store networks.",
      featured: false,
      features: [
        "Custom checkout flows",
        "Loyalty and payments",
        "24/7 support",
      ],
    },
  ],
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Service"} — Affordable Service Globally | Solvix Core` },
      { name: "description", content: `${loaderData?.blurb ?? "Premium tech service"} — Affordable pricing in USD. Serving businesses globally. Get a free quote from Solvix Core.` },
      { name: "keywords", content: `${loaderData?.title ?? "tech service"}, affordable ${loaderData?.title?.toLowerCase() ?? "service"}, hire ${loaderData?.title?.toLowerCase() ?? "developer"}, ${loaderData?.title?.toLowerCase() ?? "service"} price USD, Solvix Core` },
      { property: "og:title", content: `${loaderData?.title ?? "Service"} | Solvix Core` },
      { property: "og:description", content: `${loaderData?.blurb ?? "Solvix Core service."} Serving clients globally.` },
    ],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const s = Route.useLoaderData();

  return (
    <>
      <PageHero
        eyebrow={s.group}
        title={s.title}
        body={s.blurb}
        heroNote={`This service is delivered as a focused capability with clear milestones, production readiness and measurable business impact.`}
        image={heroImages[s.slug]}
        imageAlt={s.title}
        imageMode="portrait"
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">What we build</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We turn your requirement into a delivered, testable outcome — with the right tools, integrations and production controls for the service you need.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">How we work</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every engagement begins with diagnostics, ends with a live release, and includes clear handover documentation so your team is confident after launch.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="container-lux pb-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <SectionHead
            eyebrow="Overview"
            title="What this engagement actually looks like."
            body={`${s.blurb} We start with a diagnostic, agree the measures of success, then deliver in two-week increments with everything running in production from the first one.`}
          />
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow">Features</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Dedicated senior squad",
                  "Architecture & security review",
                  "Design system foundations",
                  "Automated testing pipeline",
                  "Observability from day one",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow">Benefits</p>
              <ul className="mt-5 space-y-3">
                {[
                  "Lower total cost of ownership",
                  "Change velocity that holds up",
                  "Fewer production incidents",
                  "Documentation your team trusts",
                  "A capability, not a dependency",
                ].map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container-lux py-24">
        <SectionHead eyebrow="Working process" title="Five movements, repeated with discipline." />
        <div className="mt-14 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border md:grid-cols-5">
          {PROCESS.map((p) => (
            <div key={p.step} className="bg-card p-7">
              <span className="font-mono text-xs text-primary">{p.step}</span>
              <p className="font-display mt-4 text-xl leading-tight">{p.title}</p>
              <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <SectionHead eyebrow="Pricing" title="Pricing tailored for this service." />
        <div className="grid gap-6 lg:grid-cols-3">
          {(servicePricing[s.slug] ?? PRICING).map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`flex h-full flex-col rounded-[2rem] p-9 ${
                  p.featured
                    ? "bg-ink text-background shadow-lift lg:-translate-y-4"
                    : "card-lux"
                }`}
              >
                <p className={`eyebrow ${p.featured ? "text-background/60" : ""}`}>{p.name}</p>
                <p className="font-display mt-5 text-5xl">{p.price}</p>
                <p
                  className={`mt-1 text-xs ${
                    p.featured ? "text-background/55" : "text-muted-foreground"
                  }`}
                >
                  {p.cadence}
                </p>
                <p
                  className={`mt-6 text-sm ${
                    p.featured ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {p.tagline}
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className={p.featured ? "text-background/80" : "text-muted-foreground"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-9 rounded-full px-6 py-3.5 text-center text-sm font-semibold transition-transform hover:-translate-y-0.5 ${
                    p.featured
                      ? "bg-background text-foreground"
                      : "bg-ink text-background"
                  }`}
                >
                  {p.price === "Bespoke" ? "Talk to us" : "Reserve a squad"}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-lux pb-24">
        <SectionHead eyebrow="FAQs" title="Questions we're asked before signing." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.slice(0, 4).map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="font-display flex cursor-pointer items-center justify-between gap-6 text-xl">
                {f.q}
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-open:rotate-90" />
              </summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaBand title={`Let's talk about ${s.title.toLowerCase()}.`} />
    </>
  );
}
