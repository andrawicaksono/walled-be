const {
  registerUserFormatter,
  loginFormatter,
} = require("./authResponseFormatter");

module.exports = {
  registerUser: registerUserFormatter,
  login: loginFormatter,
};
