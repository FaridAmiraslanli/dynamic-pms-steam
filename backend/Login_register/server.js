require("dotenv").config();
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const connect = require("./Utils/db");
const router = require("./routers/router");

const app = express();

const PORT = process.env.PORT || 8080;

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
router(app);
connect();
app.listen(PORT, () => {
  console.log("Node connected");
});
