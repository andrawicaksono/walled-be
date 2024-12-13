const express = require("express");
const router = express.Router();
const { transactionController, authMiddleware } = require("../container");
const { validate } = require("../middlewares/validation");
const {
  createTransactionSchema,
} = require("../validators/transactionValidator");

router.post(
  "/",
  authMiddleware.verifyToken,
  validate(createTransactionSchema),
  transactionController.createTransaction
);

router.get(
  "/",
  authMiddleware.verifyToken,
  transactionController.getAllUserTransactions
);

module.exports = router;
