import { ShoppingBag } from 'lucide-react';

function LoadingScreen({ loadingMessage = "Preparing your experience" }) {
    return (
            <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center p-4">
      <div className="flex flex-col items-center gap-8">
        {/* Logo Circle */}
        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">IB</span>
          </div>
          <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-20"></div>
        </div>

        {/* Brand Name */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Indore Bazar</h1>
          <p className="text-emerald-600 text-lg font-medium">Loading fresh products…</p>
        </div>

        {/* Pulsing Dots Loader */}
        <div className="flex gap-2">
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
          <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
        </div>

        {/* Optional: Skeleton Cards */}
        <div className="flex gap-4 mt-4">
          <div className="w-20 h-20 bg-white rounded-xl shadow-md animate-pulse"></div>
          <div
            className="w-20 h-20 bg-white rounded-xl shadow-md animate-pulse"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-20 h-20 bg-white rounded-xl shadow-md animate-pulse"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
    );
}

export default LoadingScreen;