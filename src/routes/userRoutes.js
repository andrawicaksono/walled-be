const express = require("express");
const router = express.Router();
const { userController, authMiddleware } = require("../config/container");

// router.get("/:id", userController.getUserById);
router.get(
  "/me",
  authMiddleware.verifyToken,
  userController.getAuthenticatedUser
);

module.exports = router;
