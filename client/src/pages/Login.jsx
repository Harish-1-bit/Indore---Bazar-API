import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { loginUser } from '../features/auth/AuthSlice'

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
            <span className="text-white font-bold text-2xl">SM</span>
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

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="text-sm font-semibold text-gray-700">Google</span>
            </button>
            <button className="flex items-center justify-center px-4 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="#1877F2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span className="text-sm font-semibold text-gray-700">Facebook</span>
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
                Create account
              </a>
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
