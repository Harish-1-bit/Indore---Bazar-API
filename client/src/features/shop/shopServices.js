import axios from "axios"
import { HelpCircle } from "lucide-react"

const API_URL = '/api/shop-owner'

const getShopDetails = async(token)=>{
    let option ={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}/`,option)
    localStorage.setItem('shop',JSON.stringify(response.data))
    return response.data
}

const getAllProducts = async (shopId) => {
    const response = await axios.get('/api/product')
    const data = response.data.filter((product)=>{
        if(product.shop._id==shopId){
            return true
        }
    })
    return data
}

const getAllOrders = async (token) => {
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get(`${API_URL}/order/`,option)
    return response.data
}

const getAllCoupons = async(shopId) => {
    const response = await axios.get(`/api/coupon/${shopId}`)
    return response.data
}

const createProduct = async(formData,token) => {
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post(`${API_URL}/add-product`,formData,option)
    return response.data
}

const updateProduct = async(formData,token) => {
    console.log(formData)
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.put(`${API_URL}/product/${formData._id}`,formData,option)
    return response.data
}

const orderUpdate=async (token,orderDetails) => {
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response =await axios.put(`${API_URL}/order/${orderDetails.id}`,orderDetails,option)
    console.log(response.data)
    return response.data
}

const createCoupon=async (token,couponDetails) => {
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response =await axios.post(`${API_URL}/coupon`,couponDetails,option)
    return response.data
}

const UpdateCoupon=async (token,couponDetails) => {
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response =await axios.put(`${API_URL}/coupon/${couponDetails._id}`,couponDetails,option)
    return response.data
}



const shopServices={getShopDetails,getAllProducts, getAllOrders,getAllCoupons,createProduct,updateProduct,orderUpdate,createCoupon,UpdateCoupon}

export default shopServices