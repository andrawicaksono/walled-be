require("dotenv").config();
const jwtConfig = require("./jwt");

const port = parseInt(process.env.APP_PORT);

module.exports = {
  port,
  jwt: jwtConfig,
};
