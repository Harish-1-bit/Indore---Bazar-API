import { useDispatch, useSelector } from "react-redux"
import { getSingleProduct } from "../features/auth/AuthSlice"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { Link, useParams } from "react-router-dom"
import LoadingScreen from "../components/LoadingScreen"

export default function ProductDetail() {
const {user,singleProduct,message,isError,isLoading,isSuccess}=useSelector(state=>state.auth)
const [count, setCount]=useState(1)
const handleAddcount=()=>{
    setCount(count + 1)
}


   const handleSubcount=()=>{
    if(count>1){
        setCount(count - 1)
    }
}
  const dispatch = useDispatch()
  const {pid}=useParams()
  useEffect(()=>{
    window.scrollTo(0, 0)
    dispatch(getSingleProduct(pid))
    if(isError && message){
      toast.error(message,{position:'top-left'})
    }
},[isError,message])
if(isLoading){
    return <LoadingScreen/>
}
    const product={}
  const relatedProducts = [
    {
      id: 1,
      name: 'Bell Peppers Mix',
      price: 150,
      discount: '15% OFF',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e12?w=300&h=300&fit=crop',
    },
    {
      id: 2,
      name: 'Fresh Cucumber',
      price: 45,
      discount: '5% OFF',
      image: 'https://images.unsplash.com/photo-1604980701429-91e835e5e97f?w=300&h=300&fit=crop',
    },
    {
      id: 3,
      name: 'Organic Carrots',
      price: 80,
      discount: '10% OFF',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64e12?w=300&h=300&fit=crop',
    },
    {
      id: 4,
      name: 'Green Lettuce',
      price: 65,
      discount: '8% OFF',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-gray-600">
          <a  className="hover:text-gray-900">All Products</a>
          <span className="mx-2">/</span>
          <a className="hover:text-gray-900">{singleProduct.category}</a>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{singleProduct.name}</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Product Image */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square sticky top-24">
              <img
                src={`${singleProduct.productImage}`}
                alt={singleProduct.name}
                className="w-full h-full object-cover"
              />
              
            </div>
          </div>

          {/* Right: Product Details */}
          <div>
            {/* Product Info */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{singleProduct.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <span className="text-gray-700 text-sm"> (5 reviews)</span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-gray-900">₹{singleProduct.price}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8">
                {singleProduct.description}
              </p>
            </div>

            {/* Store Info */}
            <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold text-xs">
                  FM
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{singleProduct?.shop?.name}</h3>
                  <p className="text-sm text-gray-600">15 min • 2 km</p>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center border border-gray-200 rounded-lg w-fit">
                <button onClick={handleSubcount} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold">
                  −
                </button>
                <input
                  type="number"
                  name="count"
                  value={count}
                  defaultValue="1"
                  className="w-12 h-10 text-center border-l border-r border-gray-200 font-semibold focus:outline-none"
                  readOnly
                />
                <button onClick={handleAddcount} className="w-10 h-10 flex items-center justify-center text-gray-600 hover:bg-gray-100 font-bold">
                  +
                </button>
              </div>
            </div>

            {
              !user?(
                <button className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors mb-4" ><Link to={'/login'} >You Must Login First</Link></button>
              ):(

            <>
            <button className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors mb-4">
              Add to Cart
            </button>


            <Link to={'/auth/cart'} className="w-full bg-gray-100 text-gray-900 py-4 rounded-lg font-bold text-lg hover:bg-gray-200 transition-colors">
              Buy Now
            </Link>
            </>
              )
            }

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-600 mb-1">Category</p>
                  <p className="font-semibold text-gray-900">{singleProduct.category}</p>
                </div>
                <div>
                  <p className="text-gray-600 mb-1">Store</p>
                  <p className="font-semibold text-gray-900">{singleProduct?.shop?.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
