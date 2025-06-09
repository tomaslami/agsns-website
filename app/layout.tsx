import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"

export const metadata = {
  title: "AGSNS - Recubrimientos Metálicos",
  description: "Recubrimientos de precisión para joyeros exigentes",

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning className="font-['Mona Sans']">
      <head>
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/gh/github/mona-sans@latest/Mona-Sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <FloatingWhatsAppButton
        phoneNumber="+541126968368"
        message="Hola!! Estoy interesado/a en sus servicios."
      />
      </body>
    </html>
  )
}
