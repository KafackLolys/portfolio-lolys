import nodemailer from "nodemailer";
import enDict from "@/locales/en";
import frDict from "@/locales/fr";

type ContactBody = {
  name: string;
  email: string;
  message: string;
  locale?: string;
};

export async function POST(req: Request) {
  try {
    const body: ContactBody = await req.json();

    const { name, email, message, locale = "fr" } = body;
    const dict = locale === "en" ? enDict : frDict;

    if (!name || !email || !message) {
      return Response.json(
        { error: dict.form.required_fields },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_SENDER as string,
        pass: process.env.GMAIL_PASS as string,
      },
    });

    const htmlMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
        <div style="background-color: #f8715b; padding: 20px; text-align: center; color: white;">
          <h2 style="margin: 0; font-size: 24px;">Nouveau Message de Contact</h2>
        </div>
        <div style="padding: 20px; background-color: #ffffff; color: #333333;">
          <p style="margin: 0 0 10px 0; font-size: 16px;"><strong>Nom :</strong> ${name}</p>
          <p style="margin: 0 0 20px 0; font-size: 16px;"><strong>Email :</strong> <a href="mailto:${email}" style="color: #f8715b; text-decoration: none;">${email}</a></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #f8715b; border-radius: 4px; font-size: 16px; white-space: pre-wrap; line-height: 1.5;">${message}</div>
        </div>
        <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #888888;">
          Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_SENDER}>`,
      replyTo: email,
      to: process.env.GMAIL_SENDER,
      subject: `Nouveau message de ${name} (Portfolio)`,
      text: `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: htmlMessage,
    });

    return Response.json({ message: dict.form.email_sent });
  } catch (error) {
    // In case we fail before parsing the body or locale fails
    return Response.json(
      { error: (frDict.form as any).server_error || "Erreur serveur" },
      { status: 500 },
    );
  }
}
