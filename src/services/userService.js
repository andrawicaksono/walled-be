const { accountNumberGenerator } = require("../utils/accountNumberGenerator");
const { AppError } = require("../utils/error");
const bcrypt = require("bcrypt");

const getUserById = (userRepository) => async (id) => {
  try {
    const [user, err] = await userRepository.findUserById(id);

    if (err) throw err;

    return [user, null];
  } catch (err) {
    return [null, err];
  }
};

module.exports = (userRepository) => {
  return {
    getUserById: getUserById(userRepository),
  };
};
