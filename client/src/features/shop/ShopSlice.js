import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import shopServices from './shopServices';

let shopExist = JSON.parse(localStorage.getItem('shop'))

const initialState = {
    shopLoading:false,
    shopSucces:false,
    shopError:false,
    shopErrorMessage:false,
    shop:shopExist || {},
    shopProducts:[],
    shopOrders:[],
    shopCoupons:[],
    edit:{
      product:{},
      isEdit:false
    }
}

const ShopSlice = createSlice({
  name: 'shop ',
  initialState,
  reducers: {
    editProduct:(state,action)=>{
          return {
            ...state,
            edit:{product:action.payload,
            isEdit:true}
          }
        },
    editCoupon:(state,action)=>{
          return {
            ...state,
            edit:{coupon:action.payload,
            isEdit:true}
          }
        }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getShopDetails.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(getShopDetails.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shop=action.payload
      state.shopError=false
    })
    .addCase(getShopDetails.rejected,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=false
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(getAllProducts.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(getAllProducts.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shopProducts=action.payload
      state.shopError=false
    })
    .addCase(getAllProducts.rejected,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=false
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(getAllOrders.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(getAllOrders.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shopOrders=action.payload
      state.shopError=false
    })
    .addCase(getAllOrders.rejected,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=false
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(getAllCoupons.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(getAllCoupons.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shopCoupons=action.payload
      state.shopError=false
    })
    .addCase(getAllCoupons.rejected,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=false
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(createProduct.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(createProduct.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shopProducts=[action.payload,...state.shopProducts]
      state.shopError=false
    })
    .addCase(createProduct.rejected,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=false
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(updateProduct.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(updateProduct.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shopProducts=state.shopProducts.map((product)=>product._id === action.payload._id? action.payload : product)
      state.edit={product:{},isEdit:false}
      state.shopError=false
    })
    .addCase(updateProduct.rejected,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=false
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(orderUpdate.pending,(state,action)=>{
      state.shopLoading=true
      state.shopSucces=false
      state.shopError=false
    })
    .addCase(orderUpdate.fulfilled,(state,action)=>{
      state.shopLoading=false
      state.shopSucces=true
      state.shopOrders=state.shopOrders.map((order)=>order._id === action.payload._id? action.payload : order)
      state.shopError=false
    })
    .addCase(orderUpdate.rejected,(state,action)=>{
      state.shopLoading=false,
      state.shopSucces=false,
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(createCoupon.pending,(state,action)=>{
      state.shopLoading=true,
      state.shopSucces=false,
      state.shopError=false
    })
    .addCase(createCoupon.fulfilled,(state,action)=>{
      console.log(action.payload)
      state.shopLoading=false
      state.shopSucces=true
      state.shopCoupons=[action.payload,...state.shopCoupons]
      state.shopError=false
    })
    .addCase(createCoupon.rejected,(state,action)=>{
      state.shopLoading=false,
      state.shopSucces=false,
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
    .addCase(updateCoupon.pending,(state,action)=>{
      state.shopLoading=true,
      state.shopSucces=false,
      state.shopError=false
    })
    .addCase(updateCoupon.fulfilled,(state,action)=>{
      console.log(action.payload)
      state.shopLoading=false
      state.shopSucces=true
      state.shopCoupons=state.shopCoupons.map((coupon)=>coupon._id===action.payload._id?action.payload:coupon)
      state.edit={coupon:{},isEdit:false}
      state.shopError=false
    })
    .addCase(updateCoupon.rejected,(state,action)=>{
      state.shopLoading=false,
      state.shopSucces=false,
      state.shopError=true
      state.shopErrorMessage=action.payload
    })
  }
});

export const {editProduct,editCoupon} = ShopSlice.actions

export default ShopSlice.reducer


export const getShopDetails = createAsyncThunk('FETCH/SHOP/DETAILS', async (_,thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token
  try {

    return await shopServices.getShopDetails(token)
  } catch (error) {
    const message = error.response.data.message
    return thunkAPI.rejectWithValue(message)    
  }
})

export const getAllProducts = createAsyncThunk('FETCH/PRODUCTS', async(_,thunkAPI)=>{
  let shopId = thunkAPI.getState().shop.shop._id
  try {
    return await shopServices.getAllProducts(shopId)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const getAllOrders = createAsyncThunk('FETCH/ORDERS', async(_,thunkAPI)=>{
  const token = thunkAPI.getState().auth.user.token
  try {
    return await shopServices.getAllOrders(token)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const getAllCoupons = createAsyncThunk('FETCH/COUPONS', async(_,thunkAPI)=>{
  let shopId=JSON.parse(localStorage.getItem('shop'))._id
  try {
    return await shopServices.getAllCoupons(shopId)
  } catch (error) {
    let message = error.response.data.message
   return thunkAPI.rejectWithValue(message)
  }
})

export const createProduct = createAsyncThunk('CREATE/PRODUCT', async(formData,thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token
  try {
    return await shopServices.createProduct(formData,token)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateProduct = createAsyncThunk('UPDATE/PRODUCT', async(formData,thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token
  try {
    return await shopServices.updateProduct(formData,token)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const orderUpdate = createAsyncThunk('UPDATE/ORDER', async(orderDetails,thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token
  try {
    return await shopServices.orderUpdate(token,orderDetails)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const createCoupon = createAsyncThunk('CREATE/COUPON', async(couponDetails,thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token
  try {
    return await shopServices.createCoupon(token,couponDetails)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})

export const updateCoupon = createAsyncThunk('UPDATE/COUPON', async(couponDetails,thunkAPI)=>{
  let token = thunkAPI.getState().auth.user.token
  try {
    return await shopServices.UpdateCoupon(token,couponDetails)
  } catch (error) {
    let message = error.response.data.message
    return thunkAPI.rejectWithValue(message)
  }
})