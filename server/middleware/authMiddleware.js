import jwt from "jsonwebtoken";
import User from "../models/userModels.js";

const forAuthuser = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      
      let token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECURE);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        res.status(400);
        throw new Error("You are not Authorised");
      }
      
      req.user = user;
      next();
    }else{
      res.status(401)
      throw new Error("You are not Authorised : token is not found")
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("You are not Authorised");
  }
};

const forAdmin = async (req, res, next) => {
  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      let token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECURE);
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        res.status(400);
        throw new Error("You are not Authorised");
      }
      req.user = user;
      if (user.isAdmin) {
        next();
      } else {
        res.status(400);
        throw new Error("You are not Authorised");
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Your are not Authorised");
  }
};

const protect = { forAuthuser, forAdmin };

export default protect;
