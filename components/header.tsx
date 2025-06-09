"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 bg-[#252320] shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/agsns-logo.png"
            alt="AGSNS Recubrimientos Metálicos Logo"
            width={200}
            height={50}
            className="h-8 sm:h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          <Link
            href="#inicio"
            className="text-sm xl:text-base font-medium text-white hover:text-gray-300 transition-colors"
          >
            Inicio
          </Link>
          <Link
            href="#sobre-nosotros"
            className="text-sm xl:text-base font-medium text-white hover:text-gray-300 transition-colors"
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#galeria"
            className="text-sm xl:text-base font-medium text-white hover:text-gray-300 transition-colors"
          >
            Galería
          </Link>
          <Button
            variant="default"
            className="bg-[#B08D57] hover:bg-[#a07d47] text-white text-sm xl:text-base px-4 py-2 rounded-md"
            asChild
          >
            <Link href="#contacto">
              Contactarme <Image src="/ArrowUpRight.png" alt="Arrow" width={16} height={16} className="ml-2" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#B08D57] hover:text-[#a07d47] transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#252320] border-t border-gray-600 shadow-lg transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-4 space-y-4 transition-all duration-200 ease-in-out">
          <Link
            href="#inicio"
            className="block text-base font-medium text-white hover:text-gray-300 transition-all duration-200 ease-in-out py-2 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </Link>
          <Link
            href="#sobre-nosotros"
            className="block text-base font-medium text-white hover:text-gray-300 transition-all duration-200 ease-in-out py-2 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="#galeria"
            className="block text-base font-medium text-white hover:text-gray-300 transition-all duration-200 ease-in-out py-2 transform hover:translate-x-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Galería
          </Link>
          <Button
            variant="default"
            className="w-full bg-[#B08D57] hover:bg-[#a07d47] text-white text-base px-4 py-3 rounded-md mt-4"
            asChild
          >
            <Link href="#contacto" onClick={() => setIsMenuOpen(false)}>
              Contactarme <Image src="/ArrowUpRight.png" alt="Arrow" width={16} height={16} className="ml-2" />
            </Link>
          </Button>
        </nav>
      </div>
      )}
    </header>
  )
}
