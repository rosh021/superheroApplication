import express from "express";
import { checkPassword, hashPassword } from "../helper/bcryptHelper.js";

import { createNewUser, getUser } from "../models/userModel/UserModel.js";
const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    req.body.password = hashPassword(req.body.password);
    const result = await createNewUser(req.body);

    if (result?._id) {
      return res.json({
        status: "success",
        message:
          "You have completed your registration Process, please login now",
      });
    }
    res.json({
      status: "error",
      message: "Unable to create User, Please try again later",
    });
  } catch (error) {
    if (error.message.includes("E11000 duplicate key error collection")) {
      error.status = 200;
      error.message =
        "There is already a register user with this email, please login with this email or use different email.";
    }
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await getUser({ email });

    if (result?._id) {
      let passwordMatch = checkPassword(password, result.password);
      result.password = undefined;

      if (passwordMatch) {
        return res.json({
          status: "success",
          message: "Login Successful",
          result,
        });
      }
    }

    res.json({
      status: "error",
      message: "Invalid Login Details, Please try again",
    });
  } catch (error) {
    next(error);
  }
});

export default router;
