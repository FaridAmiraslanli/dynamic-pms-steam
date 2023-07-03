const authController = require("../controllers/authController");
const userController = require("../controllers/userController");
const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");

const router = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.set("view engine", "ejs");

  app.use("/auth", authController);
  app.use("/user", userController);

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

// app.use("/gpt", authMiddleware, gptController);
