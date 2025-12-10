import express from "express";
import cartContoller from "../controllers/cartController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/",protect.forAuthuser,cartContoller.getAllcart)

router.post("/add",protect.forAuthuser,cartContoller.addCart)

router.put("/:cid",protect.forAuthuser,cartContoller.updateCart)

router.delete("/:productId",protect.forAuthuser,cartContoller.removeCart)

router.post("/clear",protect.forAuthuser,cartContoller.clearCart)

export default router