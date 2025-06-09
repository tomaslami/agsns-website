import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Sobre nosotros",
    description:
      "Recubrimientos metálicos agsns nace en el 2010 ofreciendo una variedad de productos de bañados galvánicos diseñados para satisfacer las necesidades de pequeñas empresas y talleres que buscan agregar valor y durabilidad a sus productos. Nuestras formulaciones están para proporcionar resultados óptimos y consistentes en una variedad de aplicaciones.",
    icon: "/images/Users.png",
  },
  {
    title: "Sistemas compactos",
    description:
      "Mini sistemas de baño galvánico con agitación catódica o formatos estáticos, ideales para espacios reducidos y producción controlada.",
    icon: "/images/Lightning.png",
  },
  {
    title: "Alta pureza",
    description:
      "Formulaciones con ingredientes de gran pureza que garantizan acabados confiables, estables y de alta calidad.",
    icon: "/images/Medal.png",
  },
  {
    title: "Seguridad",
    description:
      "Productos seguros y fáciles de usar, con instrucciones claras que minimizan riesgos y optimizan la aplicación.",
    icon: "/images/ShieldCheck.png",
  },
  {
    title: "Formación internacional",
    description: "Tutoriales y recursos educativos sobre galvanoplastia, pensados especialmente para el exterior.",
    icon: "/images/GraduationCap.png",
  },
]

export default function ServicesSection() {
  return (
    <section id="sobre-nosotros" className="py-12 bg-[#F2ECDF] scroll-m-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <span className="inline-block bg-[#B08D57] text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            Servicios
          </span>

          <h2 className="text-3xl font-medium text-[#252320] mb-2">
            Excelencia en <span className="text-[#B08D57]">recubrimientos metálicos</span>
          </h2>

          <p className="text-base text-gray-700">
            Soluciones técnicas especializadas para el sector joyero y talleres artesanales
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-stretch w-full gap-6 mb-6">
          <div className="bg-white p-8 rounded-lg shadow-sm relative min-h-[400px] w-full md:w-2/3 flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{services[0].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-12 w-full md:w-1/2">{services[0].description}</p>
            <div className="absolute bottom-0 right-0 p-8">
              <div className="w-72 h-72">
                <Image
                  src={services[0].icon || "/placeholder.svg"}
                  alt=""
                  width={192}
                  height={192}
                  className="w-full h-full object-contain hidden md:block"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm relative w-full md:w-1/3 min-h-[400px] flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{services[1].title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-12">{services[1].description}</p>
            <div className="flex flex-1 items-center justify-center">
              <div className="w-48 h-48">
                <Image
                  src={services[1].icon || "/placeholder.svg"}
                  alt=""
                  width={192}
                  height={192}
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.slice(2).map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm relative min-h-[400px] flex flex-col">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">{service.description}</p>
              <div className="flex justify-center items-end">
                <div className="w-48 h-48">
                  <Image
                    src={service.icon || "/placeholder.svg"}
                    alt=""
                    width={192}
                    height={192}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
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
      </div>
    </section>
  )
}
