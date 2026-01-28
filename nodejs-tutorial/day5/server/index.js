import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";

const app = express();

connectDB();

app.use(
  cors({
    origin: "*",
    methods: ["POST", "GET", "PUT", "PATCH"],
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.use("/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is working on PORT ${PORT}`);
});

// Catches Error
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Something went wrong";

  res.status(statusCode).json({
    success: false,
    message,
  });
});
