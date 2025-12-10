import Cart from "../models/cartModels.js"
import Shop from "../models/cartModels.js"
import Coupon from "../models/couponModels.js"
import Order from "../models/orderModels.js"

const getOrders = async (req,res) => {
res.send("get all orders")
}

const getOrder = async (req,res) => {
    res.send("get order")
}

const createOrder = async (req,res) => {
    const userId = req.user._id
    let couponExist
    if(req.body.couponCode){
        couponExist = await Coupon.findOne({couponCode:req.body.couponCode})
    if(!couponExist){
        res.status(409)
        throw new Error("Coupon does not exist")
    }
    }
    const cart = await Cart.findOne({user:userId}).populate("products.product")
    if(!cart){
        res.status(404)
        throw new Error("Cart not Found")
    }

    const totalBill = cart.products.reduce((acc, item)=>{
        return acc + item.product.price * item.qty
    },0)
    const discount = couponExist? totalBill * couponExist.couponDiscount/1000 :0
    let shopId=cart.products[0].product.shop._id
    const order = new Order({
        user:userId,
        cart:cart,
        shop:shopId,
        status:"placed",
        isDiscount:couponExist?true: false,
        coupon:couponExist? couponExist._id : null,
        totalBill:totalBill - discount
    })
    await order.save()
    if(!order){
        res.status(409)
        throw new Error("Order is not placed")
    }
    res.status(201).json(order)
}

const cancelOrder = async (req,res) => {
    const order = await Order.findById(req.params.oid)
    console.log(order)
    if(order.status === "placed"){
        const cancelledorder= await Order.findByIdAndUpdate(req.params.oid,{status:"cancelled"},{new:true})
        res.status(200).json(cancelledorder)
    }else{
        res.status(409)
        throw new Error("Could not cancelled order")
    }

}
const orderController = {getOrders, getOrder, cancelOrder, createOrder}

export default orderController