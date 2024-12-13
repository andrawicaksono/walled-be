const express = require("express");
const router = express.Router();
const { transactionController, authMiddleware } = require("../container");

router.post(
  "/",
  authMiddleware.verifyToken,
  transactionController.createTransaction
);

router.get(
  "/",
  authMiddleware.verifyToken,
  transactionController.getAllUserTransactions
);

module.exports = router;
