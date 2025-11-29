import  jwt  from "jsonwebtoken"
import User from "../models/userModels.js"
import bcrypt from "bcrypt"

const registerUse=async (req,res)=>{
    const {name, email, phone, password, address} = req.body
    
    if(!name || !email || !phone || !password || !address){
        res.status(409)
        throw new Error("please enter all details")
    }

    const emailExist = await User.findOne({email})
    const phoneExist = await User.findOne({phone})

    if(emailExist || phoneExist){
        res.status(409)
        throw new Error("User already Exist")
    }

    const salt = bcrypt.genSaltSync(10)
    const hansdedPassword = bcrypt.hashSync(password,salt)

    // create user
    const user = await User.create({
        name, email, password:hansdedPassword,phone,address
    })
    if(!user){
        res.status(409)
        throw new Error("Unable to Create New User")
    }

    res.status(201).json({
        _id:user.id,
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        token : genrateToken(user._id)
    })


    res.send("user registered")
}

const loginuser=async(req,res)=>{
    const {email,password} = req.body
    
    if(!email || !password ){
        res.status(409)
        throw new Error("please enter all details")
    }
    
    const user = await User.findOne({email})
    
    if(user && await bcrypt.compare(password, user.password)){
        console.log(password)
        console.log(user.password)
        res.status(200).json({
         _id:user.id,
        name:user.name,
        email:user.email,
        phone:user.phone,
        address:user.address,
        token : genrateToken(user._id)
        })
    }else{
        res.status(400)
        throw new Error("Invalid Credentials")
    }
}

const privateAccess = (req,res)=>{
    res.json({
        msg :`Request is made by ${req.user.name}`
    })
}

const genrateToken =(id) =>{
    const token = jwt.sign({id},process.env.JWT_SECURE,{expiresIn:'30d'})
    return token
}

const authController={
    registerUse,
    loginuser,
    privateAccess
}

export default authController