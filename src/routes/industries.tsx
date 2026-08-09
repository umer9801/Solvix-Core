import { createFileRoute } from "@tanstack/react-router";
import { CtaBand } from "@/components/site/Footer";
import { Blobs, Reveal, SectionHead } from "@/components/site/primitives";
import { INDUSTRIES } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve Globally | Solvix Core" },
      {
        name: "description",
        content:
          "E-commerce, healthcare, finance, real estate, education, logistics and more — Solvix Core delivers proven tech solutions for businesses in every industry worldwide.",
      },
      { name: "keywords", content: "e-commerce web development, healthcare software, fintech development, real estate website, education platform, logistics software, retail POS system" },
      { property: "og:title", content: "Industries We Serve Globally | Solvix Core" },
      { property: "og:description", content: "Technology solutions for every industry — e-commerce, healthcare, finance, real estate and more." },
    ],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-10 md:pb-20 md:pt-14">
        <Blobs />
        <div className="container-lux">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/8 px-4 py-1.5 text-xs font-semibold uppercase text-primary">
              Industries
            </span>
            <h1 className="display-xl mt-8">
              Domain knowledge you don't have to pay us to acquire.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              We specialise in industries where the rules are strict, the data is messy and failure is expensive.
            </p>
          </div>
        </div>
      </section>
      <section className="container-lux py-12">
        <SectionHead
          eyebrow="Sector focus"
          title="Every engagement starts with your industry context."
          body="We help teams in retail, healthcare, finance, real estate, education and logistics move faster with systems that understand their workflows, compliance and customer expectations."
        />
      </section>
      <section className="container-lux pb-24">
        <div className="grid gap-5 md:grid-cols-2">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.05}>
              <div className="group card-lux relative h-full overflow-hidden rounded-[2rem] p-9 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -right-6 -top-8 font-display text-[7rem] leading-none text-foreground/[0.04]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="display-md">{ind.name}</h2>
                <p className="mt-4 max-w-sm text-muted-foreground">{ind.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand eyebrow="Your sector" title="Tell us about the constraints you work inside." />
    </>
  );
}
