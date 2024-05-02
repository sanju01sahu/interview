const express = require("express");
// const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
});

const UserModel = mongoose.model("user", userSchema);

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).send({ msg: "user alraedy Exists" });
    }
    if (!checkPassword(password)) {
      return res.status(400).send({ msg: "Weak Password" });
    }

    const hashedPass = await bcrypt.hash(password, 5);
    // console.log(password, hashedPass)
    const newUser = new UserModel({ username, email, password: hashedPass });

    await newUser.save();
    res.status(200).send({ msg: "User Register Sucessful" });
  } catch (error) {
    res.status(400).send({ msg: "Somthing Went wrong", error });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = UserModel.findOne({ email });
    if (!user) {
      return res.status(400).send({ msg: "user does not Exists" });
    }
    bcrypt.compare(password, user.password, (err, res) => {
      if (err) {
        return res.status(400).send({ msg: "worng pass" });
      } else {
        jwt.sign({ ...user }, "1h", process.env.PRIVATE_KEY, (err, token) => {
          if (token) {
            res.status(200).send({ token, user });
          }
        });
      }
    });
  } catch (error) {
    res.status(400).send({ msg: "Somthing Went wrong", error });
  }
});

function checkPassword(str) {
  let flag1, flag2;
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const num = "0123456789";

  if (str.length >= 8) {
    flag1 = true;
  }

  for (let i = 0; i < str.length; i++) {
    if (alpha.include(str[i])) {
      flag2 = true;
    }
  }

  return flag1 && flag2;
}

module.exports = router;
