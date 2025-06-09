"use client"

import * as React from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { ArrowLeft, ArrowRight } from "lucide-react"

const galleryImages = [
  { src: "/placeholder.svg?width=1200&height=600", alt: "Proceso de recubrimiento metálico 1" },
  { src: "/placeholder.svg?width=1200&height=600", alt: "Joyería con galvanoplastia" },
  { src: "/placeholder.svg?width=1200&height=600", alt: "Acabado metálico detallado" },
  { src: "/placeholder.svg?width=1200&height=600", alt: "Taller de orfebrería" },
  { src: "/placeholder.svg?width=1200&height=600", alt: "Equipo de recubrimiento de precisión" },
]

export default function GallerySection() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section id="galeria" className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-[#2C2A29] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-left mb-6 sm:mb-8 lg:mb-12">
          <span className="inline-block bg-[#B08D57] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-3">
            Galería
          </span>
          <h2 className="text-3xl font-medium  mb-2">
            Nuestro <span className="text-[#B08D57]">trabajo</span> en acción
          </h2>
          <p className="text-sm sm:text-base lg:text-lg  mt-2 sm:mt-3 max-w-3xl">
            Procesos, resultados y conocimiento compartido
          </p>
        </div>

        <div className="relative">
          <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-gray-300 border-none">
                    <CardContent className="flex aspect-[16/9] sm:aspect-[2/1] items-center justify-center p-0">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        width={1200}
                        height={600}
                        className="object-cover w-full h-full rounded-lg"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block absolute left-2 sm:left-4 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 bg-transparent border-none text-white hover:text-[#B08D57] disabled:text-gray-500 h-10 w-10 sm:h-12 sm:w-12">
              <ArrowLeft size={24} className="sm:w-8 sm:h-8" />
            </CarouselPrevious>
            <CarouselNext className="hidden md:block absolute right-2 sm:right-4 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 bg-transparent border-none text-white hover:text-[#B08D57] disabled:text-gray-500 h-10 w-10 sm:h-12 sm:w-12">
              <ArrowRight size={24} className="sm:w-8 sm:h-8" />
            </CarouselNext>
          </Carousel>
          <div className="py-4 sm:py-6 text-center text-sm text-muted-foreground mt-4 sm:mt-6">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full mx-1 sm:mx-2 ${
                  index === current - 1 ? "bg-[#B08D57] scale-125" : "bg-gray-500"
                } transition-all`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
