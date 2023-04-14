import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {

  // from mailtrap.io
  const transporter = createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "03fabbfd7ebbb7",
      pass: "0480002b5c2f7b",
    },
  });

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};
