import Mail from "../lib/Mail";

/* job de Registro de email, aqui posso definir como vai funcionar
 e também acompanhar o funcionamento do job.*/
export default {
  key: "RegisrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: "Queue Test <queue@queuetest.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá, ${user.name}, Bem-vindo ao sistema de filas :D`,
    });
  },
};
