import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from "../features/auth/AuthSlice"
import { toast } from "react-toastify"
import { Link, useParams } from "react-router-dom"
import LoadingScreen from "../components/LoadingScreen"

export default function AllProducts() {
const {products, shops,message,isError,isLoading,isSuccess}=useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const {pid}=useParams
  useEffect(()=>{
    dispatch(getAllProduct())
    if(isError && message){
      toast.error(message,{position:'top-left'})
    }
},[isError,message])
if(isLoading){
    return <LoadingScreen/>
}
  const categories = [
    { name: 'Vegetables', icon: '🥬' },
    { name: 'Fruits', icon: '🍎' },
    { name: 'Dairy', icon: '🥛' },
    { name: 'Bakery', icon: '🍞' },
    { name: 'Meat', icon: '🍖' },
    { name: 'Seafood', icon: '🐟' },
    { name: 'Pantry', icon: '🥫' },
    { name: 'Snacks', icon: '🍿' },
  ];

  return (
    <div className="min-h-screen bg-white">

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">All Products</h1>
          <p className="text-gray-600">Browse all available products from local stores</p>
        </div>

        {/* Filters Section */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Category Filter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Filter by Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  className="px-4 py-2 rounded-full border border-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Price Sort */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Sort by Price</h3>
            <select className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-600">
              <option>Low to High</option>
              <option>High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Link to={`/products/${product._id}`}
              key={product._id}
              href="/product-detail"
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative bg-gray-100 aspect-square overflow-hidden">
                <img
                  src={`${product.productImage}`}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
               
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-gray-900 font-semibold mb-2 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">₹{product.price}</span>
                  <button className="w-10 h-10 bg-green-600 text-white rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors font-bold text-lg">
                    +
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center font-bold text-sm">
                  SM
                </div>
                <span className="font-bold">ShopMart</span>
              </div>
              <p className="text-gray-400 text-sm">Your trusted partner for fresh groceries from local shops.</p>
            </div>
            <div>
              <h4 className="font-bold mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Download App</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>📱 App Store</p>
                <p>🔵 Google Play</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            © 2024 ShopMart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
