"use client"

import { useEffect, useState } from "react"
import { Store, X, ChevronRight, Mail, Phone, MapPin, LogOut, Package, User } from "lucide-react"
import { useDispatch, useSelector } from "react-redux"
import { getUsersOrder, requestForShop } from "../features/auth/AuthSlice"
import OrderDetailsModal from "../components/shop/OrderDetailModal"

export default function UserProfilePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [orderModal,setOrderModal] = useState(false)
  const [orderDetail,setOrderDetail] = useState(false)
  const [isShopOwner, setIsShopOwner] = useState(false)
  const [request, setRequest] = useState(false)
  const [formData,SetFormData] = useState({
    name:'',
    description:'',
    address:'',
    shopPhone:''
  })
  const {user,order,shopStatus}=useSelector(state=>state.auth)
  const dispatch =useDispatch()

  const handleChange=(e)=>{
    const {name , value} = e.target
    SetFormData((prev)=>({
       ...prev,
      [name]:value,
    }))
  }

  const userData = {
    fullName: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address,
    accountType: isShopOwner ? "Shop Owner" : "Customer",
  }

  const handleShopOwnerSubmit = (e) => {
    e.preventDefault()
    dispatch(requestForShop(formData))
  }

  const handleOrderModal = (orderDetail)=>{
    setOrderDetail(orderDetail)
    setOrderModal(orderModal?false:true)
  }

  useEffect(()=>{
    dispatch(getUsersOrder())
  },[])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
    {
      orderModal && <OrderDetailsModal orderDetail={orderDetail} handleModalOrder={handleOrderModal} />
    }
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Header */}
        <div className="mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">My Profile</h2>
          <p className="text-gray-600">Manage your account & orders</p>

          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-4xl">{user.name[0].toUpperCase()}</span>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Information */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <div className="flex items-center gap-3 mb-8">
                <User className="w-6 h-6 text-gray-900" />
                <h3 className="text-2xl font-bold text-gray-900">Personal Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Full Name</p>
                  <p className="text-gray-900 font-semibold text-lg">{userData.fullName}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Email Address</p>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-900 font-semibold text-lg">{userData.email}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Phone Number</p>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <p className="text-gray-900 font-semibold text-lg">{userData.phone}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Default Address</p>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-900 font-semibold text-lg">{userData.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Shop Owner CTA */}
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 h-full flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Want to sell on Indore Bazar?</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-8">
                  Reach thousands of local customers by listing your products on our platform.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Become a Shop Owner
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* My Orders Section */}
        <div className="mt-12">
          <div className="flex items-center gap-3 mb-6">
            <Package className="w-6 h-6 text-gray-900" />
            <h3 className="text-2xl font-bold text-gray-900">My Orders</h3>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-gray-700 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {order.map((order) => (
                    <tr onClick={()=>{handleOrderModal(order)}} key={order._id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-semibold text-indigo-600">{order._id}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {new Date(order.createdAt).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{order.totalBill}</td>
                      <td className="px-6 py-4 text-sm">
                        <span
                          className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "delivered"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-amber-50 text-amber-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Owner Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full border border-gray-200 p-8">
            {shopStatus ? (
              <div className="text-center">
                <div className="flex justify-between items-start mb-6">
                  <div />
                  <button
                    onClick={() => {
                      setIsModalOpen(false)
                    }}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Sent!</h3>
                <p className="text-gray-600 mb-8">
                  Your shop owner registration request has been submitted successfully. Our team will review your
                  application and get back to you soon.
                </p>

                <button
                  onClick={() => {
                    setIsModalOpen(false)
                  }}
                  className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">Shop Owner Registration</h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>

                <p className="text-gray-600 text-sm mb-6">Fill in your shop details to get started</p>

                <form onSubmit={handleShopOwnerSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Shop Name</label>
                    <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                      type="text"
                      placeholder="Enter your shop name"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Shop Description</label>
                    <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                      placeholder="Describe your shop and products"
                      rows={4}
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Shop Address</label>
                    <input
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                      type="text"
                      placeholder="Enter your shop address"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-gray-700 block mb-2">Shop Phone</label>
                    <input
                    name="shopPhone"
                    value={formData.shopPhone}
                    onChange={handleChange}
                      type="text"
                      placeholder="Enter your shop phone"
                      className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="flex-1 px-4 py-2 border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
