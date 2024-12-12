const express = require("express");
const router = express.Router();

const checkRoutes = require("./checkRoutes");
const userRoutes = require("./userRoutes");

router.use("/check", checkRoutes);
router.use("/users", userRoutes);

module.exports = router;
