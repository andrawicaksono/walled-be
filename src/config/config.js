require("dotenv").config();

const port = parseInt(process.env.APP_PORT);

module.exports = { port };
