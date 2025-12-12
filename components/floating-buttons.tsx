'use client'

import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCountry } from '@/lib/simple-country-context'

export default function FloatingButtons() {
  const { config } = useCountry()

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${config.whatsApp}?text=Hi! I'm interested in your services. Can we discuss my project?`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* WhatsApp Button */}
      <Button
        onClick={handleWhatsAppClick}
        className="h-16 w-16 rounded-full bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 shadow-xl hover:shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group border-2 border-white"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
      </Button>
    </div>
  )
}