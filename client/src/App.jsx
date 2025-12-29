import React from 'react'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Header from './components/Header'
import Login from './pages/Login'
import Register from './pages/Register'
import { ToastContainer, toast } from 'react-toastify';
import AdminDashboard from './pages/admin/AdminDashboard'
import Home from './pages/Home'
import AdminAllUsers from './pages/admin/AdminAllUsers'
import AdminAllShop from './pages/admin/AdminAllShop'
import AdminAllordes from './pages/admin/AdminAllordes'
import PrivateComponents from './components/PrivateComponents'

const App = () => {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
    <Route path='/admin' element={<PrivateComponents/>}>
        <Route path='dashboard' element={<AdminDashboard />} />
  <Route path='user' element={<AdminAllUsers />} />
  <Route path='shop' element={<AdminAllShop />} />
  <Route path='order' element={<AdminAllordes />} />
    </Route>
</Routes>
<ToastContainer/>
</BrowserRouter>
</>  )
}

export default App
