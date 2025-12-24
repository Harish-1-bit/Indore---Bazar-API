import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    rating:{
        type:Number,
        required:true,
        min:[1,"quantitiy can not be less then 1 5"],
        max:[1,"quantitiy can not be  more then 5"],
        default:1
    },
    text:{
        type:String,
        required:true
    },
    isVerifiedBuyer:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
})

const Review = mongoose.model("Review",reviewSchema)

export default Review