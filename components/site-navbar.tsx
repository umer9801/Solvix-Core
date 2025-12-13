"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import Image from "next/image"

import { Menu, X, ChevronDown, Globe } from "lucide-react"
import { useCountry, countryConfigs, type Country } from "@/lib/simple-country-context"

const services = [
  { label: "N&N", href: "/services/n-and-n" },
  { label: "LangChain", href: "/services/langchain" },
  { label: "Customized Websites", href: "/services/customized-websites" },
  { label: "OpenAI Agent SDK", href: "/services/openai-agent-sdk" },
  { label: "AI/ML", href: "/services/ai-ml" },
  { label: "Application Development", href: "/services/application-development" },
  { label: "Video Editing", href: "/services/video-editing" },
  { label: "Graphic Designing", href: "/services/graphic-designing" },
  { label: "Content Creation", href: "/services/content-creation" },
  { label: "Shopify Store Designing", href: "/services/shopify-store-designing" },
]

export default function SiteNavbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { country, setCountry, config } = useCountry()

  useEffect(() => {
    setMounted(true)
  }, [])

  const linkClass = (target: string) =>
    cn(
      "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 relative overflow-hidden",
      pathname === target
        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
        : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
    )

  return (
    <>
      {/* Modern Navbar */}
      <nav className="relative w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo - Larger Size */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Solvix Core"
                  width={48}
                  height={48}
                  className="rounded-lg transition-all duration-500 drop-shadow-lg group-hover:drop-shadow-xl group-hover:scale-110 logo-flip"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                Solvix Core
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="/" className={linkClass("/")}>
                Home
              </Link>
              
              <Link href="/about" className={linkClass("/about")}>
                About
              </Link>

              <DropdownMenu key="services-dropdown">
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300",
                      pathname.startsWith("/services")
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/25"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
                    )}
                  >
                    Services
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.href} asChild>
                      <Link
                        href={service.href}
                        className="w-full px-3 py-2 text-sm hover:bg-gray-100"
                      >
                        {service.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  <div className="border-t mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100"
                    >
                      View All Services
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link href="/blog" className={linkClass("/blog")}>
                Blog
              </Link>

              <Link href="/contact" className={linkClass("/contact")}>
                Contact
              </Link>

              {/* Country Selector */}
              {mounted && (
                <DropdownMenu key="country-dropdown">
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      className="px-3 py-2 text-sm font-medium rounded-xl transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50"
                    >
                      <Globe className="w-4 h-4 mr-2" />
                      {config.flag} {config.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    {Object.entries(countryConfigs).map(([key, countryConfig]) => (
                      <DropdownMenuItem 
                        key={key} 
                        onClick={() => setCountry(key as Country)}
                        className={cn(
                          "cursor-pointer",
                          country === key ? "bg-blue-50 text-blue-600" : ""
                        )}
                      >
                        <span className="mr-2">{countryConfig.flag}</span>
                        {countryConfig.name}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>

            {/* Modern Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-600 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white animate-in slide-in-from-top-2 duration-200"
            >
              <div className="px-4 py-4 space-y-2">
                <Link
                  href="/"
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg",
                    pathname === "/"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                
                <Link
                  href="/about"
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg",
                    pathname === "/about"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>

                {/* Services Dropdown for Mobile */}
                <div className="space-y-1">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-3 text-sm font-medium rounded-lg",
                      pathname.startsWith("/services")
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    Services
                    <ChevronDown className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      servicesOpen ? "rotate-180" : ""
                    )} />
                  </button>

                  {servicesOpen && (
                    <div className="pl-4 space-y-1 animate-in slide-in-from-top-1 duration-200"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg"
                            onClick={() => {
                              setIsOpen(false)
                              setServicesOpen(false)
                            }}
                          >
                            {service.label}
                          </Link>
                        ))}
                        <Link
                          href="/services"
                          className="block px-4 py-2 text-sm font-medium text-blue-600 hover:bg-gray-100 rounded-lg"
                          onClick={() => {
                            setIsOpen(false)
                            setServicesOpen(false)
                          }}
                        >
                          View All Services
                        </Link>
                      </div>
                    )}
                </div>

                <Link
                  href="/blog"
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg",
                    pathname === "/blog" || pathname.startsWith("/blog/")
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    "block px-4 py-3 text-sm font-medium rounded-lg",
                    pathname === "/contact"
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>

                {/* Mobile Country Selector - Dropdown Style */}
                {mounted && (
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <div className="px-4 py-2">
                      <div className="text-sm font-semibold text-gray-900 flex items-center mb-2">
                        <Globe className="w-4 h-4 mr-2" />
                        Select Country
                      </div>
                      <div className="relative">
                        <select
                          value={country}
                          onChange={(e) => {
                            setCountry(e.target.value as Country)
                            setIsOpen(false)
                          }}
                          className="w-full px-3 py-2 text-sm bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
                        >
                          {Object.entries(countryConfigs).map(([key, countryConfig]) => (
                            <option key={key} value={key}>
                              {countryConfig.flag} {countryConfig.name}
                            </option>
                          ))}
                        </select>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                          <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
      </nav>
    </>
  )
}