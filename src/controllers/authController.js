const formatter = require("../utils/responseFormatter");

const registerUser = (authService) => async (req, res, next) => {
  const data = req.body;

  const registerInput = {
    fullName: data.full_name,
    email: data.email,
    password: data.password,
    phoneNumber: data.phone_number,
  };

  try {
    const [newUser, err] = await authService.registerUser(registerInput);
    if (err) throw err;

    res.status(201).json({
      message: "Register user success",
      data: formatter.registerUser(newUser),
    });
  } catch (err) {
    next(err);
  }
};

const login = (authService) => async (req, res, next) => {
  const data = req.body;

  try {
    const [result, err] = await authService.login(data);
    if (err) throw err;

    res.status(200).json({
      message: "Login success",
      data: formatter.login(result),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = (authService) => {
  return {
    registerUser: registerUser(authService),
    login: login(authService),
  };
};
