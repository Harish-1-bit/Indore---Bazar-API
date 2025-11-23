import e from "express";
import authController from "../controllers/authControllers.js";

const router=e.Router()

router.post("/register",authController.registerUse)
router.post("/login",authController.loginuser)

export default router