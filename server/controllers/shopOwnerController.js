const addShop = async (req,res) => {
    res.send("Request for shop creation")
}

const updateShop = async (req,res) => {
    res.send("Shop is updated")
}

const addProduct = async (req,res) => {
    res.send("Product is added")
}

const updateProduct = async (req,res) => {
    res.send("Product is updated")
}

const updateOrder = async (req,res) => {
    res.send("order is updated")
}

const shopOwnerController = {addProduct,addShop,updateOrder,updateProduct,updateShop}

export default shopOwnerController