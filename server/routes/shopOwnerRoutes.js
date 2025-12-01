import express from "express";
import shopOwnerController from "../controllers/shopOwnerController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.post("/add-product",protect.forAuthuser,shopOwnerController.addProduct)

router.put("/product/:pid",protect.forAuthuser,shopOwnerController.updateProduct)

router.put("/order/:oid",protect.forAuthuser,shopOwnerController.updateOrder)

router.post("/create-shop",protect.forAuthuser,shopOwnerController.addShop)

router.put("/shop/:sid",protect.forAuthuser,shopOwnerController.updateShop)

export default router