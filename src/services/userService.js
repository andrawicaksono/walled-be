const { AppError } = require("../utils/error");

const getUserById = (userRepository) => async (id) => {
  try {
    const [user, err] = await userRepository.findUserById(id);

    if (err) throw err;

    if (!user) throw new AppError("User not found", 404);

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
