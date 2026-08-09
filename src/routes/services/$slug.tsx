import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { FAQS, PRICING, PROJECTS, SERVICES, TECHNOLOGIES, PROCESS } from "@/lib/site-data";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import aiSolutions from "@/assets/ai-solutions.jpeg";
import appDevelopment from "@/assets/app-development.jpeg";
import contentCreation from "@/assets/content-creation.PNG";
import crmImage from "@/assets/crm.jpeg";
import langchainImage from "@/assets/langchain.PNG";
import marketingImage from "@/assets/marketing.PNG";
import n8nImage from "@/assets/n8n.jpeg";
import openAiImage from "@/assets/openAi.jpeg";
import posPortfolio from "@/assets/pos-portfolio.jpeg";
import shopifyImage from "@/assets/shopify-store.jpeg";
import webDevelopment from "@/assets/web-development.PNG";
import officeTeam from "@/assets/office-team.jpg";

const images: Record<string, string> = {
  "project-1": project1,
  "project-2": project2,
  "project-3": project3,
};

const heroImages: Record<string, string> = {
  "ai-solutions": aiSolutions,
  "n8n-automation": n8nImage,
  "web-development": webDevelopment,
  "shopify-store-design": shopifyImage,
  "mobile-app-development": appDevelopment,
  "content-creation": contentCreation,
  "marketing-seo": marketingImage,
  "langchain-integration": langchainImage,
  "openai-integration": openAiImage,
  "pos-systems": posPortfolio,
  "crm-development": crmImage,
};

const servicePricing: Record<string, typeof PRICING> = {
  "ai-solutions": [
    {
      name: "Starter",
      price: "$1,500",
      cadence: "USD / one-time",
      tagline: "Ideal for businesses exploring AI for the first time.",
      featured: false,
      features: [
        "AI strategy consultation",
        "1 custom AI feature integration",
        "OpenAI or LangChain setup",
        "Basic prompt engineering",
        "30 days support",
      ],
    },
    {
      name: "Professional",
      price: "$4,500",
      cadence: "USD / one-time",
      tagline: "A complete AI solution for real business operations.",
      featured: true,
      features: [
        "Custom AI model pipeline",
        "Up to 3 AI features",
        "RAG / knowledge base setup",
        "API integration with your system",
        "Performance monitoring setup",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "Full-scale AI transformation for complex operations.",
      featured: false,
      features: [
        "Multi-agent AI architecture",
        "Unlimited features & integrations",
        "Enterprise security & compliance",
        "Dedicated AI consultant",
        "1 year support & maintenance",
      ],
    },
  ],
  "n8n-automation": [
    {
      name: "Starter",
      price: "$500",
      cadence: "USD / one-time",
      tagline: "Automate your first workflow and save hours every week.",
      featured: false,
      features: [
        "n8n setup & configuration",
        "Up to 3 automation workflows",
        "App integrations (email, CRM, Sheets)",
        "Error handling & alerts",
        "30 days support",
      ],
    },
    {
      name: "Professional",
      price: "$1,800",
      cadence: "USD / one-time",
      tagline: "Multi-system automation that runs your business 24/7.",
      featured: true,
      features: [
        "Up to 10 complex workflows",
        "Advanced API integrations",
        "Conditional logic & retry handling",
        "Webhook & scheduler setup",
        "Custom node development",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "A fully managed automation platform built for scale.",
      featured: false,
      features: [
        "Unlimited workflows",
        "n8n self-hosted deployment",
        "Enterprise security setup",
        "Team training & documentation",
        "1 year support & maintenance",
      ],
    },
  ],
  "web-development": [
    {
      name: "Starter",
      price: "$800",
      cadence: "USD / one-time",
      tagline: "A professional website that represents your business online.",
      featured: false,
      features: [
        "Up to 6 pages",
        "Mobile-responsive design",
        "Contact form & basic SEO",
        "Google Analytics integration",
        "30 days support",
      ],
    },
    {
      name: "Professional",
      price: "$2,500",
      cadence: "USD / one-time",
      tagline: "A powerful web platform built for growth.",
      featured: true,
      features: [
        "Up to 15 pages",
        "Custom UI/UX design",
        "CMS integration (blog, products)",
        "Advanced SEO optimisation",
        "Performance & speed optimisation",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "A full-scale web application for complex business needs.",
      featured: false,
      features: [
        "Custom web application",
        "User authentication & dashboard",
        "Third-party API integrations",
        "Dedicated project manager",
        "1 year support & maintenance",
      ],
    },
  ],
  "shopify-store-design": [
    {
      name: "Starter",
      price: "$700",
      cadence: "USD / one-time",
      tagline: "A clean, converting Shopify store ready to sell.",
      featured: false,
      features: [
        "Shopify store setup",
        "Theme customisation",
        "Up to 50 products uploaded",
        "Payment gateway setup",
        "Mobile-responsive design",
        "30 days support",
      ],
    },
    {
      name: "Professional",
      price: "$2,200",
      cadence: "USD / one-time",
      tagline: "A fully branded store built for conversion and growth.",
      featured: true,
      features: [
        "Custom Shopify theme",
        "Up to 200 products",
        "Advanced checkout optimisation",
        "Email marketing setup",
        "App integrations",
        "SEO & analytics setup",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "A scalable e-commerce platform for serious retail.",
      featured: false,
      features: [
        "Shopify Plus / headless setup",
        "Multi-channel integration",
        "Custom app development",
        "Inventory management system",
        "1 year support & maintenance",
      ],
    },
  ],
  "mobile-app-development": [
    {
      name: "MVP",
      price: "$3,500",
      cadence: "USD / one-time",
      tagline: "Launch your app idea fast with a polished MVP.",
      featured: false,
      features: [
        "iOS or Android (single platform)",
        "Up to 5 core features",
        "Custom UI/UX design",
        "API integration",
        "App store deployment",
        "30 days support",
      ],
    },
    {
      name: "Full App",
      price: "$8,000",
      cadence: "USD / one-time",
      tagline: "A fully featured cross-platform app built to scale.",
      featured: true,
      features: [
        "iOS & Android apps",
        "Up to 12 features",
        "Backend development",
        "Push notifications",
        "Analytics integration",
        "App store deployment",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "A mobile platform engineered for long-term growth.",
      featured: false,
      features: [
        "Unlimited features",
        "Real-time & offline sync",
        "Advanced security & auth",
        "Admin dashboard",
        "1 year support & maintenance",
      ],
    },
  ],
  "content-creation": [
    {
      name: "Starter",
      price: "$300",
      cadence: "USD / month",
      tagline: "Regular content to keep your brand active online.",
      featured: false,
      features: [
        "8 social media posts/month",
        "Captions & hashtags",
        "2 platforms (Facebook, Instagram)",
        "Basic graphics",
        "Monthly revision",
      ],
    },
    {
      name: "Professional",
      price: "$700",
      cadence: "USD / month",
      tagline: "A consistent content strategy that builds your audience.",
      featured: true,
      features: [
        "20 social media posts/month",
        "4 platforms covered",
        "Custom graphic design",
        "2 short videos/month",
        "Monthly analytics report",
        "Content calendar",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "Full-service content production for rapid brand growth.",
      featured: false,
      features: [
        "Unlimited posts & platforms",
        "Long-form video production",
        "Blog writing & SEO content",
        "Ad creatives included",
        "Dedicated content manager",
      ],
    },
  ],
  "marketing-seo": [
    {
      name: "Starter",
      price: "$400",
      cadence: "USD / month",
      tagline: "Get found online and start generating leads.",
      featured: false,
      features: [
        "On-page SEO optimisation",
        "4–6 target keywords",
        "Google Business setup",
        "Monthly performance report",
        "Basic technical SEO fixes",
      ],
    },
    {
      name: "Professional",
      price: "$1,000",
      cadence: "USD / month",
      tagline: "A complete SEO & marketing program for consistent growth.",
      featured: true,
      features: [
        "Full technical SEO audit",
        "12–15 keywords targeted",
        "4 blog posts/month",
        "Google Ads management",
        "Backlink building",
        "Competitor analysis",
        "Monthly strategy call",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "Aggressive growth marketing for market-leading brands.",
      featured: false,
      features: [
        "30+ keywords",
        "Full paid media management",
        "8 blog posts/month",
        "Social ads + Google Ads",
        "Dedicated marketing manager",
      ],
    },
  ],
  "langchain-integration": [
    {
      name: "Starter",
      price: "$1,200",
      cadence: "USD / one-time",
      tagline: "Build your first LangChain-powered AI application.",
      featured: false,
      features: [
        "LangChain setup & integration",
        "Document Q&A / chatbot",
        "Vector database setup",
        "Up to 3 AI chains",
        "30 days support",
      ],
    },
    {
      name: "Professional",
      price: "$3,500",
      cadence: "USD / one-time",
      tagline: "Advanced LangChain agents for real operational workflows.",
      featured: true,
      features: [
        "Custom AI agents",
        "Multi-document processing",
        "Advanced memory & context",
        "API development",
        "Up to 10 chains",
        "Performance optimisation",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "Enterprise LangChain platform with full governance.",
      featured: false,
      features: [
        "Multi-agent systems",
        "Custom model fine-tuning",
        "Enterprise security & RAG",
        "Scalable architecture",
        "1 year support & maintenance",
      ],
    },
  ],
  "openai-integration": [
    {
      name: "Starter",
      price: "$900",
      cadence: "USD / one-time",
      tagline: "Add a powerful AI feature to your existing product.",
      featured: false,
      features: [
        "OpenAI API integration",
        "GPT-powered chat or feature",
        "Basic prompt engineering",
        "Usage & cost monitoring",
        "30 days support",
      ],
    },
    {
      name: "Professional",
      price: "$2,800",
      cadence: "USD / one-time",
      tagline: "A complete OpenAI-powered product that users love.",
      featured: true,
      features: [
        "Custom GPT implementation",
        "Function calling & tools",
        "DALL-E or Whisper integration",
        "Up to 5 AI features",
        "Cost optimisation",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "Full OpenAI platform with security and compliance.",
      featured: false,
      features: [
        "Multi-modal AI (text, image, audio)",
        "Custom assistants & fine-tuning",
        "Enterprise security & PII controls",
        "Performance monitoring",
        "1 year support & maintenance",
      ],
    },
  ],
  "pos-systems": [
    {
      name: "Basic POS",
      price: "$600",
      cadence: "USD / one-time",
      tagline: "A simple, reliable POS to replace paper-based checkout.",
      featured: false,
      features: [
        "Tablet-based POS system",
        "Barcode scanning",
        "Product & category management",
        "Daily sales reports",
        "30 days support",
      ],
    },
    {
      name: "Full POS",
      price: "$1,800",
      cadence: "USD / one-time",
      tagline: "A complete retail solution with inventory & reporting.",
      featured: true,
      features: [
        "Full POS system",
        "Real-time inventory tracking",
        "Low-stock alerts",
        "Customer management",
        "Sales analytics dashboard",
        "Multi-user access",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "A multi-location retail platform built for scale.",
      featured: false,
      features: [
        "Multi-location inventory sync",
        "Custom checkout flows",
        "Loyalty & payments integration",
        "ERP / accounting integration",
        "1 year support & maintenance",
      ],
    },
  ],
  "crm-development": [
    {
      name: "Starter CRM",
      price: "$1,000",
      cadence: "USD / one-time",
      tagline: "A simple CRM to manage your leads and clients.",
      featured: false,
      features: [
        "Contact & lead management",
        "Pipeline tracking",
        "Email integration",
        "Notes & activity log",
        "30 days support",
      ],
    },
    {
      name: "Custom CRM",
      price: "$3,200",
      cadence: "USD / one-time",
      tagline: "A fully custom CRM built around your sales process.",
      featured: true,
      features: [
        "Custom pipeline & stages",
        "Automated follow-up reminders",
        "Reports & sales dashboard",
        "Role-based access",
        "Third-party integrations",
        "Mobile-responsive",
        "90 days support",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      cadence: "USD / tailored quote",
      tagline: "A full CRM platform integrated with your entire stack.",
      featured: false,
      features: [
        "Advanced automation workflows",
        "Marketing & email campaigns",
        "Custom reporting & analytics",
        "API integrations",
        "1 year support & maintenance",
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
        image={heroImages[s.slug] ?? officeTeam}
        imageAlt={s.title}
        landscape={s.slug === "n8n-automation"}
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
