import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // Resend requires the sender domain to be verified.
      // Use the default onboarding address for testing, or your own verified domain.
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "yashnandanwar2005@gmail.com"],
      replyTo: email,
      subject: `✉️ New message from ${name} — Portfolio`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Message</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;color:#ededed;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border:1px solid rgba(255,255,255,0.08);border-radius:16px;overflow:hidden;">

          <!-- Header banner -->
          <tr>
            <td style="background:linear-gradient(135deg,#9A0002 0%,#C0272D 50%,#6B0000 100%);padding:36px 40px;">
              <p style="margin:0;font-size:12px;letter-spacing:0.3em;text-transform:uppercase;color:rgba(239,230,222,0.6);">Portfolio Contact Form</p>
              <h1 style="margin:8px 0 0;font-size:28px;font-weight:800;color:#EFE6DE;letter-spacing:-0.02em;">New Message Received</h1>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#111111;padding:36px 40px;">

              <!-- Sender info -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="padding:16px 20px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;">
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-bottom:10px;border-bottom:1px solid rgba(255,255,255,0.06);">
                          <span style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);">From</span><br/>
                          <span style="font-size:17px;font-weight:600;color:#ffffff;margin-top:4px;display:block;">${name}</span>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding-top:10px;">
                          <span style="font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Reply-to</span><br/>
                          <a href="mailto:${email}" style="font-size:14px;color:#EFE6DE;text-decoration:none;display:block;margin-top:4px;">${email}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message -->
              <p style="margin:0 0 10px;font-size:10px;letter-spacing:0.2em;text-transform:uppercase;color:rgba(255,255,255,0.35);">Message</p>
              <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:20px 22px;">
                <p style="margin:0;font-size:15px;line-height:1.75;color:rgba(255,255,255,0.78);white-space:pre-wrap;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
              </div>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}"
                      style="display:inline-block;padding:13px 30px;background:#EFE6DE;color:#6B0000;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;text-decoration:none;">
                      Reply to ${name}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0d0d0d;padding:20px 40px;border-top:1px solid rgba(255,255,255,0.06);">
              <p style="margin:0;font-size:11px;color:rgba(255,255,255,0.2);text-align:center;">
                Sent via your portfolio contact form at yash.dev &nbsp;·&nbsp; Do not reply to this email directly
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `.trim(),
      // Plain-text fallback
      text: `New message from ${name} (${email})\n\n${message}`,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
