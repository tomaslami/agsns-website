import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-end justify-end text-center text-white pt-16 sm:pt-20 lg:pt-24 pb-10"
    >
      <Image
        src="/hero-background.png"
        alt="Fondo de recubrimientos metálicos"
        fill
        sizes="100vw"
        style={{ objectFit: "cover" }}
        quality={100}
        className="z-0"
        priority
      />
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-end max-w-6xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl mb-4 sm:mb-6 lg:mb-8  text-[#252320] font-medium">
          Recubrimientos de precisión
          <br />
          para <span className="text-[#B08D57]">joyeros exigentes</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl leading-relaxed text-[#252320]">
          Durabilidad, estética y seguridad técnica en cada producto
        </p>
        <Button
            variant="default"
            className="bg-[#B08D57] hover:bg-[#a07d47] text-white text-sm xl:text-base px-4 py-2 rounded-md"
            asChild
          >
            <Link href="#contacto" >
              Contáctanos <Image src="/ArrowUpRight.png" alt="Arrow" width={16} height={16} className="ml-2" />
            </Link>
          </Button>
      </div>
    </section>
  )
}
