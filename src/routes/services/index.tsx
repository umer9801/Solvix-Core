import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { accentBg, Reveal, SpotlightCard } from "@/components/site/primitives";
import { SERVICES } from "@/lib/site-data";

const GROUPS = ["All", "Build", "Design", "Intelligence", "Platforms", "Infrastructure", "Growth"];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — AI, Web, Shopify, Automation & More | Solvix Core" },
      {
        name: "description",
        content:
          "Nine core services across AI, automation, web development, Shopify, app development and marketing — delivered for businesses in Canada, UK and Pakistan.",
      },
      { property: "og:title", content: "Services — AI, Web, Shopify & More | Solvix Core" },
      {
        property: "og:description",
        content: "Twenty-two capabilities, one delivery standard.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  const [group, setGroup] = useState("All");
  const list = group === "All" ? SERVICES : SERVICES.filter((s) => s.group === group);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything you need to grow your business online."
        body="Nine core services across AI, automation, web development, Shopify and marketing — all delivered at 35% below market rates."
        heroNote="Choose the capability your business needs today, and we'll wrap it in the delivery, governance and quality controls that make it work."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-border bg-card p-7">
            <p className="eyebrow">Choose with confidence</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We help you land on the right service by focusing on the outcome first, not the feature list.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-7">
            <p className="eyebrow">Built for production</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Every service is scoped for a working launch, clear next steps, and a path to scale once it proves value.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-7">
            <p className="eyebrow">Faster handover</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Documentation, training and support are included so your team can run the system confidently.
            </p>
          </div>
        </div>
      </PageHero>

      <section className="container-lux pb-24">
        <div className="sticky top-24 z-20 -mx-1 mb-12 flex gap-2 overflow-x-auto rounded-full border border-border bg-card/80 p-1.5 backdrop-blur-xl">
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                group === g
                  ? "bg-ink text-background"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 6) * 0.05}>
              <SpotlightCard className="card-lux group h-full rounded-[1.75rem] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <Link
                  to={`/services/${s.slug}`}
                  className="flex h-full flex-col p-8"
                >
                  <div className="flex items-start justify-between">
                    <span className={`h-10 w-10 rounded-2xl ${accentBg[s.accent]}`} />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="eyebrow mt-8">{s.group}</p>
                  <h2 className="font-display mt-2 text-2xl leading-tight">{s.title}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.blurb}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Not sure where to start"
        title="Bring us the problem, not the spec."
        body="Half of our engagements begin with a client unsure which capability they need. Diagnosing that is part of the work."
      />
    </>
  );
}
