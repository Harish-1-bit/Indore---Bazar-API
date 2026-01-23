import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { getAllProduct, getSingleShop } from "../features/auth/AuthSlice";
import { Package } from "lucide-react";

export default function ShopDetails() {
    const {sid}=useParams()
    const {singleShop,products,isLoading, message,isError,isSuccess}=useSelector(state=>state.auth)
    
        const dispatch=useDispatch()
        const shopProducts = products?.filter((product=>product?.shop?._id===singleShop?._id))
    
        useEffect(()=>{
            dispatch(getSingleShop(sid))
            dispatch(getAllProduct())

            if(isError && message){
                toast.error(message,{position:'top-left'})
            }
        },[isError,message])
        if(isLoading){
            return <LoadingScreen/>
        }

  const shop = {
    name: singleShop?.name,
    description: singleShop?.description,
    address: singleShop?.address,
    shopPhone:singleShop?.shopPhone,
    user: {
      _id: "692bf3ce9689c48d864d2f6b",
      name: singleShop?.user?.name,
      email: singleShop?.user?.email,
      address: "sceheme 78",
    },
    createdAt: new Date(singleShop?.createdAt).toLocaleDateString('en-IN'),
  };

  const getAvatarColor = (name) => {
    const colors = ["bg-green-100", "bg-blue-100", "bg-purple-100", "bg-yellow-100", "bg-red-100", "bg-orange-100"];
    const charCode = name?.charCodeAt(0);
    return colors[charCode % colors.length];
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="px-4 md:px-6 py-4">
          <button className="text-green-600 font-medium text-sm hover:text-green-700 flex items-center gap-2">
            ← Back to Shops
          </button>
        </div>

        <div className="bg-white mx-4 md:mx-6 rounded-lg shadow-sm">
          <div className="border-b border-gray-100 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
              

              <div className="mt-4 md:mt-0 flex-1">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{shop?.name}</h1>
                <p className="text-gray-600 mt-2 text-lg">{shop?.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  
                  <span className="bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full">
                    Verified Seller
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Shop Information</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Address</p>
                  <p className="text-gray-900 font-medium mt-1">{shop.address}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone Number</p>
                  <p className="text-gray-900 font-medium mt-1">{shop.shopPhone}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Member Since</p>
                  <p className="text-gray-900 font-medium mt-1">{formatDate(shop.createdAt)}</p>
                </div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h2 className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">Shop Owner</h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Name</p>
                  <p className="text-gray-900 font-medium mt-1">{shop.user.name}</p>
                </div>

                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="text-gray-900 font-medium mt-1">{shop.user.email}</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        <div className="mb-12 px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Products from {singleShop.name}</h2>
                        <div className="text-sm text-gray-600">Showing {shopProducts.length} products</div>
                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {shopProducts.length > 0 ? (
                            shopProducts.map((product) => (
                                <div
                                    key={product._id}
                                    className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg hover:border-teal-200 transition-all duration-200"
                                >

                                    <div className="relative w-full aspect-square bg-gray-50 overflow-hidden">
                                        <img
                                            src={product.productImage || "/placeholder.svg"}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                        />
                                        {product.stock <= 5 && (
                                            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                                                Low Stock
                                            </div>
                                        )}
                                    </div>


                                    <div className="p-4 flex flex-col">
                                        <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{product.category}</p>
                                        <h3 className="text-sm font-semibold text-gray-900 mt-2 line-clamp-2 group-hover:text-teal-600 transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">{product.description}</p>


                                        <div className="mt-4 flex items-end justify-between">
                                            <div>
                                                <p className="text-lg font-bold text-gray-900">₹{product.price}</p>
                                                <p className="text-xs text-gray-500 mt-1">{product.stock} in stock</p>
                                            </div>
                                        </div>


                                        <Link to={`/products/${product._id}`} className="mt-4 w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 text-sm">

                                            View Product
                                        </Link>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <Package size={48} className="mx-auto text-gray-400 mb-4" />
                                <p className="text-gray-600 text-lg">No products available from this shop yet</p>
                            </div>
                        )}
                    </div>
                </div>
        <div className="px-4 md:px-6 py-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-2">About This Shop</h3>
            <p className="text-blue-800 text-sm">
              This is a verified and active shop in the Indore Bazar network. All products are sourced directly from the seller. 
              If you have any concerns about quality or delivery, please report through our customer support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}