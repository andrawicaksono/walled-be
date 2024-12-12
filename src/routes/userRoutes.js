const express = require("express");
const router = express.Router();
const { userController } = require("../config/container");

router.get("/:id", userController.getUserById);

module.exports = router;
