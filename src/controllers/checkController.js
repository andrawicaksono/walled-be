const checkHealth = () => async (req, res, next) => {
  try {
    res.status(200).send({
      status: "success",
      message: "OK",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = () => {
  return {
    checkHealth: checkHealth(),
  };
};