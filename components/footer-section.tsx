import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Phone, MailIcon, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C2A29] text-gray-300 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16 mb-8 sm:mb-12">
          {/* Column 1: Logo and Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4 sm:mb-6">
              <Image
                src="/agsns-logo.png"
                alt="AGSNS Recubrimientos Metálicos Logo"
                width={220}
                height={55}
                className="h-10 sm:h-12 lg:h-14 w-auto"
              />
            </Link>
            <p className="text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed text-[#B08D57] max-w-md">
              Desde 2010, somos especialistas en recubrimientos metálicos para joyeros y talleres artesanales. Ofrecemos
              soluciones técnicas de alta calidad, formación especializada y productos seguros que garantizan resultados
              excepcionales.
            </p>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="#" className="text-white hover:text-[#B08D57] transition-colors">
                <Instagram size={20} className="sm:w-6 sm:h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-white hover:text-[#B08D57] transition-colors">
                <Facebook size={20} className="sm:w-6 sm:h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#B08D57] mb-4 sm:mb-6">
              Enlaces rápidos
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="#inicio" className="hover:text-[#B08D57] transition-colors text-sm sm:text-base text-white">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#sobre-nosotros"
                  className="hover:text-[#B08D57] transition-colors text-sm sm:text-base text-white"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#galeria"
                  className="hover:text-[#B08D57] transition-colors text-sm sm:text-base text-white"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-[#B08D57] transition-colors text-sm sm:text-base text-white"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#B08D57] mb-4 sm:mb-6">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base">
              <li className="flex items-start">
                <Phone size={16} className="mr-3 mt-1 text-[#B08D57] flex-shrink-0 sm:w-5 sm:h-5" />
                <span className="text-white">+54 9 11 2020-8368</span>
              </li>
              <li className="flex items-start">
                <MailIcon size={16} className="mr-3 mt-1 text-[#B08D57] flex-shrink-0 sm:w-5 sm:h-5" />
                <span className="text-white break-all">galvanoTG.electrolitico@gmail.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-3 mt-1 text-[#B08D57] flex-shrink-0 sm:w-5 sm:h-5" />
                <span className="text-white">Monteagudo 3087, Victoria San Fernando</span>
              </li>
              <li className="flex items-start">
                <Clock size={16} className="mr-3 mt-1 text-[#B08D57] flex-shrink-0 sm:w-5 sm:h-5" />
                <div className="text-white">
                  <p>Lun-Vie 9:00hs a 18:00hs</p>
                  <p>Sábados 9:00hs a 13:00hs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8 text-center text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Recubrimientos AGSNS. Todos los derechos reservados.</p>
          <p className="mt-1 sm:mt-2">
            Desarrollado por{" "}
            <Link href="https://synera.com.ar" className="text-[#B08D57] hover:underline">
              Synera
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
