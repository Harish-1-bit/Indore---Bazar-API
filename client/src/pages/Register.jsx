import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { registerUser } from '../features/auth/AuthSlice';

const Register = () => {
    const {user,isLoading, isSuccess, isError, message} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [formData, setformData]=useState({name:'',email:'',phone:'',address:'',password:'',confirmPassword:''})
    const {name,email,phone,address,password,confirmPassword}=formData

    const handleChange = (e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(password!==confirmPassword){
        toast.error("Password is not Matched",{position:'top-right'})
      }
      dispatch(registerUser(formData))
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
 <div className="min-h-screen bg-gradient-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-500 rounded-2xl mb-4 shadow-lg">
            <span className="text-white font-bold text-2xl">IB</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
          <p className="text-gray-600">Join us and start shopping today</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
            value={name}
            name='name'
            onChange={handleChange}
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            />
          </div>

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
              Phone Number
            </label>
            <input
            value={phone}
            name='phone'
            onChange={handleChange}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Address
            </label>
            <input
            value={address}
            name='address'
            onChange={handleChange}
              type="text"
              placeholder="Enter your phone number"
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
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Confirm Password
            </label>
            <input
            value={confirmPassword}
            name='confirmPassword'
            onChange={handleChange}
              type="password"
              placeholder="Re-write password"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
          </div>



          <div className="flex items-start">
            <input
              type="checkbox"
              className="w-4 h-4 mt-1 text-emerald-500 border-gray-300 rounded focus:ring-emerald-500"
            />
            <label className="ml-2 text-sm text-gray-600">
              I agree to the{' '}
              <a className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
                Terms of Service
              </a>
              {' '}and{' '}
              <a className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
                Privacy Policy
              </a>
            </label>
          </div>

          <button type='submit' className="w-full bg-emerald-500 text-white py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl">
            Create Account
          </button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or sign up with</span>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <Link to={'/login'} className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors cursor-pointer">
                Sign in
              </Link>
            </p>
          </div>
        </form>

        <div className="mt-6 bg-emerald-50 rounded-xl p-4 border border-emerald-100">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center">
            <span className="text-emerald-500 mr-2">✓</span>
            Why join ShopMart?
          </h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">•</span>
              Access to 500+ local shops
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">•</span>
              Fast delivery in 15-30 minutes
            </li>
            <li className="flex items-start">
              <span className="text-emerald-500 mr-2">•</span>
              Exclusive deals and discounts
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Register
