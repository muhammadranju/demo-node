const express = require("express");
const app = express();
const middleware = require("./middleware");
app.use([middleware]);
module.exports = app;
