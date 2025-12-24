import express from "express";
import reviewControllers from "../controllers/reviewControllers.js";

const router = express.Router()

router.get("/",reviewControllers.getAllReviews)

router.post("/",reviewControllers.addReview)

router.delete("/:rid",reviewControllers.removeReview)

export default router