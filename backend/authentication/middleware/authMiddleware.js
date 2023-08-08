const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyToken = (req, res, next) => {
  const accessToken = req.headers["authorization"];

  if (accessToken) {
    try {
      const decoded = jwt.verify(accessToken, process.env.SALT);
      req.user = decoded;
      next();
    } catch (error) {
        console.log(error);
        error.statusCode = 401;
        next(error);
    //   res.status(401).json({ message: "Invalid Signature" });
    }
  } else {
      const err = new Error("No authorized, Forbidden!");
      err.statusCode = 401
      next(err)
    // res.status(401).json({ message: "Unauthorized request" });
  }
};

module.exports = verifyToken;
