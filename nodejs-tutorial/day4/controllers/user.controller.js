import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createNewUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      data: token,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials! User Not Registered",
      });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid Credentials! Password didn't match",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      success: true,
      message: "User Logged In Successfully",
      data: token,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};

export const fetchUserDetails = async (req, res) => {
  try {
    const { token } = req.body;

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, jwtData) => {
        if (err) {
          res.status(400).json({
            success: false,
            message: "Forbidden",
          });
        }

        return jwtData;
      },
    );

    console.log(decoded);

    const user = await User.findById(decoded._id);

    res.status(200).json({
      success: true,
      message: "User Fetched Successfully",
      data: user,
    });
  } catch (error) {
    console.log("Error: ", error);
  }
};
