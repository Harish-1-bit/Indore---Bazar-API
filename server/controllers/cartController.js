const getAllcart = async(req,res)=>{
    res.send("Cart is here")
}

const addCart = async(req,res)=>{
    res.send("Added to cat")
}

const updateCart = async(req,res)=>{
    res.send("Added Updated")
}
const removeCart = async(req,res)=>{
    res.send("Removed Cart")
}

const cartContoller = {addCart, updateCart, removeCart, getAllcart}

export default cartContoller