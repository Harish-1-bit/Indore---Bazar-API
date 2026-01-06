import express from "express";
import shopOwnerController from "../controllers/shopOwnerController.js";
import protect from "../middleware/authMiddleware.js";
import upload from "../middleware/fileUploadMidleware.js";

const router = express.Router()

router.get("/",protect.forAuthuser,shopOwnerController.getShop)

router.post("/add-product",protect.forAuthuser,upload.single('productImage'),shopOwnerController.addProduct)

router.put("/product/:pid",protect.forAuthuser,shopOwnerController.updateProduct)

router.get("/order/",protect.forAuthuser,shopOwnerController.getMyShoporder)

router.put("/order/:oid",protect.forAuthuser,shopOwnerController.updateOrder)

router.post("/create-shop",protect.forAuthuser,shopOwnerController.addShop)

router.put("/shop/:sid",protect.forAuthuser,shopOwnerController.updateShop)

router.post("/coupon",protect.forAuthuser,shopOwnerController.createCoupon)

router.put("/coupon/:cid",protect.forAuthuser,shopOwnerController.updateCoupon)

export default router