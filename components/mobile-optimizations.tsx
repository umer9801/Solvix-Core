"use client"

import { useEffect } from 'react'

export default function MobileOptimizations() {
  useEffect(() => {
    // Mobile-specific optimizations
    if (typeof window !== 'undefined') {
      // Disable hover effects on touch devices
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      
      if (isTouchDevice) {
        document.documentElement.classList.add('touch-device')
      }

      // Optimize scrolling performance
      let ticking = false
      const updateScrollPosition = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-dependent elements here if needed
            ticking = false
          })
          ticking = true
        }
      }

      // Throttled scroll listener
      window.addEventListener('scroll', updateScrollPosition, { passive: true })

      // Preload critical resources based on connection
      if ('connection' in navigator) {
        const connection = (navigator as any).connection
        
        // Only preload video on fast connections
        if (connection.effectiveType === '4g' && !connection.saveData) {
          const videoPreload = document.createElement('link')
          videoPreload.rel = 'preload'
          videoPreload.href = '/videos/hero.mp4'
          videoPreload.as = 'video'
          document.head.appendChild(videoPreload)
        }
      }

      // Optimize images loading
      const images = document.querySelectorAll('img[loading="lazy"]')
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement
              img.src = img.dataset.src || img.src
              img.classList.remove('lazy')
              imageObserver.unobserve(img)
            }
          })
        })

        images.forEach((img) => imageObserver.observe(img))
      }

      // Memory cleanup
      return () => {
        window.removeEventListener('scroll', updateScrollPosition)
      }
    }
  }, [])

  return null
}