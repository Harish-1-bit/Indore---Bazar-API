import fs from 'node:fs'
import { v2 as cloudinary } from "cloudinary"

cloudinary.config({
    cloud_name:'dvmlaz2cf',
    api_key:process.env.CLOUDINARY_API,
    api_secret:process.env.CLOUDINARY_SECRET
})

const uploadToCloudinary =async (filelink)=>{
    try {
        let response = await cloudinary.uploader.upload(filelink,{resource_type:'auto'})
        return response
    } catch (error) {
        console.log(error.message)
        fs.unlinkSync(filelink)
    }
}

export default uploadToCloudinary