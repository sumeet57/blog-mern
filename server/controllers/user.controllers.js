import User from "../model/user.model.js";
import { createUser } from "../services/user.service.js";
import { validationResult } from "express-validator";

export const register = async (req, res) => {
  const message = validationResult(req);
  if (!message.isEmpty()) {
    return res.status(400).json({ errors: message.array() });
  }

  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ username });
  const existingEmail = await User.findOne({email});
  if (existingUser) {
    return res
      .status(400)
      .json({ errors: [{ msg: "Username already exists" }] });
  }
  if (existingEmail) {
    return res
      .status(400)
      .json({ errors: [{ msg: "Email already exists" }] });
  }

  const hashedPassword = await User.hashPassword(password);

  const user = await createUser({ username, email, password: hashedPassword });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });
};
