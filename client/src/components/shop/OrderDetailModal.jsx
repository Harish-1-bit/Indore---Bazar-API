import { useDispatch, useSelector } from "react-redux"
import { orderUpdate } from "../../features/shop/ShopSlice"
import { useEffect } from "react"
import { cancelOrder } from "../../features/auth/AuthSlice"

export default function OrderDetailsModal({ orderDetail,modalOrder,handleModalOrder  = () => {} }) {
    const {shopOrders} = useSelector(state=>state.shop)
    const dispatch = useDispatch()

    const handleOrderUpdate = (orderDetails)=>{
      if(orderDetail.user.isShopOwner){
      dispatch(orderUpdate(orderDetails))
      }else{
        console.log(orderDetails)
        dispatch(cancelOrder(orderDetails))
      }
      handleModalOrder()
    }

  // Status badge styling
  const getStatusBadgeStyles = (status) => {
    const styles = {
      placed: "bg-yellow-100 text-yellow-800",
      dispatched: "bg-blue-100 text-blue-800",
      delivered: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    }
    return styles[status] || "bg-gray-100 text-gray-800"
  }


   const itemsTotal = orderDetail?.products?.reduce(
  (acc, item) => acc + item.product.price * item.qty,
  0
)

const discountAmount = itemsTotal - (orderDetail?.totalBill || 0)
    let itemTotal =orderDetail?.products?.reduce((acc,item)=>{
                    return acc + item.product.price * item.qty
    },0)


  const getPaymentBadgeStyles = (status) => {
    return status === "Paid" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
  }




  return (
    <div className="fixed inset-0 backdrop-blur-xs bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col transform transition-all duration-300 scale-100 animate-[scaleIn_0.3s_ease-out]">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex items-center justify-between bg-white">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Order Details</h2>
            <p className="text-sm text-gray-600 mt-1">Order ID: #{orderDetail?._id}</p>
          </div>
          <button
            onClick={() => {
                handleModalOrder()
            } }
            
            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-2 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-1 p-6 space-y-6">
          {/* Order Summary Section */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Order Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Customer Name</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{orderDetail?.user?.name}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Email</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{orderDetail?.user?.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Address</p>
                <p className="text-sm font-medium text-gray-900 mt-1">{orderDetail?.user?.address}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 uppercase tracking-wide">Order Date & Time</p>
                <p className="text-sm font-medium text-gray-900 mt-1">
                   {new Date(orderDetail?.createdAt).toLocaleDateString('en-IN')}
                </p>
              </div>
              <div className="md:col-span-2">
                <p className="text-xs text-gray-600 uppercase tracking-wide mb-2">Payment Status</p>
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getPaymentBadgeStyles(orderDetail.status)}`}
                >
                  {orderDetail?.status === 'delivered'? 'Paid': 'Un-Paid'}
                </span>
              </div>
            </div>
          </div>

          {/* Items List */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Items</h3>
            <div className="space-y-3">
              {orderDetail.products.map((item) => (
                <div key={item._id}>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium text-gray-900">{item.product.name}</h4>
                      <p className="text-sm font-semibold text-gray-900">₹{item.product.price * item.qty}</p>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Quantity: {item.qty}</span>
                      <span>₹{item.product.price} per item</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Amount Section */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Items Total</p>
                <p className="font-medium text-gray-900">₹{itemTotal}</p>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-gray-700">Discout</p>
                <p className="font-medium text-green-600">₹{discountAmount}</p>
              </div>
              <div className="border-t border-gray-300 pt-3">
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-900">Grand Total</p>
                  <p className="text-xl font-bold text-blue-600">₹{orderDetail.totalBill}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Status Section */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">Order Status</h3>
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getStatusBadgeStyles(orderDetail.status)}`}
            >
              {orderDetail.status}
            </span>
          </div>
        </div>

        {/* Footer - Action Buttons */}
        <div className="border-t border-gray-200 p-6 bg-white flex gap-3 flex-col sm:flex-row">
          {orderDetail.status === "placed" && (
            <>
              {
                orderDetail.user.isShopOwner?(
                  <button onClick={()=>{
                handleOrderUpdate({id:orderDetail._id, status:'dispatched'})
              }} className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                Mark as Dispatched
              </button>
                ):(<></>)
              }
              <button onClick={()=>{
                handleOrderUpdate({id:orderDetail._id, status:'cancelled'})
              }} className="flex-1 border-2 border-red-600 text-red-600 hover:bg-red-50 font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
                Cancel Order
              </button>
            </>
          )}
          {orderDetail.status === "dispatched" && (
            
              orderDetail.user.isShopOwner?(
                <button
              onClick={()=>{
                handleOrderUpdate({id:orderDetail._id, status:'delivered'})
              }}
              className="w-full bg-blue-300 text-blue-800 hover:text-blue-300 hover:bg-blue-800  font-medium py-2 px-4 rounded-lg cursor-pointer transition-colors focus:outline-none hover:focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Mark as Delivered
            </button>
              ):(
                <></>
              )
            
          )}
          {orderDetail.status === "delivered" && (
            <button
              disabled
              className="w-full bg-green-300 text-green-800 font-medium py-2 px-4 rounded-lg cursor-not-allowed opacity-60"
            >
              Order Delivered
            </button>
          )}
          {orderDetail.status === "cancelled" && orderDetail.user.isShopOwner && (
            <button
              disabled
              className="w-full bg-red-300 text-red-800 font-medium py-2 px-4 rounded-lg cursor-not-allowed opacity-60"
            >
              Order Cancelled
            </button>
          )}
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
