import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    couponCode:{
        type:String,
        required:[true,"please. enter the coupon code"]
    },
    couponDiscount:{
        type:Number,
        required:[true,"please enter the rate of the discount"]
    },
    isActive:{
        type:Boolean,
        required:true,
        default:true
    },
    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
        required:true
    }
},{
    timestamps:true
})

const Coupon = mongoose.model("Coupon",couponSchema)

export default Coupon