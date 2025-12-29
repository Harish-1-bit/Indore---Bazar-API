import React, { useEffect } from "react";
import AdminSlidebar from "../../components/admin/AdminSlidebar";
import AdminHeader from "../../components/admin/AdminHeader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllOrders,
  getAllShops,
  getAllUsers,
} from "../../features/admin/AdminSlice";
import ShopApporoval from "../../components/admin/ShopApporoval";
import { toast } from "react-toastify";

const AdminDashboard = () => {
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
    dispatch(getAllUsers());
    dispatch(getAllShops());
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
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Welcome back to your admin panel
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Total Users
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {allUsers?.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 12H9m6 0a6 6 0 11-12 0 6 6 0 0112 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Total Shops
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {allShops?.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">
                    Total Orders
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {allOrders?.length}
                  </p>

                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">Approvals</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {allShops.filter(shop=>shop.status!=='accepted').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="lg:col-span-1 bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Order
              </h2>
              <div className="space-y-4">
                {
                    allOrders.length===0?
                    (<p>No Recent Orders</p>):
                    allOrders.map((order)=>{
                        return (
                        <div key={order?._id} className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded flex items-center justify-center text-sm font-medium text-slate-600">
                      #{order?._id[2]}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800">{order?.user?.name}</p>
                      <p className="text-xs text-slate-500">{order?.shop?.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-slate-800">₹{order?.totalBill}</p>
                    <span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                      {order?.status}
                    </span>
                  </div>
                </div>
                        )
                    })
                }                
              </div>
            </div>
                <ShopApporoval allShops={allShops}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
