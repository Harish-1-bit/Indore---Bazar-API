import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation()
  console.log(location)
  return (
    <footer className={`relative bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8 z-50 ${location.pathname.includes('/shop')? 'hidden': 'block'}`}>
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
  )
}

export default Footer
