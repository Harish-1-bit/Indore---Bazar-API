import mongoose, { Types } from "mongoose";

const productScheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true 
    },
    shop:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Shop",
            required:true
        }
},{
    timestamps:true
})

const Product = mongoose.model("Product",productScheme)

export default Product