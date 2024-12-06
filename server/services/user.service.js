import User from "../model/user.model.js";

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required");
  }
  const user = new User({
    username,
    email,
    password,
  });
  await user.save();
  return user;
};
