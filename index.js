const express = require("express");
/*const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Survey");
require("./services/passport");*/
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
