import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { TECHNOLOGIES } from "@/lib/site-data";
import project3 from "@/assets/project-3.jpg";

export const Route = createFileRoute("/technologies")({
  head: () => ({
    meta: [
      { title: "Tech Stack — React, Next.js, AI, Shopify & More | Solvix Core" },
      {
        name: "description",
        content:
          "Solvix Core builds with React, Next.js, TypeScript, Python, OpenAI, LangChain, n8n, Shopify, AWS and more — modern technologies chosen for performance and reliability.",
      },
      { name: "keywords", content: "React developer, Next.js development, TypeScript developer, Python AI developer, OpenAI developer, LangChain developer, Shopify developer, AWS cloud, n8n automation" },
      { property: "og:title", content: "Our Technology Stack | Solvix Core" },
      { property: "og:description", content: "React, Next.js, AI, Shopify and cloud technologies — modern stack for modern businesses." },
    ],
  }),
  component: Technologies,
});

function Technologies() {
  return (
    <>
      <PageHero
        eyebrow="Technologies"
        title="Chosen for the next five years, not this quarter."
        body="We keep a deliberately small, deeply known stack — and we're honest when your problem needs something outside it."
        heroNote="Our stack is optimized for reliability, maintainability and lower ongoing cost — not vendor marketing."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Focused stack</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We choose tools that reduce long-term maintenance, not the ones that win awards.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Built for scale</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Our infrastructure decisions are guided by reliability, cost and the customer experience.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Honest tradeoffs</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We tell you when a new tool matters and when it only adds complexity.
            </p>
          </div>
        </div>
      </PageHero>
      <section className="container-lux pb-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {TECHNOLOGIES.map((t, i) => (
            <Reveal key={t.group} delay={i * 0.06}>
              <div className="card-lux h-full rounded-[2rem] p-9">
                <div className="flex items-baseline justify-between">
                  <h2 className="display-md">{t.group}</h2>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-7 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-full bg-surface px-4 py-2 font-mono text-xs text-muted-foreground"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-border bg-surface py-24">
        <div className="container-lux grid gap-14 lg:grid-cols-2 lg:items-center">
          <SectionHead
            eyebrow="Architecture"
            title="Infrastructure that stays boring under load."
            body="Multi-region by default where it earns its cost, single-region where it doesn't. Every architectural decision comes with a written record and a price tag."
          />
          <Reveal delay={0.1}>
            <img
              src={project3}
              alt="Abstract cloud infrastructure illustration"
              loading="lazy"
              width={1200}
              height={1008}
              className="w-full rounded-[2rem] border border-border"
            />
          </Reveal>
        </div>
      </section>
      <CtaBand eyebrow="Stack review" title="Have us audit what you're running today." />
    </>
  );
}
