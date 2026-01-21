import User from "../models/User.model.js";

export const registerNewUser = async (req, res) => {
  const data = req.body;

  const user = await User.create({
    username: data.username,
    email: data.email,
  });

  res.status(201).json({
    success: true,
    message: "User Created Successfully",
    data: user,
  });
};
