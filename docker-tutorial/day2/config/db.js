import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB Successfully");
  } catch (error) {
    console.log("Failed to connect to MongoDB: ", error);
  }
};
