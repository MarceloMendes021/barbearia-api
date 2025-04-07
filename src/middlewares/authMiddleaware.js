const jwt = require("jsonwebtoken");
const errorResponse = require("../utils/errorResponse");

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return errorResponse(res, 403, "Acesso negado", "Token não fornecido ou inválido");
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return errorResponse(res, 403, "Token inválido", "O token fornecido é inválido ou expirou");
    }
    req.user = user;
    next();
  });
};
