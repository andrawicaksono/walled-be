const getUserById = (userService) => async (req, res, next) => {
  try {
    const id = req.params.id;

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

module.exports = (userService) => {
  return {
    getUserById: getUserById(userService),
  };
};
