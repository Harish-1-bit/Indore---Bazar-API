import multer from "multer";

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename:(req,file,cb)=>{
        const extention = file.originalname.split(".")[1]
        cb(null,crypto.randomUUID() + "." + extention)
    }
})

const upload = multer({storage:storage})

export default upload