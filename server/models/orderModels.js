import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    products:[{
        product:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Product",
            required:true
        },
        qty:{
            type:Number,
            required:true,
            min:[1,"Quantity could not be less then 1"],
            default:1 
        },
        purchasedPrice:{
            type:Number,
            required:true,
             
        },
        _id:false
    }],
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