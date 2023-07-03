require("dotenv").config();
const router = require("express").Router();
const User = require("../model/userModel");
const cryto = require("crypto");
const jwt = require("jsonwebtoken");

router.post("/registration", async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (existUser) {
      const err = new Error("Email already exists");
      next(err);
      // return res.status(400).json({ message: "Email already exists" });
    }
    const hashedPassword = cryto.pbkdf2Sync(
      password,
      process.env.SALT,
      10000,
      64,
      "sha512"
    );

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    res.json("Registration successfull");
  } catch (error) {
    next(error);
    // res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = cryto.pbkdf2Sync(
    password,
    process.env.SALT,
    10000,
    64,
    "sha512"
  );

  try {
    const user = await User.findOne({ email, password: hashedPassword }).select(
      "-password"
    );
    if (user) {
      const { ...theRest } = user;
      const accsessToken = jwt.sign(theRest, process.env.SECRET_KEY);
      res.status(200).json({ user, accsessToken });
    } else {
      const err = new Error("Email or password is wrong");
      next(err)
      // res.status(401).json({ message: "Email or password is wrong" });
    }
  } catch (error) {
    next(error);
    // res.status(500).json({ message: error.message });
  }
});

module.exports = router;
