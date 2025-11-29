import express from "express";
import adminControllers from "../controllers/adminControllers.js";
import adminProtect from "../middleware/adminMiddleware.js";

const router = express.Router()

router.get("/user", adminProtect ,adminControllers.getUsers)


export default router