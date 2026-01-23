import axios from 'axios'
const register = async(formData)=>{
    const respone = await axios.post('/api/auth/register',formData)
    localStorage.setItem('user',JSON.stringify(respone.data))
    return respone.data
}

const login = async(formData)=>{
    const respone = await axios.post('/api/auth/login',formData)
    localStorage.setItem('user',JSON.stringify(respone.data))
    return respone.data
}

const getUsersOrder = async(token)=>{
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const respone = await axios.get('/api/orders',option)
    return respone.data
}

const cancelOrder = async(orderDetails,token)=>{
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    console.log()
    const respone = await axios.put(`/api/orders/${orderDetails.id}`,orderDetails,option)
    console.log(respone.data)
    return respone.data
}


const requestForShop=async (shopDetails,token) => {
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const respone = await axios.post('/api/shop-owner/create-shop',shopDetails,option)
}

const getAllProducts = async()=>{
    const response = await axios.get('/api/product')
    return response.data
}

const getProduct = async(pid)=>{
    const response = await axios.get('/api/product/'+pid)
    return response.data
}

const getAllShops = async()=>{
    const response = await axios.get('/api/shops')
    return response.data
}

const getSingleShop = async(sid)=>{
    const response = await axios.get('/api/shops/'+sid)
    return response.data
}

const authServices = {register,login,getUsersOrder,cancelOrder,requestForShop,getAllProducts,getProduct,getAllShops,getSingleShop}

export default authServices