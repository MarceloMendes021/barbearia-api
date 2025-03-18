const { validateCPF } = require("../utils/cpfValidator");
const User = require("../models/User");
const { hashPassword } = require("../utils/passwordHandler");
const errorResponse = require("../utils/errorResponse");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, phone, cpf, password } = req.body;

    if (!name || !email || !phone || !cpf || !password) {
      return errorResponse(res, 400, "Campos obrigatórios ausentes", "Os campos 'nome', 'e-mail', 'telefone' e 'CPF' são obrigatórios.");
    }

    if (!validateCPF(cpf)) {
      return errorResponse(res, 400, "CPF inválido", "O CPF informado não passou na validação dos dígitos verificadores.");
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
    return errorResponse(res, 500, "Erro interno no servidor", "Ocorreu um problema ao registrar o usuário. Tente novamente mais tarde.");
  }
};
