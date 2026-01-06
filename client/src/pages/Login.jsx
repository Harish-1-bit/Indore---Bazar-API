import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../features/auth/AuthSlice'
import { getShopDetails } from '../features/shop/ShopSlice'

const Login = () => {
      const {user,isLoading, isSuccess, isError, message} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setformData]=useState({email:'',password:''})
    const {email,password}=formData

    const handleChange = (e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(loginUser(formData))
    }

    useEffect(()=>{

      if(user?.isShopOwner){
        dispatch(getShopDetails())
      }


        if(user){
            navigate('/')
        }

        if(isError && message){
            toast.error(message,{position:'top-left'})
        }
    },[user,message,isError])
  return (
 <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">IB</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
          <p className="text-gray-600">Sign in to continue shopping</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
            value={email}
            name='email'
            onChange={handleChange}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
            value={password}
            name='password'
            onChange={handleChange}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="w-4 h-4 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
              />
              <span className="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
            <a className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
              Forgot password?
            </a>
          </div>

          <button type='submit' className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl">
            Sign In
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

         

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to={'/register'} className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
                Create account
              </Link>
            </p>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          By signing in, you agree to our{' '}
          <a className="text-emerald-600 hover:text-emerald-700 cursor-pointer">Terms of Service</a>
          {' '}and{' '}
          <a className="text-emerald-600 hover:text-emerald-700 cursor-pointer">Privacy Policy</a>
        </p>
      </div>
    </div>
  )
}

export default Login
