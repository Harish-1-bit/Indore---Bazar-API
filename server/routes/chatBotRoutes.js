import express from "express";
import getAnswer from "../controllers/chatBotController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/",protect.forAuthuser, getAnswer)

export default router