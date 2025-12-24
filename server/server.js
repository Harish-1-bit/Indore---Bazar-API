import express from "express";
import colors from "colors";
import connectDB from "./config/dbconfig.js";
import authRouters from "./routes/authRouters.js";
import errorhandler from "../middleware/errorHandler.js";
import adminRoutes from "./routes/adminRoutes.js";
import shopOwnerRoutes from "./routes/shopOwnerRoutes.js"
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderroutes from "./routes/orderroutes.js";
import shoproutes from "./routes/shoproutes.js";
import couponRoutes from "./routes/couponRoutes.js";
import chatBotRoutes from "./routes/chatBotRoutes.js";

const app = express();

const port = process.env.PORT;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to Indore - Bazar API 1.0",
  });
});

app.use(express.json());
app.use(express.urlencoded());

//auth routes
app.use("/api/auth", authRouters);

// Admin users
app.use("/api/admin", adminRoutes);

// ShopOwer Routes
app.use("/api/shop-owner", shopOwnerRoutes)

// Product routes
app.use("/api/product",productRoutes)

// Cart Routes
app.use("/api/cart",cartRoutes)

// Order Routes
app.use("/api/orders",orderroutes)

// shop Routes
app.use("/api/shops",shoproutes)

// Coupons Routes
app.use("/api/coupon",couponRoutes)

// Chatbot Routes
app.use("/api/chat",chatBotRoutes)

app.use(errorhandler);
app.listen(port, () => console.log(`server is running ${port}`.bgBlue));
