import { Router } from "express";
import {
  createNewUser,
  fetchUserDetails,
  loginUser,
} from "../controllers/user.controller.js";

const router = Router();

router.post("/register", createNewUser);
router.post("/login", loginUser);
router.get("/", fetchUserDetails);

export default router;
