const { AppError } = require("../utils/error");

const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).send({
      status: "error",
      message: err.message,
    });
  }

  console.error(err);

  return res.status(500).send({
    status: "error",
    message: "Internal Server Error",
  });
};

module.exports = { errorHandler };
