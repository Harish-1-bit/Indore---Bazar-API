import axios from "axios"

const API_URL= '/api/admin'

const getAllUsers = async(token)=>{
    
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const respone = await axios.get(`${API_URL}/user`,option)
    return respone.data
}

const getAllShops = async(token)=>{
    
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const respone = await axios.get(`${API_URL}/shop`,option)
    return respone.data
}
const getAllOrders = async(token)=>{
    
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const respone = await axios.get(`${API_URL}/order`,option)
    return respone.data
}

const updateShop = async(shopDetails,token)=>{
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const response = await axios.put(`${API_URL}/shop/${shopDetails.shopId}`,shopDetails,option)
 return response.data
}

const UpdateUser = async(userDetails,token)=>{
    let option={
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    console.log(userDetails)
    const response = await axios.put(`${API_URL}/user/${userDetails.userId}`,userDetails,option)
 console.log(response.data)
 return response.data
}

const adminService = {getAllUsers,getAllShops,getAllOrders,updateShop,UpdateUser}

export default adminService