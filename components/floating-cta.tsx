"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"

export function FloatingCTA() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "919502330951" // Replace with actual WhatsApp number
    const message = "Hi! I'm interested in learning more about St. School courses."
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        onClick={handleWhatsAppClick}
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <Image src="/whatsapp.svg" alt="WhatsApp" width={24} height={24} />
        {/* WhatsApp */}
      </Button>
    </div>
  )
}
