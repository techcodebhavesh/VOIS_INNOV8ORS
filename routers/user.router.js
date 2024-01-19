const express = require("express");
const {
  createUserController,
  loginUserController,
} = require("./../controllers/user.controller");
const userRouter = express.Router();

// @route Post /api/user/create
// @desc Testing My SQL Connection
// @access Everyone
userRouter.post("/create", createUserController);

// @route Post /api/user/login
// @desc Testing My Server Connection
// @access Everyone
userRouter.post("/login", loginUserController);

module.exports = userRouter;
