"use client"

import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createCoupon, updateCoupon } from "../../features/shop/ShopSlice"

export default function CouponModal({ handleModalCoupon}) {
  const [formData, setFormData] = useState({
    couponCode: "",
    couponDiscount: "",
  })
  const {edit}=useSelector(state=>state.shop)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(edit.isEdit){
      dispatch(updateCoupon(formData))
    }else{
    dispatch(createCoupon(formData))
    }
    handleModalCoupon()
}

useEffect(()=>{
    if(edit?.isEdit){
        setFormData(edit?.coupon)
    }
},[])

  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full transform transition-all duration-300 scale-100 animate-[scaleIn_0.3s_ease-out]">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex items-center justify-between bg-white">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Create Coupon</h2>
            <p className="text-sm text-gray-600 mt-1">Add a new discount coupon</p>
          </div>
          <button
            onClick={handleModalCoupon}
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
           
            // Form
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Coupon Code Input */}
              <div>
                <label htmlFor="couponCode" className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Code
                </label>
                <input
                  type="text"
                  id="couponCode"
                  name="couponCode"
                  value={formData.couponCode}
                  onChange={handleInputChange}
                  placeholder="e.g., SUMMER20"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              {/* Coupon Discount Input */}
              <div>
                <label htmlFor="couponDiscount" className="block text-sm font-medium text-gray-700 mb-2">
                  Discount Amount (%)
                </label>
                <input
                  type="number"
                  id="couponDiscount"
                  name="couponDiscount"
                  value={formData.couponDiscount}
                  onChange={handleInputChange}
                  placeholder="e.g., 20"
                  min="0"
                  max="100"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 placeholder-gray-500"
                  required
                />
              </div>

              {
                edit.isEdit? (
                  <div>
                <label htmlFor="couponDiscount" className="block text-sm font-medium text-gray-700 mb-2">
                  Coupon Status
                </label>
                <select onChange={handleInputChange} name="isActive" value={formData.isActive} id="">
                  <option value={true}>Active</option>
                  <option value={false}>De-Active</option>
                </select>
              </div>
                ):(<></>)
              }

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={handleModalCoupon}
                  className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {
                    edit?.isEdit ? 'Update Coupon':'Create Coupon'
                  }
                </button>
              </div>
            </form>
          
        </div>
      </div>

      <style>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  )
}
