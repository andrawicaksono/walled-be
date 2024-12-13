const express = require("express");
const router = express.Router();

const checkRoutes = require("./checkRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const transactionRoutes = require("./transactionRoutes");

router.use("/check", checkRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/transactions", transactionRoutes);

module.exports = router;
