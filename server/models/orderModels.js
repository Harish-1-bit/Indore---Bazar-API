import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart",
        required:true
    },
    shop:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Shop",
        required:true
    },
    status:{
        type:String,
        enum:["placed","deliverded","dispatched","cancelled"],
        required:true
    },
    isDiscount:{
        type:Boolean,
        required:true,
        default:false
    },
    coupon:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Coupon",
    },
    totalBill:{
        type:Number,
        required:true,
    }
},{
    timestamps:true
})

const Order = mongoose.model("Order",orderSchema)

export default Order