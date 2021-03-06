require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const passport = require("passport");

const userRoutes = require("./routes/user");
const stockRoutes = require("./routes/stock");
const companyRoutes = require("./routes/company");
const followRoutes = require("./routes/followStock");
const verifyRoutes = require("./routes/verify");
const miscRoutes = require("./routes/misc");
const cron = require("./routes/cron");

app.use(cors());

mongoose
  .connect(process.env.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDb Atlas connected successfully"))
  .catch((err) => {
    console.log("Unable to connect to MongoDb Atlas");
    console.log(err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require("./passportConfig")(passport);

app.use("/api/auth", userRoutes);
app.use("/api/stock", stockRoutes);
app.use("/api/company", companyRoutes);
app.use("/api/follow", followRoutes);
app.use("/api/verify", verifyRoutes);
app.use("/api/misc", miscRoutes);

app.use("/api/", cron);

module.exports = app;
