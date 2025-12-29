import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllOrders, getAllShops, getAllUsers } from '../../features/admin/AdminSlice'
import { Link, useLocation } from 'react-router-dom'
import { SquareChevronLeft } from 'lucide-react'

const AdminSlidebar = () => {

    const dispatch= useDispatch()
    const location=useLocation()

  return (
     <aside className="w-64 bg-slate-900 shrink-0 hidden md:block">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className=" text-white w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div>
            <p className=" text-white font-bold text-lg">Indore Bazar</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        <Link to={'/admin/dashboard'} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.includes('/dashboard') ? 'bg-blue-600 text-white':'text-white hover:bg-gray-800'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 4l4 2m-8-2l4-2" />
          </svg>
          <span className="font-semibold">Dashboard</span>
        </Link>

        <Link to={'/admin/user'} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.includes('/user') ? 'bg-blue-600 text-white':'text-white hover:bg-gray-800'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
          <span>Users</span>
        </Link>

        <Link to={'/admin/shop'} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.includes('/shop') ? 'bg-blue-600 text-white':'text-white hover:bg-gray-800'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
          </svg>
          <span>Shops</span>
        </Link>

        <Link to={'/admin/order'} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname.includes('/order') ? 'bg-blue-600 text-white':'text-white hover:bg-gray-800'}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>Orders</span>
        </Link>

        <Link to={'/'} className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors cursor-pointer">
          <SquareChevronLeft />
          <span>Back To Home</span>
        </Link>
      </nav>

      <div className="bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          <div>
            <p className="text-white text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-400">super@admin.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AdminSlidebar
