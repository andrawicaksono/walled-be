const db = require("./db");

// Repositories
const UserRepository = require("../repository/userRepository");

// Services
const UserService = require("../services/userService");
const AuthService = require("../services/authService");

// Controllers
const CheckController = require("../controllers/checkController");
const UserController = require("../controllers/userController");
const AuthController = require("../controllers/authController");

// Check
const checkController = CheckController();

// User
const userRepository = UserRepository(db);
const userService = UserService(userRepository);
const userController = UserController(userService);

// Auth
const authService = AuthService(userRepository);
const authController = AuthController(authService);

module.exports = {
  checkController,
  userController,
  authController,
};
