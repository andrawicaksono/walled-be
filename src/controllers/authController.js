const formatter = require("../utils/responseFormatter");

const registerUser = (authService) => async (req, res, next) => {
  try {
    const data = req.body;

    const registerInput = {
      fullName: data.full_name,
      email: data.email,
      password: data.password,
      phoneNumber: data.phone_number,
    };

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

module.exports = (authService) => {
  return {
    registerUser: registerUser(authService),
  };
};
