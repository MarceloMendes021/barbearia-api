const express = require("express");
const { registerUser } = require("../controllers/userController");
const { getUserProfile } = require("../controllers/authController");
const { verifyToken } = require("../middlewares/authMiddleaware");

const router = express.Router();

router.post("/register", registerUser);
router.get("/me", verifyToken, getUserProfile);

module.exports = router;
