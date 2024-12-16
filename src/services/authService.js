const bcrypt = require("bcrypt");
const { accountNumberGenerator } = require("../utils/accountNumberGenerator");
const { AppError } = require("../utils/error");

const registerUser = (userRepository) => async (data) => {
  try {
    const [user, errUser] = await userRepository.findUserByEmail(data.email);
    if (errUser) throw errUser;
    if (user) throw new AppError("Email has already registered", 409);

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(data.password, saltRounds);

    const accountNo = accountNumberGenerator(6);

    const userInput = {
      fullName: data.fullName,
      email: data.email,
      password: hashedPassword,
      phoneNumber: data.phoneNumber,
      avatarUrl: data.avatarUrl,
      accountNo: accountNo,
    };

    const [newUser, errNewUser] = await userRepository.createUser(userInput);
    if (errNewUser) throw errNewUser;

    return [newUser, null];
  } catch (err) {
    return [null, err];
  }
};

const login = (userRepository, tokenService) => async (data) => {
  try {
    const [user, err] = await userRepository.findUserByEmail(data.email);
    if (err) throw err;

    if (!user) throw new AppError("User not found", 401);

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw new AppError("Wrong password", 401);

    const token = tokenService.sign({ id: user.id });

    return [{ user: user, token: token }, null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (userRepository, tokenService) => {
  return {
    registerUser: registerUser(userRepository),
    login: login(userRepository, tokenService),
  };
};
