export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    // Enviar um e-mail

    return res.json(user);
  },
};
