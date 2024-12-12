const bcrypt = require("bcrypt");
const { accountNumberGenerator } = require("../utils/accountNumberGenerator");
const { AppError } = require("../utils/error");

const registerUser = (userRepository) => async (data) => {
  try {
    const [user, _] = await userRepository.findUserByEmail(data.email);
    if (user) throw new AppError("Email has already registered", 409);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const accountNo = accountNumberGenerator(6);

    const userInput = {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phoneNumber: data.phoneNumber,
      accountNo: accountNo,
    };

    const [newUser, err] = await userRepository.createUser(userInput);
    if (err) throw err;

    return [newUser, null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (userRepository) => {
  return {
    registerUser: registerUser(userRepository),
  };
};
