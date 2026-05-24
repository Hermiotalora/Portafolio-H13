import { NextResponse } from "next/server";

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.FROM_EMAIL;
const destinationEmail = "hermiotalora@gmail.com";

export async function POST(request) {
  try {
    if (!resendApiKey || !fromEmail) {
      return NextResponse.json(
        { error: "Missing email configuration." },
        { status: 500 }
      );
    }

    const { email, subject, message } = await request.json();

    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: "Email, subject, and message are required." },
        { status: 400 }
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [destinationEmail, email],
        subject,
        html: `
          <h1>${escapeHtml(subject)}</h1>
          <p>Thank you for contacting us!</p>
          <p><strong>From:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      }),
    });

    const data = await resendResponse.json();

    if (!resendResponse.ok) {
      const errorMessage = data?.message || "Failed to send email.";
      return NextResponse.json({ error: errorMessage }, { status: 500 });
    }

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
