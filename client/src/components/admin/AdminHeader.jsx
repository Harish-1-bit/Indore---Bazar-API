import React from 'react'

const AdminHeader = () => {
  return (
<header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-8 my-5 top-0 right-0 left-64 ">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
      </div>

      <div className="flex items-center space-x-6">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4v.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>

        <div className="flex items-center space-x-3 pl-6 border-l border-gray-200">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-gray-900">Admin</p>
            <p className="text-xs text-gray-500">Super Admin</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
