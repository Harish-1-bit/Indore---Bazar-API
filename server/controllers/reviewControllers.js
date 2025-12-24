import Review from "../models/reviewModels.js"

const getAllReviews = async (req,res)=>{
    const productId = req.pid
    const reviews= await Review.find({product:productId})
    if(!reviews){
        res.status(404)
        throw new Error("No Reviews found!")
    }
    res.status(200)
    .json(reviews)
}

const addReview = async (req,res)=>{
        const productId = req.pid
    const review= await Review.find({productId})
    if(!review){
        res.status(404)
        throw new Error("No Reviews found!")
    }
    res.send("review added")
    
}
const removeReview = async (req,res)=>{
    res.send("review is deleted")
}

const reviewControllers = {getAllReviews, addReview, removeReview}

export default reviewControllers