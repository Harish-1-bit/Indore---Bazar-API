import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllShops } from "../features/auth/AuthSlice";
import { toast } from "react-toastify";
import LoadingScreen from "../components/LoadingScreen";
import { Link } from "react-router-dom";

export default function AllShops() {
const { shops,message,isError,isLoading,isSuccess}=useSelector(state=>state.auth)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getAllShops())
        if(isError && message){
            toast.error(message,{position:'top-left'})
        }
    },[isError,message])
    if(isLoading){
        return <LoadingScreen/>
    }

  const categories = ["Grocery", "Fruits & Vegetables", "Dairy", "Bakery", "Meat", "Snacks"];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="px-4 py-8 md:px-6 md:py-12 border-b border-gray-100">
          <h1 className="text-4xl font-bold text-gray-900">All Shops</h1>
          <p className="text-gray-600 mt-2 text-lg">Discover local stores near you</p>
        </div>

        <div className="px-4 md:px-6 py-8 border-b border-gray-100">
          <input
            type="text"
            placeholder="Search shops…"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium whitespace-nowrap hover:bg-gray-200 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 md:px-6 py-8 pb-12">
          {shops.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {shops.map((shop) => (
                <Link to={`/marketplace/${shop._id}`}
                  key={shop._id}
                  className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer overflow-hidden"
                >
                  <div className={`${shop.avatarColor} h-28 flex items-center justify-center`}>
                    <span className="text-4xl font-bold text-white px-4 py-2 bg-[#00BD7D] rounded-2xl">{shop.name[0]}</span>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 text-base">{shop.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 ">{shop.description}</p>
                    
                    <div className="flex justify-between text-xs text-gray-600 mt-3">
                      <span>{shop.deliveryTime}</span>
                      <span>{shop.distance}</span>
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-gray-100 flex justify-between items-center">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded ${shop.status ==='accepted' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                      {shop.status ==='accepted' ? 'Open Now' : 'Closed'}
                    </span>
                    <span className="text-green-600 font-medium text-sm hover:text-green-700">View Shop →</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🏪</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">No shops available right now</h3>
              <p className="text-gray-600 mt-2">Check back later for available stores</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}