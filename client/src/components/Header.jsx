import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/auth/AuthSlice'

const Header = () => {

  const {user}=useSelector(state=>state.auth)

  const dispatch = useDispatch()
  const navigate=useNavigate()

  const location = useLocation()
  console.log(location)

  const capatlizeWord = (sentence)=>{
    const words = sentence.split(' ')
    const caps=words.map((word)=>{
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    return caps.join(' ')
  }

  const handleLogout=()=>{
    dispatch(logoutUser())
    navigate('/')
  }


  return (
          <header className={location.pathname.includes('/admin') || location.pathname.includes('/shop')  ? 'hidden':"bg-white shadow-sm sticky top-0 z-50"}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to={"/"} className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">IB</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Indore Bazar</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <a className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a className="text-gray-700 hover:text-emerald-600 transition-colors">Shops</a>
            <a className="text-gray-700 hover:text-emerald-600 transition-colors">Categories</a>
            <a className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
          </nav>
          <div className="flex items-center space-x-4">
            {
              user?<>
              <Link to={user?.isAdmin ?'/admin/dashboard':user?.isShopOwner ? '/shop/dashboard' : 'auth/profile'} className="text-gray-700 hover:text-emerald-600 transition-colors">Welcome, {capatlizeWord(user.name)}</Link>
            <button onClick={handleLogout} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">Log out</button>
              </>:
              <>
              <Link to={"/login"} className="text-gray-700 hover:text-emerald-600 transition-colors">Login</Link>
            <Link to={"/register"} className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Sign Up</Link>
              </>
            }
          </div>
        </div>
      </header>
  )
}

export default Header
