const jwt = require("jsonwebtoken");

const SECRET_KEY = "seu_segredo_super_secreto";

exports.generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
};
