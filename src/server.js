const express = require("express");
const cors = require("cors");
const config = require("./config");
const routes = require("./routes");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);
app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`Server running on http://localhost:${config.port}`);
});

module.exports = app;
