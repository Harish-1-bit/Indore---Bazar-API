import express from "express";
import adminControllers from "../controllers/adminControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/user", protect.forAdmin, adminControllers.getUsers);
router.put("/user/:uid", protect.forAdmin, adminControllers.updateUser);
router.get("/order", protect.forAdmin, adminControllers.getAllorder);
router.get("/shop", protect.forAdmin, adminControllers.getAllshops);
router.put("/shop/:sid", protect.forAdmin, adminControllers.updateShop);

export default router;
