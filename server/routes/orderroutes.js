import express from "express";
import protect from "../middleware/authMiddleware.js";
import orderController from "../controllers/orderContoller.js";

const router = express.Router()

router.get("/",protect.forAuthuser,orderController.getOrders)

router.get("/:oid",protect.forAuthuser,orderController.getOrder)

router.post("/create",protect.forAuthuser,orderController.createOrder)

router.put("/:oid",protect.forAuthuser,orderController.cancelOrder)

export default router