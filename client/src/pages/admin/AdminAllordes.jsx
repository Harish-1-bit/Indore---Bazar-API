import React, { useEffect } from 'react'
import AdminHeader from '../../components/admin/AdminHeader'
import AdminSlidebar from '../../components/admin/AdminSlidebar'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllOrders } from '../../features/admin/AdminSlice';

const AdminAllordes = () => {
          const { user } = useSelector((state) => state.auth);
      const {
        adminLoading,
        adminSuccess,
        adminError,
        adminErrorMessage,
        allUsers,
        allOrders,
        allShops,
      } = useSelector((state) => state.admin);
    
      const dispatch = useDispatch();
      const navigate = useNavigate();
    
      useEffect(() => {
        dispatch(getAllOrders());
    
        if (!user.isAdmin || !user) {
          navigate("/login");
        }
    
        if(adminErrorMessage && adminError){
          toast.error(adminErrorMessage,{position:'top-left'})
        }
      }, [user,adminErrorMessage,adminError]);
    
      if (adminLoading) {
        return (
          <div className=" text-center mt-10 text-6xl font-bold">Loading.....</div>
        );
      }
    
  return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
      <AdminSlidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        
        <div className="px-8 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
          <p className="text-gray-600 mt-1">View and manage all orders</p>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
          Export Orders
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              type="text"
              placeholder="Search by Order ID..."
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Delivered</option>
              <option>Cancelled</option>
            </select>
            <select className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Today</option>
              <option>Custom Range</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Shop</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Order Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
{
    allOrders.map((order)=>{
        console.log(order)
        return(
                          <tr className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <p className="font-semibold text-blue-600">#{order?._id[0] + order._id[order._id.length - 3]+ order._id[order._id.length - 2]+ order._id[order._id.length - 1]}</p>
                </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900"> {order?.user?.name} </p>
                  <p className="text-xs text-gray-600"> {order?.user?.email} </p>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600"> {order?.shop?.name} </td>
                <td className="px-6 py-4">
                  <p className="font-semibold text-gray-900">₹{order?.totalBill}</p>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full ${order?.status === 'delivered'? "bg-green-100 text-green-700":'bg-red-100 text-red-700'} text-xs font-semibold`}>
                    <span className={`w-2 h-2 ${order?.status === 'delivered'? 'bg-green-600': 'bg-red-600'} rounded-full`}></span>
                    <span> {order?.status === 'delivered'? "Paid":'Not-paid'} </span>
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{new Date(order.createdAt).toLocaleDateString('EN-IN')}</td>
              </tr>
        )
    })
}
            </tbody>
          </table>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <p className="text-sm text-gray-600">Showing 1 to 6 of 24,582 orders</p>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">Previous</button>
            <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">2</button>
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">3</button>
            <button className="px-3 py-2 text-gray-700 border border-gray-300 rounded hover:bg-gray-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
        
        </div></div>
  )
}

export default AdminAllordes
