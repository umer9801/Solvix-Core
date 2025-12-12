"use client"

import Image from "next/image"

const items = [
  { 
    title: "AI Support Agent", 
    tag: "OpenAI Agent SDK", 
    img: "/ai-support-agent.jpg"
  },
  { 
    title: "Docs RAG Search", 
    tag: "LangChain", 
    img: "/rag-search-app.jpg"
  },
  { 
    title: "E‑commerce Redesign", 
    tag: "Customized Websites", 
    img: "/ecommerce-redesign.jpg"
  },
  { 
    title: "Telemetry Dashboard", 
    tag: "Application Development", 
    img: "/telemetry-dashboard.jpg"
  },
  { 
    title: "Promo Edit", 
    tag: "Video Editing", 
    img: "/promo-video-edit.jpg"
  },
  { 
    title: "Brand System", 
    tag: "Graphic Designing", 
    img: "/brand-system.jpg"
  },
]



export default function Portfolio() {
  // Create duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items]

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:pb-24 animate-fade-up">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground">Portfolio — Our Work</h2>
      </div>
      {/* Horizontal Auto Scrolling Carousel - Mobile Optimized */}
      <div className="mt-8 relative overflow-hidden">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        
        {/* Infinite Marquee Container - Mobile Optimized */}
        <div className="flex animate-marquee hover:pause-marquee hw-accelerate">
          {duplicatedItems.map((p, index) => (
            <div
              key={`${p.title}-${index}`}
              className="flex-shrink-0 w-72 md:w-80 mx-2 md:mx-4 animate-fade-in-up"
              style={{ 
                animationDelay: `${(index % items.length) * 0.05}s`,
                animationFillMode: 'both'
              }}
            >
              {/* Simplified card for better mobile performance */}
              <div className="group cursor-pointer rounded-xl border border-gray-200 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden h-full md:hover:scale-105">
                {/* Simplified content for better mobile performance */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-t-xl">
                  <Image
                    src={p.img || "/placeholder.svg?height=400&width=640&query=project+cover"}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Simple overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium">
                    {p.tag}
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative p-4 md:p-6">
                  <p className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                    {p.tag}
                  </p>
                  <h3 className="mt-2 text-lg md:text-xl font-bold text-gray-900">
                    {p.title}
                  </h3>
                  
                  {/* Action indicator - Desktop only */}
                  <div className="mt-3 hidden md:inline-flex items-center text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    View Project
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
