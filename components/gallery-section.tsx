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
  { src: "/images/feature-18.mp4", alt: "Proceso de recubrimiento en video", type: "video" },
  { src: "/images/Bronce.mp4", alt: "Recubrimiento en Bronce", type: "video", title: "Bronce" },
  { src: "/images/Cobre.mp4", alt: "Recubrimiento en Cobre", type: "video", title: "Cobre" },
  { src: "/images/Niquel.mp4", alt: "Recubrimiento en Níquel", type: "video", title: "Níquel" },
  { src: "/images/Oro18k.mp4", alt: "Recubrimiento en Oro 18k", type: "video", title: "Oro 18k" },
  { src: "/images/Oro24k.mp4", alt: "Recubrimiento en Oro 24k", type: "video", title: "Oro 24k" },
  { src: "/images/OroRosa.mp4", alt: "Recubrimiento en Oro Rosa", type: "video", title: "Oro Rosa" },
  { src: "/images/Plateado.mp4", alt: "Recubrimiento en Plateado", type: "video", title: "Plateado" },
  { src: "/images/feature-1.mp4", alt: "Proceso de recubrimiento 1", type: "video" },
  { src: "/images/feature-2.mp4", alt: "Proceso de recubrimiento 2", type: "video" },
  { src: "/images/feature-3.mp4", alt: "Proceso de recubrimiento 3", type: "video" },
  { src: "/images/feature-4.mp4", alt: "Proceso de recubrimiento 4", type: "video" },
  { src: "/images/feature-5.mp4", alt: "Proceso de recubrimiento 5", type: "video" },
  { src: "/images/feature-6.mp4", alt: "Proceso de recubrimiento 6", type: "video" },
  { src: "/images/feature-7.mp4", alt: "Proceso de recubrimiento 7", type: "video" },
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
    <section id="productos" className="py-10 sm:py-14 md:py-16 lg:py-20 xl:py-24 bg-[#2C2A29] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-left mb-6 sm:mb-8 lg:mb-12">
          <span className="inline-block bg-[#B08D57] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-2 sm:mb-3">
            Productos
          </span>
          <h2 className="text-3xl font-medium  mb-2">
          Recubrimientos reales.
          <span className="text-[#B08D57]"> Resultados reales.</span> 
          </h2>
          <p className="text-sm sm:text-base lg:text-lg  mt-2 sm:mt-3 max-w-3xl">
          Conocé cómo trabajan nuestros clientes con los insumos de AGSNS. En esta galería vas a encontrar ejemplos de baños metálicos aplicados sobre piezas artesanales: anillos, dijes, pulseras, medallas, broches y mucho más.

          </p>
        </div>

        <div className="relative">
          <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-gray-300 border-none relative">
                    <CardContent className="flex aspect-[16/9] sm:aspect-[2/1] items-center justify-center p-0">
                      {image.type === "video" ? (
                        <>
                          <video
                            src={image.src}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-contain rounded-lg pointer-events-none"
                          >
                            Tu navegador no soporta el elemento de video.
                          </video>
                          {image.title && (
                            <div className="absolute inset-x-0 bottom-0 p-4">
                              <h3 className="text-xl font-medium text-white text-center">
                                {image.title}
                              </h3>
                            </div>
                          )}
                        </>
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt || "Imagen de galería"}
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
