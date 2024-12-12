const db = require("./db");

const UserRepository = require("../repository/userRepository");

const UserService = require("../services/userService");

const CheckController = require("../controllers/checkController");
const UserController = require("../controllers/userController");

const checkController = CheckController();

const userRepository = UserRepository(db);
const userService = UserService(userRepository);
const userController = UserController(userService);

module.exports = {
  checkController,
  userController,
};
