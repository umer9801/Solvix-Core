"use client"

import { useState, useEffect } from "react"
import LoadingScreen from "./loading-screen"
import SiteNavbar from "./site-navbar"
import SiteFooter from "./site-footer"
import { SimpleCountryProvider } from "@/lib/simple-country-context"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    // Simplified loading logic - only for first-time visitors
    if (typeof window !== 'undefined') {
      try {
        const hasVisited = sessionStorage.getItem('solvix_visited')
        
        if (!hasVisited) {
          setIsLoading(true)
          sessionStorage.setItem('solvix_visited', 'true')
        }
      } catch (error) {
        // If sessionStorage fails, just skip loading screen
        console.log('SessionStorage not available')
      }
    }
  }, [])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {/* Show loading screen only if mounted and loading */}
      {isMounted && isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}
      
      {/* Always show content, but hide during loading */}
      <div className={isLoading && isMounted ? 'hidden' : 'block'}>
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200/50">
          <SiteNavbar />
        </header>
        
        <main className="min-h-screen">{children}</main>
        
        <SiteFooter />
      </div>
    </>
  )
}