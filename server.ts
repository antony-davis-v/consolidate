// server.ts
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import type { Request, Response } from 'express';
import http from 'http';
import path from 'path';
import nodemailer, { type Transporter, type SendMailOptions } from 'nodemailer';

const app = express();
const server = http.createServer(app);
const port = Number(process.env.PORT) || 5000;

// --- Log env vars (for debugging) ---
console.log('SMTP_SERVICE:', process.env.SMTP_SERVICE);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('TO_EMAIL:', process.env.TO_EMAIL);

// --- Create transporter once at startup ---
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVICE, // smtp.office365.com
  port: 587,
  secure: false,                  // use STARTTLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});
// --- Verify SMTP connection ---
transporter.verify((err, success) => {
  if (err) {
    console.error('⛔ SMTP connection failed:', err);
  } else {
    console.log('✅ SMTP server is ready to take messages');
  }
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

interface SendEmailBody {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

app.post(
  '/send_email',
  async (req: Request<{}, {}, SendEmailBody>, res: Response) => {
    const { name, email, phone, company, message } = req.body;

    const mailOptions: SendMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.TO_EMAIL,
      subject: `New inquiry from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}

Message:
${message}
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('✉️  Email sent:', info.response);
      res.status(200).json({ ok: true });
      return;
    } catch (err: any) {
      console.error('⛔ Email error:', err);
      if (err.response) console.error('SMTP response:', err.response);
      res
        .status(500)
        .json({ ok: false, error: err.message || 'Failed to send email' });
      return;
    }
  }
);

server.listen(port, () => {
  console.log(`🚀 Server listening on http://localhost:${port}`);
});
