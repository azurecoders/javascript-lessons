import User from "../models/User.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const createNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      // throw new Error("Email Already Exists");
      return next(errorHandler(500, "Email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = await generateToken(user._id);

    res.status(201).json({
      success: true,
      message: "User Created Successfully",
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(500, "Invalid Credentials"));
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return next(errorHandler(500, "Invalid Credentials"));
    }

    const token = await generateToken(user._id);

    res.status(200).json({
      success: true,
      message: "User Logged in Successfully",
      data: token,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchUserProfile = async (req, res, next) => {
  try {
    const id = req.user;

    const user = await User.findById(id);

    if (!user) {
      return next(errorHandler(500, "Something went wrong"));
    }

    res.status(200).json({
      success: true,
      message: "User Information Fetched Successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
