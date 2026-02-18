import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import User from "./models/User.model.js";

dotenv.config();

await connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("OKs");
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  console.log(users);

  res.status(200).json({
    success: true,
    data: users,
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
