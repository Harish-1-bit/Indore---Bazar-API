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

const authServices = {register,login,getUsersOrder}

export default authServices