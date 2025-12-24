import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
          <header className="bg-white shadow-sm sticky top-0 z-50">
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
            <Link to={"/login"} className="text-gray-700 hover:text-emerald-600 transition-colors">Login</Link>
            <button className="bg-emerald-500 text-white px-6 py-2 rounded-lg hover:bg-emerald-600 transition-colors">Sign Up</button>
          </div>
        </div>
      </header>
  )
}

export default Header
