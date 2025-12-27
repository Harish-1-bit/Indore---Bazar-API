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

const authServices = {register,login}

export default authServices