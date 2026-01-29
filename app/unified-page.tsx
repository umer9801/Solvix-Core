"use client"

import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { services } from "@/src/data/services"
import ServiceCard from "@/components/sections/service-card"
import WhySolvix from "@/components/sections/why"
import Portfolio from "@/components/sections/portfolio"

export default function UnifiedPage() {
  const router = useRouter()
  const [isMounted, setIsMounted] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  
  // Create duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services]

  useEffect(() => {
    setIsMounted(true)
    
    // Preload critical resources
    const preloadVideo = () => {
      const video = document.createElement('video')
      video.src = '/videos/hero.mp4'
      video.preload = 'metadata'
      video.onloadedmetadata = () => setVideoLoaded(true)
    }
    
    // Delay video preload to prioritize other resources
    const timer = setTimeout(preloadVideo, 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600" style={{ minHeight: '100vh', touchAction: 'pan-y' }}>
        {/* Video Background - Optimized loading */}
        {isMounted && (
          <div className="absolute inset-0 w-full h-full">
            {videoLoaded ? (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="hero-video w-full h-full object-cover"
                onError={(e) => {
                  // Fallback to gradient background if video fails
                  e.currentTarget.style.display = 'none';
                }}
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              // Placeholder while video loads
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600" />
            )}
            
            {/* Overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/30 z-10"></div>
          </div>
        )}

        {/* Hero Content - Unified for all devices */}
        <motion.div
          className="relative z-20 text-center px-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 drop-shadow-2xl px-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Business with{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Next-Gen AI
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl text-gray-100 mb-6 sm:mb-8 leading-relaxed font-medium drop-shadow-lg max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Comprehensive solutions spanning <span className="text-cyan-400">AI automation</span>, 
            <span className="text-blue-400"> modern development</span>, and 
            <span className="text-purple-400"> digital innovation</span> — empowering businesses to thrive in the digital age.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
              className="group relative px-8 py-4 rounded-full text-lg font-bold text-gray-900 
                         bg-white hover:bg-white/95
                         shadow-2xl hover:shadow-white/40 transition-all duration-500 
                         border border-white/30 backdrop-blur-sm min-w-[200px] overflow-hidden"
            >
              {/* Soft gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              
              {/* Button text */}
              <span className="relative z-10 group-hover:text-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Get Started Now
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/services")}
              className="px-8 py-4 rounded-full text-lg font-bold text-white 
                         bg-white/10 hover:bg-white/20 backdrop-blur-md
                         shadow-xl hover:shadow-2xl transition-all duration-300 
                         border border-white/30 min-w-[200px]"
            >
              Explore Services
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="relative mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Comprehensive solutions spanning <span className="text-cyan-400">AI automation</span>, 
            <span className="text-blue-400"> modern development</span>, and 
            <span className="text-purple-400"> digital innovation</span> — empowering businesses to thrive in the digital age.
          </motion.p>
        </motion.div>

        {/* Horizontal Auto Scrolling Services Carousel */}
        <div className="relative overflow-hidden">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
          
          {/* Infinite Services Marquee Container */}
          <div className="flex animate-services-marquee hover:pause-marquee hw-accelerate">
            {duplicatedServices.map((service, index) => (
              <motion.div
                key={`${service.slug}-${index}`}
                className="flex-shrink-0 w-72 md:w-80 mx-2 md:mx-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % services.length) * 0.1, duration: 0.6 }}
              >
                <ServiceCard 
                  title={service.title} 
                  description={service.short} 
                  href={`/services/${service.slug}`} 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Solvix Section */}
      <WhySolvix />

      {/* Portfolio Section */}
      <section className="relative mx-auto max-w-6xl px-4 pb-16 sm:pb-24">
        <Portfolio />
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto max-w-4xl px-4 py-16">
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-2xl font-bold mb-4 text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            className="text-muted-foreground mb-6 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Let's discuss how we can help you achieve your digital goals with cutting-edge solutions that drive real results.
          </motion.p>
          <motion.button
            onClick={() => router.push("/contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Contact Us Today
          </motion.button>
        </motion.div>
      </section>
    </>
  )
}