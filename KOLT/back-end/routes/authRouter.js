import express from "express";
import * as authController from "../controllers/auth-controller.js";
const router = express.Router();

// http://localhost/server/api/auth/register
router.post("/login", authController.login);
router.post("/register", authController.register);

export default router;
