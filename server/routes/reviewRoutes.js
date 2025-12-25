import express from "express";
import reviewControllers from "../controllers/reviewControllers.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router()

router.get("/",protect.forAuthuser, reviewControllers.getAllReviews)

router.post("/",protect.forAuthuser,reviewControllers.addReview)

router.delete("/:rid",protect.forAuthuser,reviewControllers.removeReview)

export default router