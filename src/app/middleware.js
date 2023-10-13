const express = require("express");
const cors = require("cors");
const preFix = require("../routes/preFix");
const middleware = [
  express.json(),
  express.urlencoded({ extended: true }),
  cors(),

  // Routes always stay in line end
  preFix,
];

module.exports = middleware;
