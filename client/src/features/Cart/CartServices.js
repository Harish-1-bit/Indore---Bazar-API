import axios from "axios"

const addToCart = async (token,cartDetails)=>{
    let option ={
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    const response = await axios.post('/api/cart/add',cartDetails,option)
    console.log(response.data)
    return data
    }

const getCart = async (token) => {
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.get('/api/cart',option)
    return response.data
}

const updateCart = async (token,cartDetail)=>{
    let option ={
        headers:{
            authorization: `Bearer ${token}`
        }
    }
    console.log(cartDetail)
    const response = await axios.put(`/api/cart/${cartDetail.id}`,cartDetail,option)
    console.log(response.data)
    return data
    }

const removeFromCart = async (token, id) => {
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.delete(`/api/cart/${id}`,option)
    console.log(response.data)
    return response.data
}

const applyCoupon = async(token,couponDetails)=>{
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post('/api/coupon/apply-coupon',couponDetails,option) 
    return response.data
}

const placeOrder = async (token,couponCode) => {
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.post('/api/orders/create',couponCode,option)
    console.log(response.data)
    return response.data
}
 
const cartServices = {addToCart,getCart,removeFromCart,applyCoupon,placeOrder,updateCart}

export default cartServices