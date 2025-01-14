// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
	try {
		const data = await req.json();

		// Validate required fields
		if (!data.name || !data.email || !data.message || !data.service) {
			return NextResponse.json(
				{ error: "Todos los campos son requeridos" },
				{ status: 400 }
			);
		}

		// Send email using Resend
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { data: emailData, error } = await resend.emails.send({
			from: "Contact Form <onboarding@resend.dev>", // Update this with your verified domain
			to: ["eyalcumartesi02@icloud.com"], // Replace with your email
			replyTo: data.email,
			subject: `Nuevo contacto: ${data.service}`,
			html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Servicio:</strong> ${data.service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message}</p>
      `,
		});

		if (error) {
			console.error("Resend error:", error);
			return NextResponse.json(
				{ error: "Error al enviar el email" },
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ message: "Mensaje enviado correctamente" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Server error:", error);
		return NextResponse.json(
			{ error: "Error al procesar la solicitud" },
			{ status: 500 }
		);
	}
}
