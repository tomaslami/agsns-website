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
  { src: "/images/feature-1.jpg", alt: "Proceso de recubrimiento metálico 1" },
  { src: "/images/feature-2.jpg", alt: "Joyería con galvanoplastia" },
  { src: "/images/feature-3.jpg", alt: "Acabado metálico detallado" },
  { src: "/images/feature-4.jpg", alt: "Taller de orfebrería" },
  { src: "/images/feature-5.jpg", alt: "Equipo de recubrimiento de precisión" },
  { src: "/images/feature-6.jpg", alt: "Galvanoplastia de piezas" },
  { src: "/images/feature-7.jpg", alt: "Pulido de metales" },
  { src: "/images/feature-8.jpg", alt: "Control de calidad" },
  { src: "/images/feature-9.jpg", alt: "Baño de recubrimiento" },
  { src: "/images/feature-10.jpg", alt: "Trabajo artesanal" },
  { src: "/images/feature-11.jpg", alt: "Detailado de piezas" },
  { src: "/images/feature-12.jpg", alt: "Proceso químico" },
  { src: "/images/feature-13.jpg", alt: "Recubrimiento de joyas" },
  { src: "/images/feature-14.jpg", alt: "Piezas en baño" },
  { src: "/images/feature-15.jpg", alt: "Recubrimiento de componentes" },
  { src: "/images/feature-16.jpg", alt: "Inspección de calidad" },
  { src: "/images/feature-17.jpg", alt: "Recubrimiento especializado" },
  { src: "/images/feature-18.mp4", alt: "Proceso de recubrimiento en video", type: "video" },
  { src: "/images/feature-19.jpg", alt: "Detalle de acabado metálico" },
  { src: "/images/feature-20.jpg", alt: "Proceso de galvanoplastia" },
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
                      {image.type === "video" ? (
                        <video
                          src={image.src}
                          controls
                          className="w-full h-full object-contain rounded-lg"
                          playsInline
                        >
                          Tu navegador no soporta el elemento de video.
                        </video>
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={1200}
                          height={600}
                          className="object-contain w-full h-full rounded-lg"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                        />
                      )}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block absolute left-2 sm:left-4 lg:-left-12 xl:-left-16 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-500 hover:text-[#B08D57] hover:bg-transparent h-10 w-10 sm:h-12 sm:w-12">
              <ArrowLeft size={24} className="sm:w-8 sm:h-8" />
            </CarouselPrevious>
            <CarouselNext className="hidden md:block absolute right-2 sm:right-4 lg:-right-12 xl:-right-16 top-1/2 -translate-y-1/2 bg-transparent border-none text-gray-500 hover:text-[#B08D57] hover:bg-transparent h-10 w-10 sm:h-12 sm:w-12">
              <ArrowRight size={24} className="sm:w-8 sm:h-8" />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
    </section>
  )
}
