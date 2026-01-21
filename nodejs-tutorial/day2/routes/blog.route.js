import express from "express";
import {
  createBlog,
  deleteBlog,
  fetchAllBlogs,
  fetchSingleBlog,
  updateBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.post("/", createBlog);
router.get("/", fetchAllBlogs);
router.get("/:id", fetchSingleBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

export default router;
