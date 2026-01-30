import express from "express";
import {
  createNewUser,
  fetchUserProfile,
  loginUser,
  verifyEmail,
} from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/verifyUser.js";
import multer from "multer";

const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

router.post("/signup", upload.single("profile"), createNewUser);
router.post("/login", loginUser);
router.get("/verify-email", verifyEmail);
router.get("/", verifyUser, fetchUserProfile);

export default router;
