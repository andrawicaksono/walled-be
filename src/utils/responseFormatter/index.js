const {
  registerUserFormatter,
  loginFormatter,
} = require("./authResponseFormatter");
const { authenticatedUserFormatter } = require("./userResponseFormatter");

module.exports = {
  registerUser: registerUserFormatter,
  login: loginFormatter,
  authenticatedUser: authenticatedUserFormatter,
};
