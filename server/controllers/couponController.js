import Coupon from "../models/couponModels.js"

const getCoupons = async(req,res)=>{
    const shopId = req.params.sid

    const coupon = await Coupon.find({shop:shopId})

    if(!coupon){
        res.status(404)
        throw new Error("Shop not found")
    }
    res.status(200).json(coupon)
}

const applycoupon = async(req,res)=>{
    const {couponCode, shopId} = req.body

    const couponExist = await Coupon.findOne({couponCode:couponCode})
    if(!couponExist){
        res.status(404)
        throw new Error("Coupon not found")
    }
    if(couponExist.shop.toString() !== shopId){
        res.status(409)
        throw new Error("This coupon is not valid for this shop")
    }
    if(couponExist.isActive){
        res.status(200).json(couponExist)
    }else{
        res.status(409)
        throw new Error("Coupon Expired")
    }
}

const couponController = {getCoupons,applycoupon}

export default couponController