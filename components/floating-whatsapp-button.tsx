"use client"
import Image from "next/image"
import Link from "next/link"

interface FloatingWhatsAppButtonProps {
  phoneNumber: string
  message?: string
}

export default function FloatingWhatsAppButton({ phoneNumber, message }: FloatingWhatsAppButtonProps) {
  const whatsappLink = `https://wa.me/${phoneNumber.replace(/\D/g, "")}${message ? `?text=${encodeURIComponent(message)}` : ""}`

  return (
    <Link
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#B08D57] text-white p-2 rounded-full shadow-lg hover:bg-groppa-green/90 transition-colors duration-300 z-50 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
    >
      <Image src="/icons/wpp_icon.png" alt="WhatsApp Logo" width={38} height={38} />
    </Link>
  )
}
