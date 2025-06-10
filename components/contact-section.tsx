"use client"
import { Button } from "@/components/ui/button"
import type React from "react"
import { useState, type FormEvent } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { User, Briefcase, Mail, MessageSquare, Phone } from "lucide-react"
import { handleSubmit } from "@/action/contact"
import { toast, Toaster } from "sonner"

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false)

  const validateForm = (form: HTMLFormElement) => {
    const name = form.elements.namedItem("name") as HTMLInputElement
    const email = form.elements.namedItem("email") as HTMLInputElement
    const phone = form.elements.namedItem("phone") as HTMLInputElement
    const message = form.elements.namedItem("message") as HTMLInputElement
    
    const missingFields = []
    
    if (!name.value.trim()) missingFields.push("Nombre y apellido")
    if (!email.value.trim()) missingFields.push("Email")
    if (!phone.value.trim()) missingFields.push("Teléfono")
    if (!message.value.trim()) missingFields.push("Mensaje")  
    
    return missingFields
  }

  async function onFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    const form = e.currentTarget
    
    const missingFields = validateForm(form)
    
    if (missingFields.length > 0) {
      toast.error(`Por favor complete los siguientes campos: ${missingFields.join(", ")}`)
      return
    }
    
    const formData = new FormData(form)
    setIsLoading(true)

    try {
      const res = await handleSubmit(formData)

      if (res.status === 200) {
        toast.success("¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.")
        // Reset the form
        form.reset()
      } else {
        const messages = Array.isArray(res.message) ? res.message : [res.message]
        messages.forEach((msg: string) => toast.error(msg))
      }
    } catch (error) {
      console.error("Form submission error:", error)
      toast.error("Error al enviar el mensaje. Por favor, inténtalo de nuevo.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <section id="contacto" className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-[#F2ECDF]">
      <Toaster position="top-center" duration={3000} richColors />
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

        <form onSubmit={onFormSubmit} className="w-full bg-white p-5 sm:p-6 lg:p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 lg:gap-6 mb-5 sm:mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                <User className="inline-block mr-2 h-4 w-4 text-gray-500" /> Nombre <span className="text-red-500">*</span>
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
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                <Phone className="inline-block mr-2 h-4 w-4 text-gray-500" /> Teléfono <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                id="phone"
                name="phone"
                required
                className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3"
              />
            </div>
          </div>
          <div className="mb-5 sm:mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              <Mail className="inline-block mr-2 h-4 w-4 text-gray-500" /> Correo electrónico <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3 text-black"
            />
          </div>
          <div className="mb-5 sm:mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              <MessageSquare className="inline-block mr-2 h-4 w-4 text-gray-500" /> Mensaje <span className="text-red-500">*</span>
            </label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              required
              className="bg-gray-100 border-gray-300 focus:border-[#B08D57] focus:ring-[#B08D57] text-sm py-2.5 sm:py-3 min-h-[100px] sm:min-h-[120px] text-black"
            />
          </div>
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#B08D57] hover:bg-[#a07d47] text-white text-sm py-2.5 sm:py-3 rounded-md font-medium disabled:opacity-70"
          >
            {isLoading ? "Enviando..." : "Enviar consulta"}
          </Button>
          <p className="text-xs text-gray-500 text-center mt-2">
            <span className="text-red-500">*</span> Campos obligatorios
          </p>
        </form>
      </div>
    </section>
  )
}
