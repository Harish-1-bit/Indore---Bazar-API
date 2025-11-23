import express from "express"
import colors from "colors"
import connectDB from "./config/dbconfig.js"
import authRouters from "./routes/authRouters.js"
import errorhandler from "../middleware/errorHandler.js"


const app = express()

const port=process.env.PORT

connectDB()

app.get("/",(req,res)=>{
    res.status(200)
    .json({
        message:"Welcome to Indore - Bazar API 1.0"
    })
})

app.use(express.json())
app.use(express.urlencoded())

//auth routes
app.use("/api/auth",authRouters)

app.use(errorhandler)
app.listen(port,()=>console.log(`server is running ${port}`.bgBlue))