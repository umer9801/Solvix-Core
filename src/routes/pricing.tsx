import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal, SectionHead } from "@/components/site/primitives";
import { FAQS, PRICING } from "@/lib/site-data";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Transparent Plans in CAD | Solvix Core" },
      {
        name: "description",
        content:
          "Clear, honest pricing for all Solvix Core services — 35% below market rates, quoted in Canadian Dollars.",
      },
      { property: "og:title", content: "Pricing — Plans in CAD | Solvix Core" },
      { property: "og:description", content: "Transparent pricing, 35% below market, all in CAD." },
    ],
  }),
  component: Pricing,
});

function Pricing() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Fixed capacity. Flexible roadmap. No surprises."
        body="We sell teams, not tickets. You get a known monthly cost and the right to change your mind about what we build."
      />
      <section className="container-lux pb-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {PRICING.map((p, i) => (
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
                  className={`mt-1 text-xs ${p.featured ? "text-background/55" : "text-muted-foreground"}`}
                >
                  {p.cadence}
                </p>
                <p
                  className={`mt-6 text-sm ${p.featured ? "text-background/70" : "text-muted-foreground"}`}
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
        <SectionHead eyebrow="Fine print" title="The questions behind the numbers." />
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQS.slice(0, 4).map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="font-display cursor-pointer text-xl">{f.q}</summary>
              <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
      <CtaBand eyebrow="Budgeting" title="Need a number for the board this week?" />
    </>
  );
}
