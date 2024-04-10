"use server";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASSWORD,
  },
});
export async function sendEmail(
  prevState: any,
  formData: FormData
): Promise<{ message: string }> {
  const email = formData.get("user_email");
  const message = formData.get("message");
  const name = formData.get("user_name");

  const html = `
  <html>
    <body>
      <h1>Heyy, Kaung, ${name} is trying to contact you!</h1>
      <p style="font-size: 18px;">He/She is saying...</p>
      <p style="font-weight: bold; font-size: 18px;">${message}</p>
      <br />
      <p style="font-weight: bold; font-size: 18px;">The email address is ${email}</p>
    </body>
  </html> 
  `
  const mailOptions = {
    from: process.env.GMAIL_EMAIL,
    to: process.env.GMAIL_EMAIL,
    subject: `Message from ${email}`,
    html: html
  }

  return transporter.sendMail(mailOptions).then(value => {
    return { message: "success" }
  }).catch(err => {
    return { message: "failed" }
  })
}
