const verifyToken = (userService, tokenService) => async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({
      success: false,
      message: "Access denied",
    });

  try {
    const decoded = tokenService.verify(token);

    const [user, err] = await userService.getUserById(decoded.id);
    if (err) throw err;

    req.user = user;

    next();
  } catch (err) {
    console.error(err);
    res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};

module.exports = (userService, tokenService) => {
  return {
    verifyToken: verifyToken(userService, tokenService),
  };
};
