const express = require("express");
const router = express.Router();
const { checkController } = require("../config/container");

router.get("/", checkController.checkHealth);

module.exports = router;
