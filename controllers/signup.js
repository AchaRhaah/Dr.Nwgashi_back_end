const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const passwordComplexity = require("joi-password-complexity");

const Signup = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exists" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = await new User({
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      role: req.body.role,
    }).save();

    const token = newUser.generateAuthToken();

    res.status(201).send({ message: "User Created", token });
  } catch (error) {
    res.status(500).send({ message: "Internal server Error" });
  }
};

module.exports = Signup;
