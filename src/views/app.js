const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const defultRouter = require("../routers/defultRouter");
require("dotenv").config();
const userRouter = require("../routers/userRouter");
//
app.use(cors());
app.use(bodyParser.json());
app.use("/", defultRouter);
app.use("/api/v1", userRouter);

//
module.exports = app;
