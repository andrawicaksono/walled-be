const express = require("express");
const router = express.Router();
const { authController } = require("../config/container");
const { validate } = require("../middlewares/validation");
const {
  createUserSchema,
  loginSchema,
} = require("../validators/userValidator");

router.post(
  "/register",
  validate(createUserSchema),
  authController.registerUser
);

router.post("/login", validate(loginSchema), authController.login);

module.exports = router;
