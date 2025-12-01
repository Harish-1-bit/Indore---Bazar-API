import e from "express";
import authController from "../controllers/authControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = e.Router();

router.post("/register", authController.registerUse);
router.post("/login", authController.loginuser);
router.post("/private", protect.forAuthuser, authController.privateAccess);

export default router;
