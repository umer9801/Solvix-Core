import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { PROJECTS } from "@/lib/site-data";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import webPortfolio from "@/assets/web-portfolio.png";
import posPortfolio from "@/assets/pos-portfolio.jpeg";

const images: Record<string, string> = {
  "project-1": webPortfolio,
  "project-2": posPortfolio,
  "project-3": project3,
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work — Projects & Case Studies | Solvix Core" },
      {
        name: "description",
        content:
          "A portfolio of AI platforms, Shopify stores, web applications and automation systems delivered by Solvix Core for clients in Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "Selected Work | Solvix Core" },
      { property: "og:description", content: "AI, e-commerce, automation and web projects." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Systems that carry real businesses."
        body="A small selection. Much of our work sits behind NDAs inside regulated industries — we'll walk you through it in person."
        heroNote="Selected projects that show how we make complex operations simpler, safer and more profitable."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Real results</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These case stories are chosen for the real business outcomes they delivered.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Regulated industries</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We build systems for clients in sectors where reliability and compliance matter.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Talk-through</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Most of our work is shown privately — these examples are the ones we can share publicly.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="container-lux pb-24">
        <div className="grid gap-6 lg:grid-cols-12">
          {PROJECTS.map((p, i) => (
            <Reveal
              key={p.slug}
              delay={i * 0.08}
              className={i === 0 ? "lg:col-span-12" : "lg:col-span-6"}
            >
              <Link
                to="/case-studies/$slug"
                params={{ slug: p.slug }}
                className="group block overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="overflow-hidden bg-surface">
                  <img
                    src={images[p.image]}
                    alt={p.title}
                    loading="lazy"
                    width={1200}
                    height={1008}
                    className={`w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 ${
                      i === 0 ? "aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  />
                </div>
                <div className="flex flex-wrap items-end justify-between gap-6 p-8">
                  <div>
                    <p className="eyebrow">
                      {p.sector} · {p.year}
                    </p>
                    <h2 className="display-md mt-3">{p.title}</h2>
                    <p className="mt-3 max-w-lg text-muted-foreground">{p.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground">
                    {p.metric}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
          <Reveal className="lg:col-span-12">
            <div className="grain relative overflow-hidden rounded-[2rem] border border-border bg-surface-2 p-8 md:p-12">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <p className="eyebrow">In progress</p>
                  <h2 className="display-md mt-3">Six more platforms shipping this year.</h2>
                  <p className="mt-4 max-w-md text-muted-foreground">
                    Treasury, clinical operations, grid analytics, retail POS, logistics visibility
                    and a developer platform. Ask us about any of them.
                  </p>
                </div>
                <img
                  src={dashboard}
                  alt="Analytics dashboard preview"
                  loading="lazy"
                  width={1408}
                  height={1008}
                  className="rounded-3xl border border-border shadow-lift"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand eyebrow="Your project" title="The next one on this page could be yours." />
    </>
  );
}
