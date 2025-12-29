import Order from "../models/orderModels.js";
import Shop from "../models/shopModels.js";
import User from "../models/userModels.js";

const getUsers = async (req, res) => {
  const user = await User.find();
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  } else {
    res.status(200).json(user);
  }
};

const getAlluser = async (req, res) => {
  res.send("Get all user");
};

const getAllshops = async (req,res)=>{
  const shops = await Shop.find().populate('user')
  if(!shops){
    res.status(404)
    throw new Error("No Shops Found")
  }
  res.status(200).json(shops)
}

const getAllorder = async (req, res) => {
      const allOrders = await Order.find().populate("user").populate("shop").populate("coupon").populate("shop")
    if(!allOrders){
        res.status(404)
        throw new Error("Orders Not Found")
    }

    res.status(201)
    .json(allOrders)
};

const updateUser = async (req, res) => {
  
  const newUser = await User.findByIdAndUpdate(req.params.uid,{isActive:req.body.isActive?true:false},{new:true})
  if(!newUser){
    res.status(409)
    throw new Error("User not Updated")
  }

  res.status(200).json(newUser)
};


const updateShop = async (req, res) => {
  if(!req.body){
    res.status(409)
    throw new Error("Please send the status")
  }
  const shopId = req.params.sid
  const updateShop = await Shop.findByIdAndUpdate(shopId,{status:req.body.status},{new:true}).populate('user')
  if(!updateShop){
    res.status(409)
    throw new Error("Request for shop creation is denied")
  }
  res.status(201).json(updateShop)
};


const adminControllers = {
  getUsers,
  getAllorder,
  updateUser,
  updateShop,
  getAllshops
};

export default adminControllers;
