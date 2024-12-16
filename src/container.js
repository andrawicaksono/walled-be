const config = require("./config");

// Repositories
const UserRepository = require("./repositories/userRepository");
const TransactionRepository = require("./repositories/transactionRepository");

// Services
const UserService = require("./services/userService");
const AuthService = require("./services/authService");
const TokenService = require("./services/tokenService");
const TransactionService = require("./services/transactionService");

// Controllers
const CheckController = require("./controllers/checkController");
const UserController = require("./controllers/userController");
const AuthController = require("./controllers/authController");
const TransactionController = require("./controllers/transactionController");

// Middlewares
const AuthMiddleware = require("./middlewares/auth");

// Check
const checkController = CheckController();

// User
const userRepository = UserRepository(config.db);
const userService = UserService(userRepository);
const userController = UserController(userService);

// Auth
const tokenService = TokenService(config.jwt);
const authService = AuthService(userRepository, tokenService);
const authController = AuthController(authService);
const authMiddleware = AuthMiddleware(userService, tokenService);

// Transaction
const transactionRepository = TransactionRepository(config.db);
const transactionService = TransactionService(
  transactionRepository,
  userRepository
);
const transactionController = TransactionController(transactionService);

module.exports = {
  checkController,
  userController,
  authController,
  authMiddleware,
  transactionController,
};
