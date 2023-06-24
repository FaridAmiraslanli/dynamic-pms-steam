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

  app.use("", (req, res, next, err) => {
    res.status(500).json({ message: "Server error" });
  });
};

module.exports = router;

// app.use("/gpt", authMiddleware, gptController);

// app.use("", (req, res, next, err) => {
//   res.status(500).json({ message: "Server error" });
// });
