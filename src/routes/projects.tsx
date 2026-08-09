import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { PROJECTS } from "@/lib/site-data";
import webPortfolio from "@/assets/web-portfolio.png";
import posPortfolio from "@/assets/pos-portfolio.jpeg";
import project3 from "@/assets/project-3.jpg";
import officeTeam from "@/assets/office-team.jpg";

const images: Record<string, string> = {
  "project-1": webPortfolio,
  "project-2": posPortfolio,
  "project-3": project3,
};

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Selected Work | Solvix Core" },
      {
        name: "description",
        content:
          "AI platforms, Shopify stores, web applications and automation systems delivered by Solvix Core for clients in Canada, UK and Pakistan.",
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
        eyebrow="Our Work"
        title="Projects that drive real business results."
        body="A selection of AI, automation, web and e-commerce projects delivered for clients across Canada, UK and Pakistan."
        image={officeTeam}
        imageAlt="Solvix Core projects"
      />

      <section className="container-lux pb-24">
        <div className="space-y-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <Link
                to="/case-studies/$slug"
                params={{ slug: p.slug }}
                className="group grid items-center gap-8 overflow-hidden rounded-[2rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:shadow-lift md:grid-cols-[1.1fr_1fr]"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="overflow-hidden bg-surface">
                    <img
                      src={images[p.image] ?? project3}
                      alt={p.title}
                      loading="lazy"
                      width={700}
                      height={560}
                      className="aspect-[4/3] w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                    />
                  </div>
                </div>
                <div className="p-8 md:px-10">
                  <p className="eyebrow">{p.sector} · {p.year}</p>
                  <h2 className="display-md mt-3">{p.title}</h2>
                  <p className="mt-4 text-muted-foreground">{p.summary}</p>
                  <p className="mt-5 inline-block rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold text-primary">
                    {p.metric}
                  </p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
                    Read case study
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand eyebrow="Your project" title="The next one on this page could be yours." />
    </>
  );
}
