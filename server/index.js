require("dotenv").config();

const express = require("express");
//const sequelize = require("./db");
const db = require("./models");

const cors = require("cors");
const fileUpload = require("express-fileupload");

const path = require("path");
const router = require("./routes/index");

const errorHandingMiddleware = require("./middleware/errorHandingMiddleware");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "static")));
app.use(fileUpload({}));
app.use("/api", router);
app.get("/", (req, res) => {
  res.end("<H1>Home Page</H1>");
});

//Error handing
app.use(errorHandingMiddleware);

const start = async () => {
  try {
    await db.sequelize.authenticate();
    await db.sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
