const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.json());

const morgan = require("morgan");
app.use(morgan("dev"));

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});

app.use(limiter);

module.exports = app;