import User from "../models/User.model.js";
import { errorHandler } from "../utils/errorHandler.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";
import { transporter } from "../utils/transporter.js";
import { v4 as uuidv4 } from "uuid";
import { imagekit } from "../utils/imagekit.js";
import { logger } from "../utils/logger.js";

export const createNewUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    logger.info(`User data recieved in body ${name}, ${email}`);

    const userExists = await User.findOne({
      email,
    });

    if (userExists) {
      // throw new Error("Email Already Exists");
      logger.error(`Email failed error for ${email}`);
      return next(errorHandler(500, "Email already exists"));
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    logger.info(`Starting image upload for email ${email}`);
    const uploadedImage = await imagekit.upload({
      file: req.file.buffer,
      fileName: Date.now() + req.file.originalname,
      folder: "testing_images/",
    });

    logger.info(`Image uploaded successfully for mail ${email}`);

    // const token = await generateToken(user._id);

    // Math.random() -> 0 - 1 0.2234 0.99
    // Math.floor(Math.random()) -> 0 1 0 0 1 0 1

    // const randomVerificationCode = Math.floor(Math.random() * 1000);
    const randomVerificationCode = uuidv4();

    const user = new User({
      name,
      email,
      password: hashedPassword,
      verificationToken: randomVerificationCode,
      profilePic: uploadedImage.url,
      verificationExpiryTime: Date.now() + 15 * 60 * 1000, // 15 minutes +
    });

    await user.save();

    const verifyUrl = `http://localhost:5173/verify-email?token=${randomVerificationCode}&email=${email}`;

    await transporter.sendMail({
      from: "codenow12345@gmail.com",
      to: email,
      subject: "Verify Your Email",
      html: `
      <h2>Email Verification</h2>
      <p>Click below to verify your email:</p>
      <a href="${verifyUrl}">Verify Email</a>
    `,
    });

    res.status(201).json({
      success: true,
      message: `User Registered! A verification mail has been send to ${email}`,
    });
  } catch (error) {
    console.log("Error: ", error);
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

    if (!user.isVerified) {
      return next(
        errorHandler(500, "You are not verified! Please verify your account"),
      );
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

export const verifyEmail = async (req, res, next) => {
  try {
    const { token, email } = req.query;

    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(500, "Invalid User"));
    }

    if (user.verificationToken !== token) {
      return next(errorHandler(500, "Invalid Token"));
    }

    const expiryTime = new Date(user.verificationExpiryTime).getTime();

    // 7:00 -> Request Time -> Signup Request
    // 6:15 -> Expiry Time
    // 7:20 -> New Request for Email Verification

    if (expiryTime < Date.now()) {
      return next(errorHandler(500, "Token Expired"));
    }

    user.isVerified = true;
    user.verificationToken = null;
    user.verificationExpiryTime = null;

    await user.save();

    res.status(200).json({
      success: true,
      message: "You are verified successfully",
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
