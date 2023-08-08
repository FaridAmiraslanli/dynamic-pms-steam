const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("../swagger.json");
const authController = require("../controllers/authController");
const userController = require("../controllers/userController");

const router = (app) => {
  app.use("/auth", authController);
  app.use("/user", userController);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

  app.all("*", (req, res, next) => {
    const err = new Error("Not found");
    err.status = "fail";
    err.statusCode = 404;
    throw err;
    next();
  });

  app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  });
};

module.exports = router;
