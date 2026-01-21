import express from "express";
import {
  createTodo,
  deleteTodo,
  fetchAllTodos,
  fetchSingleTodo,
  updateTodo,
} from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", fetchAllTodos);
router.post("/", createTodo);
router.get("/:id", fetchSingleTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
