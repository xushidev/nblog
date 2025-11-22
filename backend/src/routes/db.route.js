import express from "express";
import { deleteBlog, editBlog, getAllBlog, getBlog, postBlog } from "../controllers/db.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// Post blog post
router.post("/post", protectRoute, postBlog);

// Edit blog post
router.put("/edit/:id", protectRoute, editBlog);

// Delete blog post
router.delete("/delete/:id", protectRoute, deleteBlog);

// Get all blog posts
router.get("/get", getAllBlog);

// Get a single blog post
router.get("/get/:id", getBlog);

export default router;