import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createProduct, getShopDetails, updateProduct } from "../../features/shop/ShopSlice"

const ShopAddProduct = ({modal, handleModal}) => {

  const dispatch = useDispatch()
  const {shop,edit} = useSelector(state=>state.shop)
    const [formData,setFormData]=useState({
        name:'',
        description:'',
        price:'',
        stock:'',
        category:'',
        productImage:'',
        shopId:shop._id
    })

    const {name,description,price,stock,category,productImage,shopId}=formData

    const handleChange = (e)=>{
        if(e.target.name==='productImage'){
          setFormData({
            ...formData,
            [e.target.name]:e.target.files[0]
        })
        }else{
          setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
        }
    }

    

    const handleSubmit = (e)=>{
        e.preventDefault()

        let formDataToSend = new FormData()
        formDataToSend.append('name',name)
        formDataToSend.append('description',description)
        formDataToSend.append('price',price)
        formDataToSend.append('stock',stock)
        formDataToSend.append('category',category)
        formDataToSend.append('productImage',productImage)
        formDataToSend.append('shopId',shopId)

        edit.isEdit? dispatch(updateProduct(formData)):dispatch(createProduct(formDataToSend))

        setFormData({
        name:'',
        description:'',
        price:'',
        stock:'',
        category:'',
        productImage:'',
        shopId:shop._id
    })

    handleModal()
    }

    useEffect(()=>{
      if(edit?.isEdit){
        setFormData(edit?.product)
      }
    },[])

  return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white shadow-2xl">
        <div className="border-b border-gray-100 px-6 py-4">
          <h2 className="text-2xl font-semibold text-gray-800">Add New Product</h2>
          <p className="mt-1 text-sm text-gray-500">Fill in the product details below</p>
        </div>

        <form onSubmit={handleSubmit} className="max-h-[70vh] overflow-y-auto px-6 py-6">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Product Image</label>
              <div className=" relative flex h-48 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/30 transition-colors hover:border-emerald-400 hover:bg-emerald-50/50">
                <svg className="mb-3 h-12 w-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  />
                </svg>
                <p className="text-sm font-medium text-emerald-700">Drop your image here or click to browse</p>
                <p className="mt-1 text-xs text-gray-500">PNG, JPG up to 5MB</p>
                <input
                    name='productImage'
                    accept="image/png,image/jpeg,image/webp"
                    onChange={handleChange} type="file" className="text-center" />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Product Name</label>
              <input
                name="name"
                value={name}
                onChange={handleChange}
                type="text"
                placeholder="e.g., Fresh Organic Tomatoes"
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-800 placeholder-gray-400 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">Product Description</label>
              <textarea
              name="description"
                value={description}
                onChange={handleChange}
                placeholder="Describe your product..."
                rows={4}
                className="w-full resize-none rounded-lg border border-gray-200 px-4 py-2.5 text-gray-800 placeholder-gray-400 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
              ></textarea>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Category</label>
                <select 
                name="category"
                value={category}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-800 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100">
                  <option>Select a category</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Dairy</option>
                  <option>Grains & Pulses</option>
                  <option>Spices</option>
                  <option>Snacks</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Shop Id</label>
                <input
                    value={shopId}
                    name="shopId"
                    onChange={handleChange}
                    type="text"
                    readOnly
                    className="disabled:bg-gray-300 w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                    />
              </div>
              
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Price (₹)</label>
                <input
                name="price"
                value={price}
                onChange={handleChange}
                  type="text"
                  placeholder="0.00"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-800 placeholder-gray-400 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">Stock Quantity</label>
                <input
                name="stock"
                value={stock}
                onChange={handleChange}
                  type="text"
                  placeholder="0"
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 text-gray-800 placeholder-gray-400 transition-colors focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                />
              </div>
            </div>
          </div>
        

        <div className="flex flex-col-reverse gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:justify-end">
          <button onClick={handleModal} className="rounded-lg border border-gray-300 px-6 py-2.5 font-medium text-gray-700 transition-colors hover:bg-gray-50">
            Cancel
          </button>
          <button type="submit" className="rounded-lg bg-emerald-500 px-6 py-2.5 font-medium text-white shadow-sm transition-all hover:bg-emerald-600 hover:shadow-md">
            {
              edit.isEdit ? 'Update Product':'Add Product'
            }
          </button>
        </div>
          </form>
      </div>
    </div>
  )
}

export default ShopAddProduct
