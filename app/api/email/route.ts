import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with API key check
const resendApiKey = process.env.RESEND_API_KEY
if (!resendApiKey) {
  console.error("RESEND_API_KEY is not defined in environment variables")
}
const resend = new Resend(resendApiKey)

export async function POST(req: Request) {
  if (!resendApiKey) {
    return NextResponse.json(
      {
        error: "Server configuration error: Missing API key",
        details: "Please contact the administrator",
      },
      { status: 500 },
    )
  }

  try {
    const formData = await req.formData()

    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }


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
      return NextResponse.json(
        {
          error: "Failed to send email",
          details: error.message,
        },
        { status: 500 },
      )
    }

    return NextResponse.json({
      status: 200,
      message: "Solicitud enviada exitosamente",
      data,
    })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
