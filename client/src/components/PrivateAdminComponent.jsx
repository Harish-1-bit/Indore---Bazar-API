import React from 'react'
import useAdminAuthStatus from '../hooks/useAdminAuthStatus'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateAdminComponent = () => {
const {isAdmin, checkAuthentication}=useAdminAuthStatus()

if(checkAuthentication){
    return(
        <div>Checking the user.....</div>
    )
}

return isAdmin?<Outlet />: <Navigate to={'/login'}/>
}

export default PrivateAdminComponent
