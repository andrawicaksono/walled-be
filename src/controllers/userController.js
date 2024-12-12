const formatter = require("../utils/responseFormatter");

const getUserById = (userService) => async (req, res, next) => {
  const id = req.params.id;

  try {
    const [user, err] = await userService.getUserById(id);

    if (err) throw err;

    res.status(200).json({
      status: "success",
      message: "Get user success",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

const getAuthenticatedUser = (userService) => async (req, res, next) => {
  const id = req.user.id;

  try {
    const [user, err] = await userService.getUserById(id);

    if (err) throw err;

    res.status(200).json({
      status: "success",
      message: "Get user success",
      data: formatter.authenticatedUser(user),
    });
  } catch (err) {
    next(err);
  }
};

module.exports = (userService) => {
  return {
    getUserById: getUserById(userService),
    getAuthenticatedUser: getAuthenticatedUser(userService),
  };
};
