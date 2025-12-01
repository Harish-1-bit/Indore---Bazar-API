import express from "express";
import protect from "../middleware/authMiddleware.js";
import orderController from "../controllers/orderContoller.js";

const router = express.Router()

router.get("/",protect.forAuthuser,orderController.getOrders)

router.get("/:id",protect.forAuthuser,orderController.getOrder)

router.post("/create",protect.forAuthuser,orderController.createOrder)

router.put("/:id",protect.forAuthuser,orderController.cancelOrder)

export default router