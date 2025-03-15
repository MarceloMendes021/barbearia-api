const crypto = require("crypto");

const salt = "my_secret_salt";

exports.hashPassword = async (password) => {
  return crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
};

exports.comparePassword = async (password, hashedPassword) => {
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, "sha512").toString("hex");
  return hash === hashedPassword;
};
