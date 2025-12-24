import React from 'react'

const Home = () => {
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
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Product" className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">15% OFF</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Fresh Apples</h3>
                <p className="text-sm text-gray-500 mb-2">1 kg</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$4.99</span>
                    <span className="text-sm text-gray-400 line-through ml-2">$5.99</span>
                  </div>
                  <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Product" className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Organic Tomatoes</h3>
                <p className="text-sm text-gray-500 mb-2">500 g</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$2.49</span>
                  </div>
                  <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Product" className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">NEW</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Fresh Milk</h3>
                <p className="text-sm text-gray-500 mb-2">1 L</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$3.99</span>
                  </div>
                  <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Product" className="w-full h-48 object-cover" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Whole Wheat Bread</h3>
                <p className="text-sm text-gray-500 mb-2">400 g</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$2.99</span>
                  </div>
                  <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600">
                    <span className="text-xl">+</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Product" className="w-full h-48 object-cover" />
                <span className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-full">20% OFF</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">Bananas</h3>
                <p className="text-sm text-gray-500 mb-2">6 pcs</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">$1.99</span>
                    <span className="text-sm text-gray-400 line-through ml-2">$2.49</span>
                  </div>
                  <button className="bg-emerald-500 text-white p-2 rounded-lg hover:bg-emerald-600">
                    <span className="text-xl">+</span>
                  </button>
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
              <h2 className="text-3xl font-bold text-gray-900">Trending Shops</h2>
              <p className="text-gray-600 mt-2">Popular stores near you</p>
            </div>
            <button className="text-emerald-600 font-semibold hover:text-emerald-700">View All Shops</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
              <div className="relative">
                <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shop" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="font-semibold text-sm">4.8</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Fresh Market</h3>
                <p className="text-gray-600 text-sm mb-3">Organic vegetables, fruits & dairy products</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 15-20 min</span>
                    <span>📍 2.5 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1309240/pexels-photo-1309240.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shop" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="font-semibold text-sm">4.6</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Daily Bakery</h3>
                <p className="text-gray-600 text-sm mb-3">Fresh bread, pastries & cakes daily</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 10-15 min</span>
                    <span>📍 1.8 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shop" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="font-semibold text-sm">4.9</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Green Grocery</h3>
                <p className="text-gray-600 text-sm mb-3">Farm fresh fruits and vegetables</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 20-25 min</span>
                    <span>📍 3.2 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1537169/pexels-photo-1537169.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shop" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="font-semibold text-sm">4.7</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Dairy Delight</h3>
                <p className="text-gray-600 text-sm mb-3">Fresh milk, cheese & dairy essentials</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 15-20 min</span>
                    <span>📍 2.1 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
              <div className="relative">
                <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shop" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="font-semibold text-sm">4.5</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Snack Corner</h3>
                <p className="text-gray-600 text-sm mb-3">Wide variety of snacks & beverages</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 10-15 min</span>
                    <span>📍 1.5 km</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100">
              <div className="relative">
                <img src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shop" className="w-full h-48 object-cover" />
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                  <span className="text-yellow-500 text-sm">★</span>
                  <span className="font-semibold text-sm">4.8</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-xl text-gray-900 mb-2">Meat & More</h3>
                <p className="text-gray-600 text-sm mb-3">Premium quality meat & poultry</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>🕐 25-30 min</span>
                    <span>📍 3.8 km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SM</span>
                </div>
                <span className="text-2xl font-bold">ShopMart</span>
              </div>
              <p className="text-gray-400">Your trusted partner for fresh groceries from local shops.</p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a className="hover:text-white transition-colors">About Us</a></li>
                <li><a className="hover:text-white transition-colors">Careers</a></li>
                <li><a className="hover:text-white transition-colors">Blog</a></li>
                <li><a className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a className="hover:text-white transition-colors">Help Center</a></li>
                <li><a className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Download App</h4>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition-colors">
                  <span className="text-2xl">📱</span>
                  <div>
                    <p className="text-xs text-gray-400">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-lg p-3 flex items-center space-x-3 cursor-pointer hover:bg-gray-700 transition-colors">
                  <span className="text-2xl">🤖</span>
                  <div>
                    <p className="text-xs text-gray-400">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2024 ShopMart. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
