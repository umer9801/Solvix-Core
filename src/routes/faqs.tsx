import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { FAQS } from "@/lib/site-data";
import heroAbstract from "@/assets/hero-abstract.jpg";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — Working with Solvix Core" },
      {
        name: "description",
        content:
          "How projects start, how we price, who owns the IP, how quickly we can begin, and what happens after launch — all your questions answered.",
      },
      { property: "og:title", content: "FAQs — Working with Solvix Core" },
      { property: "og:description", content: "Straight answers to the questions we get most." },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Straight answers, before you ask."
        body="Everything you want to know before starting a project — from pricing to ownership to timelines."
        image={heroAbstract}
        imageAlt="Frequently asked questions"
      />
      <section className="container-lux pb-24">
        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group py-7">
                <summary className="font-display flex cursor-pointer items-start justify-between gap-8 text-2xl leading-tight">
                  {f.q}
                  <Plus className="mt-1 h-5 w-5 shrink-0 text-primary transition-transform duration-500 group-open:rotate-45" />
                </summary>
                <p className="mt-4 leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand eyebrow="Still curious" title="Ask us something harder." />
    </>
  );
}
