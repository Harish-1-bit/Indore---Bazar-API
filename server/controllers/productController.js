import Product from "../models/productsModels.js"

const getAllproducts = async (req,res) => {
    const allProduct = await Product.find().populate("shop")

    if(!allProduct){
        res.status(404)
        throw new Error("Products Not Found")
    }

    res.status(201).json(allProduct)
}

const getSingleproduct = async (req,res) => {
    const pId = req.params.pid
    const singleProduct = await Product.findById(pId).populate("shop")
    console.log(singleProduct)

    if(!singleProduct){
        res.status(404)
        throw new Error("Products Not Found")
    }

    res.status(201).json(singleProduct)
}

const getSearched = async (req,res) => {
    res.send("Searched products")
}

const productController = {getAllproducts,getSearched,getSingleproduct}

export default productController