import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

export const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

export const createUser = async ({ name, email, password }) => {
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);
  return await User.create({ name, email, password: hashed });
};

export const comparePassword = async (plain, hashed) => {
  return await bcrypt.compare(plain, hashed);
};
