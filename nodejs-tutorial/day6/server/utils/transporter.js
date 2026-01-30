import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "codenow12345@gmail.com",
    pass: "teqh hvxv ijnd csgh",
  },
});
