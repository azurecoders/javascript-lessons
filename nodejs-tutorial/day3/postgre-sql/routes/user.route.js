import express from "express";
import {
  createNewUser,
  deleteUser,
  fetchAllUsers,
  getSingleUser,
  updateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", fetchAllUsers);
router.post("/", createNewUser);
router.get("/:id", getSingleUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
