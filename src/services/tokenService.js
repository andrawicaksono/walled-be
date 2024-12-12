const jwt = require("jsonwebtoken");

const verify = (config) => (token) => {
  return jwt.verify(token, config.secret);
};

const sign = (config) => (data) => {
  return jwt.sign(data, config.secret, { expiresIn: config.expiresIn });
};

module.exports = (config) => {
  return {
    verify: verify(config),
    sign: sign(config),
  };
};
