import { createFileRoute } from "@tanstack/react-router";
import { Plus } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import { FAQS } from "@/lib/site-data";

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
        body="If something isn't covered here, ask us directly — we'd rather answer than posture."
        heroNote="Clear, direct responses to the questions we hear most from decision-makers and project leaders."
      >
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Fast clarity</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              These answers are written for teams deciding whether to start a real project.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">No fluff</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              We avoid jargon and explain what you need to know about process, pricing and ownership.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-8">
            <p className="eyebrow">Decision-ready</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              If you still have a question, it means you’re close to making a good choice.
            </p>
          </div>
        </div>
      </PageHero>
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
