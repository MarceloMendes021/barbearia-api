const User = require("../models/User");
const { comparePassword } = require("../utils/passwordHandler");
const errorResponse = require("../utils/errorResponse");

exports.login = async (req, res) => {
  try {
    const { cpf, password } = req.body;

    if (!cpf || !password) {
      return errorResponse(res, 400, "Campos obrigatórios ausentes", "Os campos de 'CPF' e 'senha' são obrigatórios");
    }

    const user = await User.findOne({ cpf });
    if (!user) {
      return errorResponse(res, 401, "Usuário não encontrado", "O CPF informado não está cadastrado no sistema");
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return errorResponse(res, 401, "Senha inválida", "A senha informada está incorreta.");
    }
    res.status(200).json({ message: "Login realizado com sucesso!" });
  } catch (error) {
    return errorResponse(res, 500, "Erro interno no servidor", "Ocorreu um problema ao tentar realizar o login. Tente novamente mais tarde.");
  }
};
