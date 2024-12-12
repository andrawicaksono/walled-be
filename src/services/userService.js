const getUserById = (userRepository) => async (id) => {
  try {
    const [user, err] = await userRepository.getUserById(id);

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
