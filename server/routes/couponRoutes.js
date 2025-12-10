import express from "express";
import couponController from "../controllers/couponController.js";

const router = express.Router()

router.get("/:sid",couponController.getCoupons)

router.post("/apply-coupon",couponController.applycoupon)

export default router