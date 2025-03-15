const express = require("express");
const authController = require("../controllers/authController");
const loginController = require("../controllers/loginController");

const router = express.Router();

router.post("/register", authController.register);
router.post("/login", loginController.login);

module.exports = router;
