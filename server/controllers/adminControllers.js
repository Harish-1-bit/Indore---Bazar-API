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

const getAllorder = async (req, res) => {
  res.send("Get all user");
};

const updateUser = async (req, res) => {
  res.send("user is updated");
};

const updateShop = async (req, res) => {
  res.send("shop is updated");
};

const createShop = async (req, res) => {
  res.send("shop is created");
};

const adminControllers = {
  getUsers,
  getAllorder,
  updateShop,
  updateUser,
  createShop,
};

export default adminControllers;
