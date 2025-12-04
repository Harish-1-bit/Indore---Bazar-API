import Shop from "../models/shopModels.js"

const getAllsops = async(req,res)=>{
    const shops = await Shop.find()
    if(!shops){
        res.status(404)
        throw new Error("Shop not found")
    }
    const acceptedShops = shops.filter(shop => shop.status === "accepted")

        if(!acceptedShops || acceptedShops.length ===0 ){
        res.status(404)
        throw new Error("Shop not found")
    }

    res.status(200).json(acceptedShops)
}

const getShop = async(req,res)=>{
    res.send("Get shop")
}

const shopController = {getAllsops,getShop}

export default shopController