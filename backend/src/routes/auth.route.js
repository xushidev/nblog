import express from "express";
import { login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// Login endpoint
router.post("/login", login);

// Logout endpoint
router.post("/logout", logout);

export default router;