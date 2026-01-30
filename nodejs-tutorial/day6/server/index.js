import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
import { logger } from "./utils/logger.js";

const app = express();
app.use(cors());

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  logger.http(`${req.method} ${req.url}`);
  next();
});

const PORT = 3001;

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
