import express from "express";
import productController from "../controllers/productController.js";

const router = express.Router()

router.get("/",productController.getAllproducts)

router.get("/:pid",productController.getSingleproduct)

router.get("/search/:query",productController.getSearched)

export default router