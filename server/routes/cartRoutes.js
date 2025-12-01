import express from "express";
import cartContoller from "../controllers/cartController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/",protect.forAuthuser,cartContoller.getAllcart)

router.post("/add",protect.forAuthuser,cartContoller.addCart)

router.put("/:cid",protect.forAuthuser,cartContoller.updateCart)

router.delete("/:cid",protect.forAuthuser,cartContoller.removeCart)

export default router