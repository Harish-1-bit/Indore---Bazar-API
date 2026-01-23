import React from 'react'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAllProduct, getAllShops } from '../features/auth/AuthSlice'
import { toast } from 'react-toastify'
import LoadingScreen from '../components/LoadingScreen'
import { Link } from 'react-router-dom'

const Home = () => {
  const {products, shops,message,isError,isLoading,isSuccess}=useSelector(state=>state.auth)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getAllProduct())
    dispatch(getAllShops())
    if(isError && message){
      toast.error(message,{position:'top-left'})
    }
  },[isError,message])
  if(isLoading){
    return <LoadingScreen/>
  }
  return (
    <div className="min-h-screen bg-gray-50">
        

      <section className="relative bg-gradient-to-r from-emerald-50 to-teal-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Shop Fresh From Local Stores
              </h1>
              <p className="text-xl text-gray-600">
                Discover thousands of products from your favorite local shops. Delivered fresh to your doorstep in minutes.
              </p>
              <button className="bg-emerald-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-600 transition-colors shadow-lg hover:shadow-xl">
                Start Shopping
              </button>
              <div className="flex items-center space-x-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-gray-900">500+</p>
                  <p className="text-gray-600">Local Shops</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">10k+</p>
                  <p className="text-gray-600">Products</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-gray-900">50k+</p>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Fresh vegetables" className="w-full h-48 object-cover" />
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Fruits" className="w-full h-64 object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Dairy products" className="w-full h-64 object-cover" />
                  </div>
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                    <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Bakery" className="w-full h-48 object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Shop by Category</h2>
              <p className="text-gray-600 mt-2">Browse through our wide range of categories</p>
            </div>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700">View All</button>
          </div>
          <div className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide">
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🥬</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Vegetables</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍎</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Fruits</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🥛</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Dairy</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍞</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Bakery</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍖</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Meat</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🐟</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Seafood</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-teal-100 to-teal-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🥫</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Pantry</p>
            </div>
            <div className="flex-shrink-0 w-32 text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-6 mb-3 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center">
                  <span className="text-3xl">🍫</span>
                </div>
              </div>
              <p className="font-semibold text-gray-800">Snacks</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Trending Products</h2>
              <p className="text-gray-600 mt-2">Most popular items this week</p>
            </div>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700">See All</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {
              products.map((product,index)=>{
                if(index<5){
                  return(
                    <Link to={`/products/${product._id}`} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src={`${product.productImage}`} alt="Product" className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">15% OFF</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{product?.name}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">₹{product?.price}</span>
                  </div>
                  <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </Link>
                  )
                }else{
                  return
                }
              })
            }

          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Trending Shops</h2>
              <p className="text-gray-600 mt-2">Popular stores near you</p>
            </div>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700">View All Shops</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              shops.map((shop,index)=>{
                if(index<5){
                  return(
                    <div key={shop._id} className="bg-white h-auto w-auto rounded-xl overflow-hidden shadow-md hover:shadow-xl flex transition-shadow cursor-pointer border border-gray-100 flex-row items-center px-6">
                      <div className='p-3 rounded-lg bg-[#009866] text-white'>
                        {shop.name[0]}
                      </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">{shop.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{shop.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 15-20 min</span>
                    <span>📍 2.5 km</span>
                  </div>
                </div>
              </div>
            </div>
                  )
                }
              })
            }
          </div>
        </div>
      </section>

      
    </div>
  )
}

export default Home
