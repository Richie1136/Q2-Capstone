const express = require("express");
const passport = require("passport");
const Jwt = require("jsonwebtoken");
const passportConfig = require("../passport");
const user = require("../models/user");
const dino = require("../models/dino");
import { restart } from "nodemon";

const userRouter = express.Router();

const signToken = (userID) => {
  return Jwt.sign(
    {
      iss: "cmackey",
      sub: userID,
    },
    "cmackey",
    { expiresIn: "1h" },
  );
};

userRouter.post("register", (req, res) => {
  const { username, password, role } = req.body;
  user.findOne({ username }, (err, user) => {
    if (err) res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user) res.status(400).json({ message: { msgBody: "Username is already taken", msgError: true } });
    else {
      const newUser = new user({ username, password, role });
      newUser.save((err) => {
        if (err) res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else res.status(201).json({ message: { msgBody: "Account successfully created", msgError: false } });
      });
    }
  });
});

userRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
  if (req.isAuthenticated()) {
    const { _id, username, role } = req.user;
    const token = signToken(_id);
    res.cookie("access_token", token, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username, role } });
  }
});

userRouter.get("/logout", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.clearCookie("access_token");
  res.json({ user: { username: "", role: "" }, success: true });
});

userRouter.post("/dino", passport.authenticate("jwt", { session: false }), (req, res) => {
  const dino = new dino(req.body);
  dino.save((err) => {
    if (err) res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
    else {
      req.user.dinos.push(dino);
      req.user.save((err) => {
        if (err) res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
        else res.status(200).json({ message: { msgBody: "Successfully created dino", msgError: false } });
      });
    }
  });
});

userRouter.get("/dinos", passport.authenticate("jwt", { session: false }), (req, res) => {
  User.findById({ _id: req.users._id })
    .populate("dinos")
    .exec((err, document) => {
      if (err) res.status(500).json({ message: { msgBody: "Error has occured", msgError: true } });
      else {
        res.status(200).json({ dinos: document.dinos, authenticated: true });
      }
    });
});

userRouter.get("/admin", passport.authenticate("jwt", { session: false }), (req, res) => {
  if (req.user.role === "admin") {
    res.status(200).json({ message: { msgBody: "You are an admin", msgError: false } });
  } else res.status(403).json({ message: { msgBody: "You're not an admin, go away!", msgError: true } });
});

userRouter.get("/authenticated", passport.authenticate("jwt", { session: false }), (req, res) => {
  const { username, role } = req.user;
  res.status(200).json({ isAuthenticated: true, user: { username, role } });
});

module.exports = userRouter;
