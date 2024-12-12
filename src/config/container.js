const db = require("./db");
const config = require("./config");

// Repositories
const UserRepository = require("../repository/userRepository");

// Services
const UserService = require("../services/userService");
const AuthService = require("../services/authService");
const TokenService = require("../services/tokenService");

// Controllers
const CheckController = require("../controllers/checkController");
const UserController = require("../controllers/userController");
const AuthController = require("../controllers/authController");

// Middlewares
const AuthMiddleware = require("../middlewares/auth");

// Check
const checkController = CheckController();

// User
const userRepository = UserRepository(db);
const userService = UserService(userRepository);
const userController = UserController(userService);

// Auth
const tokenService = TokenService(config.jwt);
const authService = AuthService(userRepository, tokenService);
const authController = AuthController(authService);
const authMiddleware = AuthMiddleware(userService, tokenService);

module.exports = {
  checkController,
  userController,
  authController,
  authMiddleware,
};
