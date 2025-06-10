"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function handleSubmit(formData: FormData) {
  try {
    console.log("API Key exists:", !!process.env.RESEND_API_KEY)

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name || !email || !phone ) {
      console.log("Missing required fields")
      return {
        status: 400,
        message: "Por favor complete todos los campos requeridos",
      }
    }


    

    // Send email with Resend
    const { data, error } = await resend.emails.send({
      from: "Solicitud@agsns.com.ar",
      to: ["galvano76.electrolitico@gmail.com"],
      subject: "Nueva solicitud",
      html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone}</p>
        <p><strong>Mensaje:</strong> ${message || "No se proporcionó mensaje"}</p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return {
        status: 500,
        message: "Error al enviar el email. Por favor intente nuevamente.",
      }
    }

    console.log("Email sent successfully:", data)
    return {
      status: 200,
      message: "Solicitud enviada exitosamente. Nos pondremos en contacto a la brevedad.",
    }
  } catch (error) {
    console.error("Full error object:", error)
    return {
      status: 500,
      message: "Error al enviar el email. Por favor intente nuevamente.",
    }
  }
}
