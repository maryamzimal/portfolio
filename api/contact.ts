import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

// Environment variables (never expose in frontend code)
const resend = new Resend("re_BRZ8WUtU_2LeehcDAyhYdwHfLW2wDctwr");
const CONTACT_EMAIL = "taimoort137@gmail.com";

interface ContactBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body as ContactBody;

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email address." });
  }

  if (message.trim().length < 10) {
    return res.status(400).json({ message: "Message too short." });
  }

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0f; color: #f0f0f5; padding: 32px; border-radius: 12px;">
          <h2 style="color: #7b6af0; margin: 0 0 24px;">New Portfolio Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #9898b0; font-size: 13px; width: 80px;">From</td>
              <td style="padding: 8px 0; color: #f0f0f5;">${name} &lt;${email}&gt;</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #9898b0; font-size: 13px;">Subject</td>
              <td style="padding: 8px 0; color: #f0f0f5;">${subject}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #1e1e2e; margin: 24px 0;" />
          <div style="color: #f0f0f5; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          <p style="margin-top: 32px; font-size: 11px; color: #55556a;">
            Sent via Muhammad Taimoor Jham's portfolio contact form.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ message: "Failed to send email. Please try again." });
    }

    return res.status(200).json({ message: "Email sent successfully." });
  } catch (err) {
    console.error("Contact handler error:", err);
    return res.status(500).json({ message: "Unexpected server error." });
  }
}
