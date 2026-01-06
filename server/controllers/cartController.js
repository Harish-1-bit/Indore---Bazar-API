import Cart from "../models/cartModels.js"
import Product from "../models/productsModels.js"

const getAllcart = async(req,res)=>{
        const userId = req.user.id
    const cart = await Cart.findOne({user:userId}).populate("products.product")
    if(!cart){
        res.status(200)
        .json({
            products:[]
        })
    }
    res.status(200)
    .json(cart)
    
}

const addCart = async(req,res)=>{
    const userId = req.user.id
    
    // validate product exists
    const {productId, qty} = req.body
    const product = await Product.findById(productId)
    if(!product){
        res.status(404)
        throw new Error("product not found")
    }
    // is product is stock
    if(product.stock<qty){
        res.status(400)
        throw new Error("Insufficient Stock")
    }

    let cart = await Cart.findOne({user:userId})


    // find users cart
    if(!cart){
        cart = new Cart({
            user:userId,
            products:[{product:productId,qty}]
        })
    }else{
        // check if product is already in cart
        const productIndex = cart.products.findIndex((item)=>{
           return  item.product.toString()===productId
        })
        if(productIndex > -1){
            // update quantity
            cart.products[productIndex].qty += parseInt(qty)

            // check quantity against stock
            if(cart.products[productIndex].qty >product.stock){
                res.status(400)
                throw new Error("Quantity exceeds the Avaialable stocks")
            }
        }else{
            // Add New product to cart
            cart.products.push({product:productId,qty})
        }
    }

    await cart.save()

    await cart.populate("products.product")

    res.status(200).json(cart)
}

const updateCart = async(req,res)=>{
    const userId = req.user.id
    
    // validate product exists
    const {productId, qty} = req.body
    const product = await Product.findById(productId)
    if(!product){
        res.status(404)
        throw new Error("product not found")
    }
    // is product is stock
    if(product.stock<qty){
        res.status(400)
        throw new Error("Insufficient Stock")
    }

    let cart = await Cart.findOne({user:userId})


    // find users cart
    if(!cart){
        cart = new Cart({
            user:userId,
            products:[{product:productId,qty}]
        })
    }else{
        // check if product is already in cart
        const productIndex = cart.products.findIndex((item)=>{
           return  item.product.toString()===productId
        })
        if(productIndex > -1){
            // update quantity
            cart.products[productIndex].qty += parseInt(qty)

            // check quantity against stock
            if(cart.products[productIndex].qty >product.stock){
                res.status(400)
                throw new Error("Quantity exceeds the Avaialable stocks")
            }
        }else{
            // Add New product to cart
            cart.products.push({product:productId,qty})
        }
    }

    await cart.save()

    await cart.populate("products.product")

    res.status(200).json(cart)
}
const removeCart = async(req,res)=>{
    const {productId} = req.params
    const userId=req.user._id
    const cart = await Cart.findOne({user:userId})
    if(!cart){
        res.status(409)
        throw new Error("Cart Not Found!")
    }
    cart.products= cart.products.filter((item)=>{
        return item.product.toString()!== productId
    })
   

    await cart.save()
    await cart.populate("products.product")

    res.status(200).json(cart)
}

const clearCart = async (req,res)=>{
    const userId = req.user._id

    const cart = await Cart.findOne({user:userId})
    if(!cart){
        res.status(409)
        throw new Error("Cart is not foumd")
    }

    cart.products = []
    await cart.save()
    res.status(200).json(cart)

}

const cartContoller = {addCart, updateCart, removeCart, getAllcart, clearCart}

export default cartContoller