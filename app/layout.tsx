import type React from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"
import Script from "next/script"

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
        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5BFM3J33');
          `}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-5BFM3J33"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
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
