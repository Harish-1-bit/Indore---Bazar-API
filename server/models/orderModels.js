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
        enum:["pending","deliverded","dispatched","cancelled"],
        required:true
    }
},{
    timestamps:true
})

const Order = mongoose.model("Order",orderSchema)

export default Order