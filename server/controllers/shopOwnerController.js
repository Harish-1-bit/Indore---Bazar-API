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

    const product = new Product({
        name,description,price,stock,category, productImage:req.file.path, shop : shopId
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

const updateOrder = async (req,res) => {

}

const shopOwnerController = {addProduct,addShop,updateOrder,updateProduct,updateShop}

export default shopOwnerController