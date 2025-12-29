import React from 'react'
import useAuthStatus from '../hooks/useAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateComponents = () => {
const {isAuthenticated,checkAuthentication}=useAuthStatus()

if(checkAuthentication){
    return(
        <div>Checking User</div>
    )
}

return isAuthenticated? <Outlet/> : <Navigate to={'/login'} />
}

export default PrivateComponents
