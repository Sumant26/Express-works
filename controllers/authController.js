import { validationResult } from "express-validator";
import * as userService from "../services/userService.js";
import generateToken from "../utils/generateToken.js";
import logger from "../config/logger.js";

export const register = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { name, email, password } = req.body;

    const existing = await userService.findUserByEmail(email);
    if (existing) return res.status(400).json({ message: "User already exists" });

    const user = await userService.createUser({ name, email, password });
    const token = generateToken({ id: user._id, email: user.email });

    logger.info(`User registered: ${email}`);

    res.status(201).json({ id: user._id, name, email, token });
  } catch (err) {
    next(err);
  }
};

export const login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;
    const user = await userService.findUserByEmail(email);
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const isMatch = await userService.comparePassword(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

    const token = generateToken({ id: user._id, email: user.email });

    logger.info(`User logged in: ${email}`);

    res.json({ id: user._id, name: user.name, email, token });
  } catch (err) {
    next(err);
  }
};

export const getProfile = async (req, res, next) => {
  try {
    res.json(req.user);
  } catch (err) {
    next(err);
  }
};
