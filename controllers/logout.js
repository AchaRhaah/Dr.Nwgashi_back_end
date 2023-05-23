const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");

const Logout = async (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).send({ message: "Internal server error" });
    } else {
      res.clearCookie("session-id");
      res.setHeader("Cache-Control", "no-cache, no-store");
      res.status(200).send({ message: "Logout Successful" });
    }
  });
};

module.exports = Logout;