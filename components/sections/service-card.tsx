"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Bot, 
  Code, 
  Globe, 
  Cpu, 
  Video, 
  Palette, 
  PenTool, 
  ShoppingCart,
  ArrowRight,
  Zap
} from "lucide-react"
import { memo } from "react"

// Icon and color mapping for different services
const getServiceIcon = (title: string) => {
  const iconMap: { [key: string]: any } = {
    "N&N": Bot,
    "LangChain": Zap,
    "Customized Websites": Globe,
    "OpenAI Agent SDK": Cpu,
    "AI/ML": Bot,
    "Application Development": Code,
    "Video Editing": Video,
    "Graphic Designing": Palette,
    "Content Creation": PenTool,
    "Shopify Store Designing": ShoppingCart,
  }
  
  return iconMap[title] || Code
}

const getServiceColors = (title: string) => {
  const colorMap: { [key: string]: { gradient: string, hover: string, text: string } } = {
    "N&N": { 
      gradient: "from-purple-500 to-pink-500", 
      hover: "hover:shadow-purple-500/25 hover:border-purple-400/40",
      text: "group-hover:text-purple-400"
    },
    "LangChain": { 
      gradient: "from-yellow-500 to-orange-500", 
      hover: "hover:shadow-yellow-500/25 hover:border-yellow-400/40",
      text: "group-hover:text-yellow-400"
    },
    "Customized Websites": { 
      gradient: "from-blue-500 to-cyan-500", 
      hover: "hover:shadow-blue-500/25 hover:border-blue-400/40",
      text: "group-hover:text-blue-400"
    },
    "OpenAI Agent SDK": { 
      gradient: "from-green-500 to-emerald-500", 
      hover: "hover:shadow-green-500/25 hover:border-green-400/40",
      text: "group-hover:text-green-400"
    },
    "AI/ML": { 
      gradient: "from-indigo-500 to-purple-500", 
      hover: "hover:shadow-indigo-500/25 hover:border-indigo-400/40",
      text: "group-hover:text-indigo-400"
    },
    "Application Development": { 
      gradient: "from-red-500 to-pink-500", 
      hover: "hover:shadow-red-500/25 hover:border-red-400/40",
      text: "group-hover:text-red-400"
    },
    "Video Editing": { 
      gradient: "from-teal-500 to-cyan-500", 
      hover: "hover:shadow-teal-500/25 hover:border-teal-400/40",
      text: "group-hover:text-teal-400"
    },
    "Graphic Designing": { 
      gradient: "from-pink-500 to-rose-500", 
      hover: "hover:shadow-pink-500/25 hover:border-pink-400/40",
      text: "group-hover:text-pink-400"
    },
    "Content Creation": { 
      gradient: "from-violet-500 to-purple-500", 
      hover: "hover:shadow-violet-500/25 hover:border-violet-400/40",
      text: "group-hover:text-violet-400"
    },
    "Shopify Store Designing": { 
      gradient: "from-emerald-500 to-teal-500", 
      hover: "hover:shadow-emerald-500/25 hover:border-emerald-400/40",
      text: "group-hover:text-emerald-400"
    },
  }
  
  return colorMap[title] || { 
    gradient: "from-blue-500 to-cyan-500", 
    hover: "hover:shadow-blue-500/25 hover:border-blue-400/40",
    text: "group-hover:text-blue-400"
  }
}

const ServiceCard = memo(function ServiceCard({
  title,
  description,
  href,
}: {
  title: string
  description: string
  href: string
}) {
  const IconComponent = getServiceIcon(title)
  const colors = getServiceColors(title)
  
  return (
    <Link href={href} className="group block h-full perf-optimized">
      <Card className={`service-card h-full bg-white/90 border border-gray-200 shadow-lg ${colors.hover} transition-all duration-300 hover:scale-[1.02] active:scale-[1.01] relative overflow-hidden no-layout-shift`}>
        {/* Simplified gradient overlay for mobile performance */}
        <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-3 transition-opacity duration-300`} />
        
        <CardHeader className="relative z-10 pb-4 p-6">
          {/* Optimized Icon */}
          <div className={`service-card-icon w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200 shadow-md`}>
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          
          <CardTitle className={`service-text text-gray-800 text-lg font-bold ${colors.text} transition-colors duration-200`}>
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative z-10 pb-6 px-6">
          <p className="text-gray-600 leading-relaxed mb-4 text-sm line-clamp-3">
            {description}
          </p>
          
          {/* Simplified Learn More Link */}
          <div className={`flex items-center font-medium ${colors.text} transition-colors duration-200`}>
            <span className="text-sm">Explore Service</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform duration-200" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
})

export default ServiceCard
