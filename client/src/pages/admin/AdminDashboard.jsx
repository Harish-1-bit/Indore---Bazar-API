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
  }, [user]);

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
                  <p className="text-xs text-green-600 mt-3">
                    +5.2% from last month
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
                  <p className="text-xs text-green-600 mt-3">
                    +12.1% from last month
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
                  <p className="text-xs text-green-600 mt-3">
                    +8.3% from last month
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
                  <p className="text-gray-600 text-sm font-medium">Revenue</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    $542.3K
                  </p>
                  <p className="text-xs text-green-600 mt-3">
                    +15.6% from last month
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Recent Activity
              </h2>
              <div className="space-y-4">
                {
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

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Platform Stats
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      User Growth
                    </p>
                    <p className="text-sm font-semibold text-gray-900">78%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      Shop Growth
                    </p>
                    <p className="text-sm font-semibold text-gray-900">92%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      Order Fulfillment
                    </p>
                    <p className="text-sm font-semibold text-gray-900">95%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: "95%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-700">
                      Customer Satisfaction
                    </p>
                    <p className="text-sm font-semibold text-gray-900">88%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "88%" }}
                    ></div>
                  </div>
                </div>
              </div>

              <button className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                View Detailed Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
