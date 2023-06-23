require("dotenv").config();
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const connect = require("./Utils/db");
const userRouter = require("./routers/user");
const verifyToken = require("./middleware/auth");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view enjine", "ejs");

const PORT = process.env.PORT || 8080;


app.use("/", require("./routers/user.js"));

const swaggerDocs = require("./swagger.json");

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

connect();
app.listen(PORT, () => {
  console.log("Node connected");
});
