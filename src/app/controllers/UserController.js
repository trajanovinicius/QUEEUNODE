import Mail from "../lib/Mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Enviar um email
    Mail.sendMail({
      from: "Queue Test <queue@queuetest.com.br>",
      to: `${name} <${email}>`,
      subject: "Cadastro de e-mail",
      html: `Olá, ${name}, Bem-VIndo ao sistema de filas :D`,
    });

    return res.json(user);
  },
};
