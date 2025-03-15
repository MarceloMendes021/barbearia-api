const User = require("../models/User");
const { comparePassword } = require("../utils/passwordHandler");

exports.login = async (req, res) => {
  try {
    const { cpf, password } = req.body;

    if (!cpf || !password) {
      return res.status(400).json({ message: "CPF e senha são obrigatórios" });
    }

    const user = await User.findOne({ cpf });
    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado!" });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "CPF ou senha invalidos!" });
    }
    res.status(200).json({ message: "Login realizado com sucesso!" });
  } catch (error) {
    console.error("Erro ao realizar login", error);
    res.status(500).json({ message: "Erro ao realizar login", error: error.message });
  }
};
