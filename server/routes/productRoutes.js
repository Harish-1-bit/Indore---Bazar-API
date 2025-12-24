import express from "express";
import productController from "../controllers/productController.js";
import reviewRoutes from "../routes/reviewRoutes.js";

const router = express.Router({mergeParams:true})

router.get("/",productController.getAllproducts)

router.get("/:pid",productController.getSingleproduct)

router.get("/search/:query",productController.getSearched)

const addProduct=(req,res,next)=>{
    req.pid=req.params.pid
    next()
}

router.use("/:pid/review",addProduct,reviewRoutes)

export default router