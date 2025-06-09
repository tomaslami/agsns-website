"use client"
import { Button } from "@/components/ui/button"
import type React from "react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Briefcase, Mail, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
  }

  return (
    <section id="contacto" className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-[#F2ECDF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-left mb-6 sm:mb-8 lg:mb-12">
          <span className="inline-block bg-[#B08D57] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-3">
            Contacto
          </span>
          <h2 className="text-3xl font-medium text-[#252320] mb-2">
            Conectemos para potenciar <span className="text-[#B08D57]">tu taller</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#252320] mt-2 sm:mt-3 max-w-3xl">
            Consúltanos sobre nuestros sistemas y soluciones técnicas
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full bg-white p-5 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-5 sm:mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline-block mr-2 h-4 w-4 text-gray-500" /> Nombre
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="inline-block mr-2 h-4 w-4 text-gray-500" /> Empresa / Taller
              </label>
              <Input
                type="text"
                id="company"
                name="company"
                className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3"
              />
            </div>
          </div>
          <div className="mb-5 sm:mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline-block mr-2 h-4 w-4 text-gray-500" /> Correo electrónico
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3"
            />
          </div>
          <div className="mb-5 sm:mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="inline-block mr-2 h-4 w-4 text-gray-500" /> Mensaje
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3 min-h-[100px] sm:min-h-[120px]"
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#B08D57] hover:bg-[#a07d47] text-white text-sm py-2.5 sm:py-3 rounded-md font-medium"
          >
            Enviar consulta
          </Button>
        </form>
      </div>
    </section>
  )
}
