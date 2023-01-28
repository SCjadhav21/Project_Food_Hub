const express = require("express");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const saltRounds = +process.env.saltRounds;

const { UserModel } = require("../models/users.model");

const userRouter = express.Router();

userRouter.post("/register", async (req, res) => {
  const payload = req.body;

  try {
    const email = await UserModel.findOne({ email: payload.email });
    const mobile = await UserModel.findOne({ mobile: payload.mobile });
    if (email) {
      res
        .status(200)
        .send({ msg: "email is allready added try to login", error: true });
    } else if (mobile) {
      res
        .status(200)
        .send({ msg: "mobile is allready added try to login", error: true });
    } else {
      bcrypt.hash(payload.password, saltRounds, async (err, hash) => {
        if (err) {
          throw err;
        } else {
          payload.password = hash;
          const user = new UserModel(payload);
          await user.save();
          res.send({ msg: "registred", error: false });
        }
      });
    }
  } catch (error) {
    res
      .status(400)
      .send({ msg: "something went wrong while register user", error });
    console.log(error);
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          throw err;
        } else {
          if (result) {
            jwt.sign(
              {
                userId: user._id,
                userName: user.name,
                userType: user.userType,
              },
              process.env.secretKey,
              (err, token) => {
                if (err) {
                  throw err;
                } else {
                  res.status(200).send({
                    msg: "logged in success",
                    token,
                    username: user.name,
                    error: false,
                  });
                }
              }
            );
          } else {
            res.send({ msg: "wrong credential", error: true });
          }
        }
      });
    } else {
      res.send({ msg: "User Not found", error: true });
    }
  } catch (error) {
    res
      .status(400)
      .send({ msg: "something went wrong while login user", error });
    console.log(error);
  }
});

module.exports = { userRouter };
