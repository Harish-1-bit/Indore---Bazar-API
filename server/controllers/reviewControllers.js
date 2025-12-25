import Order from "../models/orderModels.js";
import Review from "../models/reviewModels.js";

const getAllReviews = async (req, res) => {
  const productId = req.pid;
  const reviews = await Review.find({ product: productId });
  if (!reviews) {
    res.status(404);
    throw new Error("No Reviews found!");
  }
  res.status(200).json(reviews);
};

const addReview = async (req, res) => {
  const userId = req.user._id
  const productId = req.pid
  const {rating,text}=req.body
  const orderhistory = await Order.find({user:userId})
  let purchasedBefore = false
  orderhistory.forEach(order=>{
  (order.products.forEach(product=>{
    if(product.product.toString()===productId){
      purchasedBefore=true
    }
    }))
  })
  if(!rating || !text){
    res.status(409)
    throw new Error("please fill all the details")
  }
  const review = await Review.create({
    user:userId,
    product:productId,
    rating:rating,
    text:text,
    isVerifiedBuyer:purchasedBefore?true:false
  })
  res.status(201).json(review)
};
const removeReview = async (req, res) => {
  const reviewId = req.params.rid
  const removeReview = await Review.findByIdAndDelete(reviewId)
  res.status(200).json({
    message:"Review is deleted",
    _id:reviewId
  })
};

const reviewControllers = { getAllReviews, addReview, removeReview };

export default reviewControllers;
