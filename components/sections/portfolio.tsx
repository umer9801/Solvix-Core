"use client"

import Image from "next/image"
import { useState } from "react"

const items = [
  { title: "AI Support Agent", tag: "OpenAI Agent SDK", img: "/ai-support-agent.jpg" },
  { title: "Docs RAG Search", tag: "LangChain", img: "/rag-search-app.jpg" },
  { title: "E‑commerce Redesign", tag: "Customized Websites", img: "/ecommerce-redesign.jpg" },
  { title: "Telemetry Dashboard", tag: "Application Development", img: "/telemetry-dashboard.jpg" },
  { title: "Promo Edit", tag: "Video Editing", img: "/promo-video-edit.jpg" },
  { title: "Brand System", tag: "Graphic Designing", img: "/brand-system.jpg" },
]

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false)
  const toRender = showAll ? items : items.slice(0, 3)

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">Portfolio — Our Work</h2>
      </div>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {toRender.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-lg border border-border bg-card shadow-md hover:shadow-lg transition-all duration-300 card-glow">
            <div className="relative aspect-[16/9]">
              <Image
                src={p.img || "/placeholder.svg?height=400&width=640&query=project+cover"}
                alt={p.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-sm text-muted-foreground">{p.tag}</p>
              <h3 className="mt-1 text-base font-semibold">{p.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
          <button
            className="px-5 py-2 rounded-lg btn-glow btn-float text-sm font-semibold text-primary-foreground bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
            onClick={() => setShowAll((v) => !v)}
            aria-expanded={showAll}
          >
            {showAll ? "See less" : "See more"}
          </button>
      </div>
    </section>
  )
}
