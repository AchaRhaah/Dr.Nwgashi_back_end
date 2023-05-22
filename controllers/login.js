const { User } = require("../models/user");
const bcrypt = require("bcrypt");

const Login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user)
      return res.status(401).send({ message: "Invalid email or password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "Invalid email or password" });

    res.status(200).send({ message: "Login Successful" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

module.exports = Login;
