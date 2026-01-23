'use client';

import { useState } from 'react';

const VALID_COUPONS = {
  'SAVE10': { discount: 10, type: 'percentage' },
  'SAVE50': { discount: 50, type: 'flat' },
  'WELCOME20': { discount: 20, type: 'percentage' },
  'FRESH30': { discount: 30, type: 'flat' },
};

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Fresh Milk (1L)', price: 60, quantity: 2, shopName: 'Ramu Dudh Wala' },
    { id: 2, name: 'Whole Wheat Bread', price: 45, quantity: 1, shopName: 'Golden Bakery' },
    { id: 3, name: 'Organic Eggs (Dozen)', price: 120, quantity: 1, shopName: 'Fresh Mart' },
    { id: 4, name: 'Apple (1kg)', price: 150, quantity: 2, shopName: 'Organic Valley' },
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState('');
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderData, setOrderData] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryCharge = subtotal > 500 ? 0 : 40;
  
  let discount = 0;
  if (appliedCoupon) {
    if (appliedCoupon.type === 'percentage') {
      discount = Math.floor(subtotal * (appliedCoupon.discount / 100));
    } else {
      discount = appliedCoupon.discount;
    }
  }

  const total = subtotal + deliveryCharge - discount;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id));
    } else {
      setCartItems(cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const validateCoupon = () => {
    setCouponError('');
    
    if (!couponCode.trim()) {
      setCouponError('Please enter a coupon code');
      return;
    }

    const coupon = VALID_COUPONS[couponCode.toUpperCase()];
    
    if (!coupon) {
      setCouponError('Invalid coupon code');
      return;
    }

    setAppliedCoupon(coupon);
    setCouponCode('');
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponError('');
    setCouponCode('');
  };

  const handlePlaceOrder = () => {
    setOrderData({
      orderId: `ORD-${Date.now()}`,
      items: cartItems,
      subtotal,
      discount,
      deliveryCharge,
      total,
      coupon: appliedCoupon ? couponCode : null,
      timestamp: new Date().toLocaleString('en-IN'),
    });
    setShowOrderModal(true);
  };

  const closeModal = () => {
    setShowOrderModal(false);
    setCartItems([]);
    setAppliedCoupon(null);
  };

  if (cartItems.length === 0 && !showOrderModal) {
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
              {cartItems.map((item, index) => (
                <div key={item.id} className={`p-6 flex items-center justify-between ${index !== cartItems.length - 1 ? 'border-b border-gray-100' : ''}`}>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.shopName}</p>
                    <p className="text-green-600 font-medium mt-2">₹{item.price}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        −
                      </button>
                      <span className="px-4 py-2 border-l border-r border-gray-200 min-w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-2 text-gray-600 hover:bg-gray-50"
                      >
                        +
                      </button>
                    </div>
                    <p className="font-semibold text-gray-900 min-w-20 text-right">
                      ₹{item.price * item.quantity}
                    </p>
                    <button
                      onClick={() => updateQuantity(item.id, 0)}
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
                  <span>₹{subtotal}</span>
                </div>
                {deliveryCharge > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span>Delivery</span>
                    <span>₹{deliveryCharge}</span>
                  </div>
                )}
                {deliveryCharge === 0 && (
                  <div className="flex justify-between text-green-600 text-sm font-medium">
                    <span>Free Delivery</span>
                    <span>✓</span>
                  </div>
                )}
                {discount > 0 && (
                  <div className="flex justify-between text-green-600 font-medium">
                    <span>Discount</span>
                    <span>-₹{discount}</span>
                  </div>
                )}
              </div>

              <div className="mb-6">
                <div className="flex justify-between mb-4">
                  <span className="font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold text-gray-900">₹{total}</span>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Apply Coupon</label>
                  {appliedCoupon ? (
                    <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3">
                      <div>
                        <p className="text-sm font-medium text-green-700">Coupon Applied</p>
                        <p className="text-xs text-green-600">
                          {appliedCoupon.type === 'percentage' 
                            ? `${appliedCoupon.discount}% off` 
                            : `₹${appliedCoupon.discount} off`}
                        </p>
                      </div>
                      <button
                        onClick={removeCoupon}
                        className="text-green-600 hover:text-green-700 text-sm font-medium"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Enter code"
                        value={couponCode}
                        onChange={(e) => {
                          setCouponCode(e.target.value);
                          setCouponError('');
                        }}
                        onKeyPress={(e) => e.key === 'Enter' && validateCoupon()}
                        className="flex-1 px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button
                        onClick={validateCoupon}
                        className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 text-sm font-medium transition-colors"
                      >
                        Apply
                      </button>
                    </div>
                  )}
                  {couponError && (
                    <p className="text-xs text-red-600 mt-1">{couponError}</p>
                  )}
                </div>

                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-xs text-blue-700">
                    <span className="font-medium">Try codes:</span> SAVE10, SAVE50, WELCOME20, FRESH30
                  </p>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {showOrderModal && orderData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
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
                <p className="font-mono font-semibold text-gray-900">{orderData.orderId}</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Order Details</p>
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  {orderData.items.map(item => (
                    <div key={item.id} className="flex justify-between text-sm text-gray-600">
                      <span>{item.name} x{item.quantity}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span className="text-sm">Subtotal</span>
                  <span className="text-sm">₹{orderData.subtotal}</span>
                </div>
                {orderData.deliveryCharge > 0 && (
                  <div className="flex justify-between text-gray-600">
                    <span className="text-sm">Delivery</span>
                    <span className="text-sm">₹{orderData.deliveryCharge}</span>
                  </div>
                )}
                {orderData.discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span className="text-sm">Discount</span>
                    <span className="text-sm font-medium">-₹{orderData.discount}</span>
                  </div>
                )}
                <div className="flex justify-between font-semibold text-gray-900 pt-2 border-t border-gray-100">
                  <span>Total</span>
                  <span>₹{orderData.total}</span>
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
