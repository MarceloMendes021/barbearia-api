const User = require("../models/User");
const { hashPassword } = require("../utils/passwordHandler");

exports.register = async (req, res) => {
  try {
    const { name, email, phone, cpf, password } = req.body;

    if (!name || !email || !phone || !cpf || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios!" });
    }
    if (!/^\d{11}$/.test(cpf)) {
      return res.status(400).json({ message: "CPF deve conter exatamente 11 números" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { cpf }] });

    if (existingUser) {
      return res.status(400).json({ message: "Usuário já cadastrado!" });
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({ name, email, phone, cpf, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "Usuário registrado com sucesso!" });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).json({ message: "Erro ao registrar usuário", error: error.message });
  }
};
