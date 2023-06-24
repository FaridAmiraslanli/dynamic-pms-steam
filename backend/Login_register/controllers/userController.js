require("dotenv").config();
const router = require("express").Router();
const User = require("../model/userModel");
const nodemailer = require("nodemailer");
const cryto = require("crypto");
const jwt = require("jsonwebtoken");
const { decode } = require("punycode");

router.get("/forgot-password", (req, res, next) => {
  res.render("forgot-password");
});

router.get("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const user = await User.findById(id);
  try {
    res.render("reset-password", { email: user.email });
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/forgot-password", async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email }).select("-password");
    if (!user) {
      res.json({ message: "User not Exist" });
      return;
    }
    const { ...theRest } = user;
    const token = jwt.sign(theRest, process.env.SECRET_KEY, {
      expiresIn: "5m",
    });
    user.passResetToken = token;

    user.save();
    const link = `${process.env.BACKEND_URL}/reset-password/${user.id}/${token}`;
    // nodemaile
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SERVICE_USER,
        pass: process.env.SERVICE_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SERVICE_USER,
      // User's email
      to: email,
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json(error.message);
      } else {
        res.json("Email sent" + info.response);
      }
    });

    // nodemaile
    res.json("Password resend link has been sen to email...");
  } catch (error) {
    res.json(error.message);
  }
});

router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const { password, comfirmPassword } = req.body;
  const user = await User.findById(id);

  if (password !== comfirmPassword) {
    res.status(401).json({ message: "Confirm password is incorrect" });
    return;
  }

  if (token !== user.passResetToken) {
    res.status(403).json({ message: "Invalid URL" });
  }
  const hashedPassword = cryto.pbkdf2Sync(
    password,
    process.env.SALT,
    10000,
    64,
    "sha512"
  );
  user.password = hashedPassword;
  user.passResetToken = null;
  user.save();

  res.json("Reset password successfull");
});

router.put("/user/:id", async (req, res) => {
  const { username, email, password } = req.body;
  const accessToken = req.headers["authorization"];
  try {
    const decoded = jwt.verify(accessToken, process.env.SALT);

    if (decoded._doc.email !== email) {
      return res.status(403).json({ message: "Not_Authorized" });
    }
    const hashedPassword = cryto.pbkdf2Sync(
      password,
      process.env.SALT,
      10000,
      64,
      "sha512"
    );

    const updated = { ...req.body };
    updated.password = hashedPassword;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, updated);
    const uUser = updatedUser.toObject();
    delete uUser.password;

    res.json(uUser);
  } catch (error) {
    res.json(error.message);
  }
});

module.exports = router;
