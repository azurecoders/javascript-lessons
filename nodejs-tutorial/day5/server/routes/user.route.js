import express from "express";
import { createNewUser, fetchUserProfile, loginUser } from "../controllers/user.controller.js";
import { verifyUser } from "../middlewares/verifyUser.js";

const router = express.Router();

router.post("/signup", createNewUser);
router.post("/login", loginUser);
router.get("/", verifyUser, fetchUserProfile);

export default router;
