require("dotenv").config();
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger.json");
const cors = require("cors");
const connect = require("./Utils/db");
const router = require("./routers/router");

const app = express();
app.use(cors());
app.options("*", cors());

const PORT = process.env.PORT || 8080;

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));
router(app);
connect();
app.listen(PORT, () => {
  console.log("Node connected");
});
