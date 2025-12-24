import fs from 'node:fs'
import uploadToCloudinary from "../middleware/cloudniaryMiddleware.js"
import Coupon from "../models/couponModels.js"
import Order from "../models/orderModels.js"
import Product from "../models/productsModels.js"
import Shop from "../models/shopModels.js"

const addShop = async (req,res) => {
    const {name, description, address, shopPhone}= req.body
    const user = req.user.id
    console.log(req.user)

    if(!name || !description || !address || !shopPhone){
        res.status(409)
        throw new Error("Please Fill All Details")
    }
    const shop = await Shop.create({
        name,description,address,shopPhone,user
    })

    if(!user){
        res.status(401)
        throw new Error("Request for creating  shop failed!!")
    }

    res.status(201).json(shop)
}

const updateShop = async (req,res) => {
    res.send("Shop is updated")
}

const addProduct = async (req,res) => {
    const {name, description, price, stock, category, shopId} = req.body

    if(!name || !description || !price || !stock || !category || !shopId){
        res.status(409)
        throw new Error("please fill all the details")
    }

    let uploadResponse = await uploadToCloudinary(req.file.path)

    fs.unlinkSync(req.file.path)

    const product = new Product({
        name,description,price,stock,category, productImage:uploadResponse.secure_url, shop : shopId
    })
    await product.save()
    await product.populate("shop")

    if(!product){
        res.status(409)
        throw new Error("Product was not created")
    }
    res.status(201).json(product)

}

const updateProduct = async (req,res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.pid, req.body ,{new:true}).populate("shop")
    if(!updateProduct){
        res.status(409)
        throw new Error("Product is not updated")
    }

    res.status(200)
    .json(updateProduct)
}

const createCoupon = async (req,res)=>{
    const {userId} = req.user._id
  const {couponCode, couponDiscount} = req.body

  if(!couponCode || !couponDiscount){
    res.status(409)
    throw new Error("Coupon Could not be created")
  }
  const shop = await Shop.findOne({userId})

  const coupon = new Coupon({
    couponCode:couponCode.toUpperCase(),
    couponDiscount,
    shop:shop._id
  })

await coupon.save()
await coupon.populate("shop")
  res.status(200).json(coupon)
}

const getMyShoporder= async (req,res)=>{

    const userId = req.user._id
    const shop = await Shop.findOne({user:userId})
    if(!shop){
        res.status(404)
        throw new Error("Shop not found")
    }
    const order =await Order.find({shop:shop._id}).populate("user").populate("cart").populate("shop").populate("coupon")

    res.status(200)
    .json(order)
}

const updateOrder = async (req,res) => {
    const status=req.body.status
    const order = await Order.findById(req.params.oid).populate("user").populate("products.product").populate("shop").populate("coupon")
    let updatedOrder

    const updateStock = async(productId,stock)=>{
        await Product.findByIdAndUpdate(productId,{stock:stock},{new:true})
    }
    if(status==="cancelled"){
        updatedOrder=await Order.findByIdAndUpdate(req.params.oid,{status:"cancelled"},{new:true}).populate("user").populate("products.product").populate("shop").populate("coupon")
    }else if(status==="dispatched"){
        order.products.forEach((item)=>{
            const productId = item.product._id
            const productQty = item.qty
            const currentStock = item.product.stock
            updateStock(productId,currentStock-productQty)
        })
        updatedOrder=await Order.findByIdAndUpdate(req.params.oid,{status:"dispatched"},{new:true}).populate("user").populate("products.product").populate("shop").populate("coupon")
    }else{
                updatedOrder=await Order.findByIdAndUpdate(req.params.oid,{status:"delivered"},{new:true}).populate("user").populate("products.product").populate("shop").populate("coupon")
    }
    if(!updatedOrder){
        res.status(409)
        throw new Error("Order is not updated")
    }
    res.status(200).json(updatedOrder)
}

const shopOwnerController = {addProduct,addShop,updateOrder,updateProduct,updateShop,createCoupon,getMyShoporder}

export default shopOwnerController