'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyCoupon, emptyCoupon, getCart, placeOrder, removeFromCart, updateCart } from '../features/Cart/CartSlice';
import { toast } from "react-toastify";
import LoadingScreen from '../components/LoadingScreen';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const {cart,coupon,orderData,cartLoading,cartError,cartMessage}=useSelector(state=>state.cart)
  const [couponCode , setCouponCode]= useState('')
  const [incQty,setIncQty]=useState(cart.qty)
  const [decQty,setDecQty]=useState(cart.qty)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showOrderModal, setShowOrderModal] = useState(false);

  const subTotal = cart?.products?.reduce((acc,item)=>{
    return acc + (item.product.price * item.qty)
  },0)

    const handleUpdateCart = (cartDetail)=>{
    dispatch(updateCart(cartDetail))
  }

  const validCouponCode = (couponDetails)=>{
    dispatch(applyCoupon(couponDetails))
  }

const handleRemovalProduct = (id)=>{
  dispatch(removeFromCart(id))
}

  const handlePlaceOrder = (couponCode) => {
    dispatch(placeOrder(couponCode))
    setShowOrderModal(true);
  };

  const closeModal = () => {
    setShowOrderModal(false);
    // navigate('/products')
  };
 useEffect(()=>{
    dispatch(getCart())
    if(cartError && cartMessage){
      toast.error(cartMessage,{position:'top-right'})
    }
  },[cartError,cartMessage])

if(cartLoading){
  return <LoadingScreen/>
}

  if (!cart || cart?.products?.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛒</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600">Add items from shops to get started</p>
          </div>
        </div>
      </div>
    );
  }

 

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              {cart?.products?.map((item, index) => (
                <div key={item._id} className={`p-6 flex items-center justify-between ${index !== cart.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className='h-15'>
                    <img src={item.product.productImage} className='h-full' alt="" />
                  </div>
                  <div className="flex-1 gap-4 px-5 items-center">
                    <h3 className="font-semibold text-gray-900">{item.product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.product.shop.name}</p>
                    <p className="text-green-600 font-medium mt-2">₹{item.product.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={()=>{
                          handleUpdateCart({id:cart._id,productId:item.product._id,qty:item.qty - 1})
                        }}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 border-l border-r border-gray-200 min-w-12 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={()=>{
                          handleUpdateCart({id:cart._id,productId:item.product._id,qty: item.qty + 1})
                        }}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-900 min-w-20 text-right">
                      ₹{item.product.price * item.qty}
                    </p>
                    <button
                    onClick={()=>{
                      handleRemovalProduct(item.product._id)
                    }}
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Summary</h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-100">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹ {subTotal}</span>
                </div>
                <div className="space-y-2 mt-5">
                  <label className="text-sm font-medium text-gray-700">Apply Coupon</label>
                  {coupon ? (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                      <div>
                        <p className="text-sm font-medium text-green-700">Coupon Applied</p>
                        <p className="text-xs text-green-600">
                         
                        </p>
                      </div>
                      <button
                        onClick={()=>{dispatch(emptyCoupon())
                          setCouponCode('')
                        }}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2 py-2">
                      <input
                        type="text"
                        name='couponCode'
                        value={couponCode}
                        onChange={(e)=>{
                          setCouponCode(e.target.value)
                        }}
                        placeholder="Enter code"
                   

                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button
                        onClick={()=>{
                          validCouponCode({couponCode:couponCode,shopId:cart.products[0].product.shop._id})
                        }}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                </div> 
                
                {coupon  && (
                  <div className="flex justify-between text-red-600 font-medium">
                    <span>Discount</span>
                    <span>-₹{subTotal*coupon.couponDiscount/100}</span>
                  </div>
                )} 
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">₹{coupon?Math.floor(subTotal - subTotal*coupon.couponDiscount/100):subTotal}</span>
                </div>

                

              </div>

              <button
                onClick={()=>{
                  handlePlaceOrder(couponCode)
                }}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {showOrderModal && orderData && (
        <div className="fixed inset-0 backdrop-blur-2xl bg-opacity-50 flex items-center justify-center p-4 z-60">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full max-h-96 overflow-y-auto">
            <div className="bg-green-50 border-b border-green-200 p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 text-center">Order Placed!</h2>
              <p className="text-sm text-gray-600 text-center mt-1">Thank you for your purchase</p>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-600 uppercase tracking-wide">Order ID</p>
                <p className="font-mono font-semibold text-gray-900">{orderData._id}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Order Details</p>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {orderData.products.map(item => (
                    <div key={item._id} className="flex justify-between text-sm text-gray-600">
                      <span>{item.product.name} x{item.qty}</span>
                      <span>₹{item.product.price * item.qty}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">₹{subTotal}</span>
                </div>
                
                {orderData.isDiscount && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-sm">Discount</span>
                    <span className="text-sm font-medium">-₹{subTotal*coupon.couponDiscount/100}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>₹{orderData.totalBill}</span>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-3">
                <p className="text-xs text-blue-700">
                  <span className="font-medium">Estimated Delivery:</span> 30-45 minutes
                </p>
              </div>

              <button
                onClick={closeModal}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors mt-2"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
