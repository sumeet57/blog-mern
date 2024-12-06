import express from "express";
import { body, validationResult } from "express-validator";
const router = express.Router();
import { register } from "../controllers/user.controllers.js";
import User from "../model/blog.model.js";

router.post(
  "/register",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("username")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be between 3 and 20 characters"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6, max: 12 })
      .withMessage("Password must be between 6 and 12 characters"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    register(req, res);
  }
);

export default router;
