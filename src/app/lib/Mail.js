// Configurções de envio de e-mail
import nodemailer from "nodemailer";
import mailConfig from "../../config/mail";

export default nodemailer.createTransport(mailConfig);
