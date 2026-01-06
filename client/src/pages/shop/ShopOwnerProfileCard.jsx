import { MapPin, Clock, Phone, Mail, Globe, Store } from 'lucide-react';
import ShopOwnerLayout from '../../components/shop/ShopOwnerLayout';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getShopDetails } from '../../features/shop/ShopSlice';
import { toast } from 'react-toastify';

function ShopOwnerProfileCard() {

  const {shopLoading,shopSucces,shopError,shopErrorMessage,shop} = useSelector(state=>state.shop)

  const dispatch = useDispatch()

  useEffect(()=>{

    dispatch(getShopDetails())

    if(shopError && shopErrorMessage){
      toast.error(adminErrorMessage,{position:'top-left'})
    }
  },[])

  return (
    <ShopOwnerLayout activePage="Shop Profile">
      <div className="max-w-4xl">
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-slate-900">Shop Information</h2>
              <p className="text-sm text-slate-500 mt-1">Manage your shop details and settings</p>
            </div>
            <span className={`inline-block px-4 py-2 text-sm font-medium ${shop.status==='accepted'?'bg-emerald-100 text-emerald-700':shop.status==='pending'?'bg-yellow-100 text-yellow-700':'bg-red-100 text-red-700'} rounded-lg`}>
              {shop.status}
            </span>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Shop Name
                </label>
                <input
                  type="text"
                  value={shop.name}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Address
                </div>
              </label>
              <input
                type="text"
                value={shop.address}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Phone Number
                  </div>
                </label>
                <input
                  type="tel"
                  value={shop.shopPhone}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Address
                  </div>
                </label>
                <input
                  type="email"
                  value={shop?.user?.email}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Website
                </div>
              </label>
              <input
                type="url"
                placeholder="https://yourwebsite.com"
                value="https://freshmart.com"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Description
              </label>
              <textarea
              value={shop.description}
                rows="4"
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                placeholder="Describe your shop..."
              ></textarea>
            </div>
          </div>
        </div>


        <div className="flex items-center justify-end space-x-4">
          <button className="px-6 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50">
            Cancel
          </button>
          <button className="px-6 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium hover:bg-emerald-600">
            Update Shop
          </button>
        </div>
      </div>
    </ShopOwnerLayout>
  );
}

export default ShopOwnerProfileCard;
