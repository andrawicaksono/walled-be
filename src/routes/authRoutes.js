const express = require("express");
const router = express.Router();
const { authController } = require("../config/container");
const { validate } = require("../middlewares/validation");
const { createUserSchema } = require("../validators/userValidator");

router.post(
  "/register",
  validate(createUserSchema),
  authController.registerUser
);

module.exports = router;
