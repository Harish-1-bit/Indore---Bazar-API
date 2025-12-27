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
    console.log(respone.data)
    return respone.data
}
const getAllOrders = async(token)=>{
    
    let option = {
        headers:{
            authorization:`Bearer ${token}`
        }
    }
    const respone = await axios.get(`${API_URL}/order`,option)
    console.log(respone.data)
    return respone.data
}

const adminService = {getAllUsers,getAllShops,getAllOrders}

export default adminService