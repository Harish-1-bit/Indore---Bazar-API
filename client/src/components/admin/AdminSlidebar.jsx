import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllOrders, getAllShops, getAllUsers } from '../../features/admin/AdminSlice'

const AdminSlidebar = () => {

    const dispatch= useDispatch()

    useEffect(()=>{

    },[])

  return (
     <aside className="w-64 bg-slate-900 shrink-0 hidden md:block">
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-lg">
            A
          </div>
          <div>
            <p className="font-bold text-lg">ShopMart</p>
            <p className="text-xs text-gray-400">Admin Panel</p>
          </div>
        </div>
      </div>

      <nav className="p-4 space-y-2">
        <a className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-600 text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 4l4 2m-8-2l4-2" />
          </svg>
          <span className="font-semibold">Dashboard</span>
        </a>

        <a className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z" />
          </svg>
          <span>Users</span>
        </a>

        <a className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
          </svg>
          <span>Shops</span>
        </a>

        <a className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          <span>Orders</span>
        </a>

        <a className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-800 transition-colors cursor-pointer">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </a>
      </nav>

      <div className="bottom-0 left-0 right-0 p-4 border-t border-gray-800 bg-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-400">super@admin.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AdminSlidebar
