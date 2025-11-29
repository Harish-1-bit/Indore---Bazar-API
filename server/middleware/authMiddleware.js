import jwt from "jsonwebtoken"
import User from "../models/userModels.js"

const protect = async (req,res,next)=>{
    try {
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            let token = req.headers.authorization.split(" ")[1]
             const decoded = jwt.verify(token,process.env.JWT_SECURE)
             const user = await User.findById(decoded.id).select("-password")
             if(!user){
                res.status(400)
                throw new Error("You are not Authorised")
             }
             req.user=user
            next()
        }
        
    } catch (error) {
        console.log(error)
        res.status(400)
        throw new Error("Your are not Authorised")
    }
}

export default protect
 