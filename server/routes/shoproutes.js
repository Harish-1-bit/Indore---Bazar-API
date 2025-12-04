import express from "express";
import shopController from "../controllers/shopController.js";

const router = express.Router()

router.get("/",shopController.getAllsops)

router.get("/:sid",shopController.getShop)

export default router