const getAllproducts = async (req,res) => {
    res.send("Get all products")
}

const getSingleproduct = async (req,res) => {
    res.send("Get single Product")
}

const getSearched = async (req,res) => {
    res.send("Searched products")
}

const productController = {getAllproducts,getSearched,getSingleproduct}

export default productController