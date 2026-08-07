import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { CASE_STUDIES } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Real Results | Solvix Core" },
      {
        name: "description",
        content:
          "Detailed accounts of how Solvix Core delivered measurable results for clients in Canada, UK and Pakistan — challenge, approach and outcomes.",
      },
      { property: "og:title", content: "Case Studies | Solvix Core" },
      { property: "og:description", content: "Challenge, approach and measured results." },
    ],
  }),
  component: CaseStudies,
});

function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="What changed, and by how much."
        body="Each engagement is measured against numbers agreed before a line of code is written."
      />
      <section className="container-lux pb-24">
        {CASE_STUDIES.map((c, i) => (
          <Reveal key={c.slug} delay={i * 0.06}>
            <Link
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group grid gap-8 border-t border-border py-12 transition-colors hover:bg-card/50 lg:grid-cols-[0.35fr_1fr_0.6fr]"
            >
              <p className="eyebrow">{c.client}</p>
              <div>
                <h2 className="display-md transition-transform duration-500 group-hover:translate-x-2">
                  {c.title}
                </h2>
                <p className="mt-4 max-w-xl text-muted-foreground">{c.challenge}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read the study <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
              <div className="space-y-3">
                {c.results.map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-3xl">{r.k}</span>
                    <span className="text-right text-xs text-muted-foreground">{r.v}</span>
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </section>
      <CtaBand eyebrow="Diligence" title="Want references you can actually call?" />
    </>
  );
}
