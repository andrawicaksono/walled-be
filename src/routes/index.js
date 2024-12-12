const express = require("express");
const router = express.Router();

const checkRoutes = require("./checkRoutes");
const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");

router.use("/check", checkRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

module.exports = router;
