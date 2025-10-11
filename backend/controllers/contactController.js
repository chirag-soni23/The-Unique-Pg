import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const handleContactForm = async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: "Required fields are missing." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Contact Form Submission",
      html: `
  <div style="font-family: 'Segoe UI', Roboto, sans-serif; color: #333; padding: 20px;">
    <div style="background: linear-gradient(to right, #7f5af0, #2cb67d); padding: 20px; border-radius: 8px 8px 0 0; color: white;">
      <h1 style="margin: 0; font-size: 26px;">📩 The Unique PG — New Contact Form Submission</h1>
    </div>

    <div style="background-color: #ffffff; padding: 24px; border: 1px solid #eee; border-top: none; border-radius: 0 0 8px 8px;">
      <h2 style="margin-top: 0; font-size: 20px; color: #222;">Visitor Information</h2>
      <p><strong>👤 Name:</strong> ${name}</p>
      <p><strong>📞 Phone:</strong> ${phone}</p>
      <p><strong>📧 Email:</strong> ${email || "N/A"}</p>

      <hr style="margin: 24px 0; border: none; border-top: 1px solid #ddd;" />

      <h3 style="margin-bottom: 8px; font-size: 18px; color: #222;">📝 Message:</h3>
      <p style="white-space: pre-wrap; line-height: 1.6; font-size: 15px;">${message}</p>
    </div>

    <footer style="text-align: center; font-size: 12px; color: #777; margin-top: 30px;">
      This email was sent from the contact form on <strong>The Unique PG</strong> website.
      <br />
      <span>Location: Near Madhuban Police Station, Jodhpur – 342005</span>
    </footer>
  </div>
`
,
    });

    res.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ error: "Failed to send email." });
  }
};

