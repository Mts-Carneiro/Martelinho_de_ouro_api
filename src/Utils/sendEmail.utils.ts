import { createTransport } from "nodemailer";
import "dotenv/config";
import Mailgen from "mailgen";
import { ISendEmailRequest } from "../interfaces/user.interface";
import { AppError } from "../errors/AppError";

class EmailService {
  async sendEmail({ to, subject, text }: any) {
    const transporter = createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter
      .sendMail({
        from: "mtscrn21@gmail.com",
        to,
        subject,
        html: text,
      })
      .then(() => {
        console.log("Email send with sucess");
      })
      .catch((err) => {
        console.log(err);
        throw new AppError("Error sending email, try again later", 500);
      });
  }

  resetPasswordTemplate(
    userEmail: string,
    userName: string,
    protocol: string,
    host: string,
    resetToken: string
  ) {
    const mailGenerator = new Mailgen({
      theme: "default",
      product: {
        name: "AutoCar Manager",
        link: `http://localhost:5173/`,
      },
    });

    const email = {
      body: {
        name: userName,
        intro:
          "Você recebeu esse e-mail porque uma solicitação de redefinição de senha para sua conta foi recebida.",
        action: {
          instructions: "Clique no botão abaixo para redefinir sua senha:",
          button: {
            color: "#DC4D2F",
            text: "Redefinir Senha",
            link: `http://localhost:5173/user/resetPassword/${resetToken}`,
          },
        },
        outro:
          "Se você não solicitou uma redefinição de senha, nenhuma outra ação será necessária de sua parte.",
      },
    };

    const emailBody = mailGenerator.generate(email);

    const emailTemplate = {
      to: userEmail,
      subject: "Reset password",
      text: emailBody,
    };

    return emailTemplate;
  }
}

const emailService = new EmailService();

export { emailService };
