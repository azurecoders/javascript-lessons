import express from "express";
import "dotenv/config";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/user.route.js"

// import dotenv from "dotenv"
// dotenv.config()

const app = express();

connectDB();

const PORT = process.env.PORT || 3001;

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/user", userRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
