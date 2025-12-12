"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let completionTimeout: NodeJS.Timeout

    try {
      // Fast progress animation
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            return 100
          }
          return prev + 20 // Faster progress
        })
      }, 80)

      // Complete loading after progress reaches 100%
      completionTimeout = setTimeout(() => {
        setProgress(100)
        setTimeout(() => {
          setIsVisible(false)
          if (onLoadingComplete) {
            onLoadingComplete()
          }
        }, 300)
      }, 1500) // Complete in 1.5 seconds

    } catch (error) {
      console.error('Loading screen error:', error)
      // Immediate fallback
      if (onLoadingComplete) {
        onLoadingComplete()
      }
    }

    // Safety timeout - always complete within 2 seconds
    const safetyTimeout = setTimeout(() => {
      if (interval) clearInterval(interval)
      if (completionTimeout) clearTimeout(completionTimeout)
      setIsVisible(false)
      if (onLoadingComplete) {
        onLoadingComplete()
      }
    }, 2000)

    return () => {
      if (interval) clearInterval(interval)
      if (completionTimeout) clearTimeout(completionTimeout)
      clearTimeout(safetyTimeout)
    }
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Animated Logo Container */}
        <div className="relative">
          {/* Outer rotating ring */}
          <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-transparent border-t-blue-500 border-r-indigo-500 animate-spin"></div>
          
          {/* Middle pulsing ring */}
          <div className="absolute inset-2 w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 animate-pulse"></div>
          
          {/* Logo container with multiple animations */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-white to-blue-50 border-2 border-blue-200 flex items-center justify-center shadow-lg animate-logo-container">
            <Image
              src="/logo.png"
              alt="Solvix Core"
              width={100}
              height={100}
              className="w-20 h-20 md:w-24 md:h-24 object-contain animate-logo-main animate-logo-blink"
              priority
            />
          </div>
          
          {/* Floating particles */}
          <div className="absolute -top-2 -left-2 w-3 h-3 bg-blue-400 rounded-full animate-float-1"></div>
          <div className="absolute -top-1 -right-3 w-2 h-2 bg-indigo-400 rounded-full animate-float-2"></div>
          <div className="absolute -bottom-2 -left-3 w-2 h-2 bg-purple-400 rounded-full animate-float-3"></div>
          <div className="absolute -bottom-1 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-float-4"></div>
        </div>

        {/* Animated Company Name */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-text-glow">
            Solvix Core
          </h1>
          <p className="text-sm md:text-base text-gray-600 animate-fade-in-up">
            Transforming Ideas into Digital Reality...
          </p>
        </div>

        {/* Enhanced Progress Bar */}
        <div className="w-56 md:w-72 space-y-3">
          <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden shadow-inner">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-300 ease-out animate-progress-glow"
              style={{ width: `${progress}%` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
          <div className="text-center text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Animated Loading Dots */}
        <div className="flex space-x-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-bounce"
              style={{ 
                animationDelay: `${i * 0.15}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}