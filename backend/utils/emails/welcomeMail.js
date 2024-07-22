import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (user) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const message = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: user.email,
      subject: "Welcome to Our Platform",
      text: `Hello ${user.name},\n\nWelcome to our platform! We are excited to have you on board.\n\nBest Regards,\nThe Team`,
    };

    await transporter.sendMail(message);
  } catch (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Email could not be sent");
  }
};
