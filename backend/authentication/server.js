require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connect = require("./utils/db");
const router = require("./routers/router");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.set("view engine", "ejs");

const PORT = process.env.PORT || 8080;

router(app);

connect();

app.listen(PORT, () => {
  console.log("Node connected");
});
