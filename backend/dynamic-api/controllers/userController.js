const User = require("../model/userModel");

module.exports = {
  create: (req, res) => {
    const { name, email } = req.body;
    const user = User.create({
      name,
      email,
      gameInfo: undefined
    });
    return res.send(user);
  },
};
