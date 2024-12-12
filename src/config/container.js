const db = require("./db");

const UserRepository = require("../repository/userRepository");

const UserService = require("../services/userService");

const UserController = require("../controllers/userController");

const userRepository = UserRepository(db);
const userService = UserService(userRepository);
const userController = UserController(userService);

module.exports = {
  userController,
};
