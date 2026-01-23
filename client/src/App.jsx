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
import ShopDashboard from './pages/shop/ShopDashboard'
import ShopOwnerProducts from './pages/shop/ShopOwnerProducts'
import ShopOwnerOrders from './pages/shop/ShopOwnerOrders'
import ShopOwnerCoupon from './pages/shop/ShopOwnerCoupon'
import ShopOwnerProfileCard from './pages/shop/ShopOwnerProfileCard'
import { Loader } from 'lucide-react'
import ProfilePage from './pages/ProfilePage'
import AllProducts from './pages/AllProducts'
import ProductDetail from './pages/ProductDetail'
import AllShops from './pages/AllShops'
import ShopDetails from './pages/ShopDetails'
import Cart from './pages/Cart'
import Footer from './components/Footer'


const App = () => {
  return (
<>
<BrowserRouter>
<Header/>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/login' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/products' element={<AllProducts/>}/>
  <Route path='/products/:pid' element={<ProductDetail/>}/>
  <Route path='/marketplace' element={<AllShops/>}/>
  <Route path='/marketplace/:sid' element={<ShopDetails/>}/>
  {/* Admin Routes */}
    <Route path='/admin' element={<PrivateComponents/>}>
    <Route path='dashboard' element={<AdminDashboard />} />
  <Route path='user' element={<AdminAllUsers />} />
  <Route path='shop' element={<AdminAllShop />} />
  <Route path='order' element={<AdminAllordes />} />
    </Route>
    {/* Shop Owner Routes */}
    <Route path='/shop/dashboard' element={<ShopDashboard/>}/>
    <Route path='/shop/products' element={<ShopOwnerProducts/>}/>
    <Route path='/shop/orders' element={<ShopOwnerOrders/>}/>
    <Route path='/shop/coupons' element={<ShopOwnerCoupon/>}/>
    <Route path='/shop/profile' element={<ShopOwnerProfileCard/>}/>
    {/* Auth Routes */}
    <Route path='/auth/profile' element={<ProfilePage/>}/>
    <Route path='/auth/cart' element={<Cart/>}/>
    
</Routes>
<Footer/>
<ToastContainer/>
</BrowserRouter>
</>  )
}

export default App
