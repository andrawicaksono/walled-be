const express = require("express");
const router = express.Router();
const { transactionController, authMiddleware } = require("../container");

router.post(
  "/",
  authMiddleware.verifyToken,
  transactionController.createTransaction
);

module.exports = router;
