import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authServices from './AuthServices';

let userExist = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:userExist || null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:"",
    products:[],
    order:[],
    shops:[],
    singleProduct:{},
    singleShop:{},
    shopStatus:false
    
}

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(registerUser.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(registerUser.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.user=action.payload,
      state.isError=false
    })
    .addCase(registerUser.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(loginUser.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(loginUser.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.user=action.payload,
      state.isError=false
    })
    .addCase(loginUser.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(logoutUser.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.isError=false,
      state.user=null
    })
    .addCase(getUsersOrder.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.order=action.payload,
      state.isError=false
    })
    .addCase(getUsersOrder.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(getUsersOrder.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(cancelOrder.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.order=state.order.map((order)=>order._id===action.payload._id ? action.payload : order),
      state.isError=false
    })
    .addCase(cancelOrder.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(cancelOrder.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(requestForShop.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.shopStatus=true
      state.isError=false
    })
    .addCase(requestForShop.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(requestForShop.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(getAllProduct.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.products=action.payload
      state.isError=false
    })
    .addCase(getAllProduct.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(getAllProduct.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(getSingleProduct.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.singleProduct=action.payload
      state.isError=false
    })
    .addCase(getSingleProduct.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(getSingleProduct.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(getAllShops.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.shops=action.payload
      state.isError=false
    })
    .addCase(getAllShops.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(getAllShops.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
    .addCase(getSingleShop.fulfilled,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=true,
      state.singleShop=action.payload
      state.isError=false
    })
    .addCase(getSingleShop.rejected,(state,action)=>{
      state.isLoading=false,
      state.isSuccess=false,
      state.isError=true,
      state.message=action.payload
    })
    .addCase(getSingleShop.pending,(state,action)=>{
      state.isLoading=true,
      state.isSuccess=false,
      state.isError=false
    })
  }
});

export const {} = AuthSlice.actions

export default AuthSlice.reducer

// register user
export const registerUser = createAsyncThunk("AUTH/REGISTER", async(formData,thunkAPI)=>{
  try {
    return await authServices.register(formData)
  } catch (error) {
   let message = error.response.data.message
   return thunkAPI.rejectWithValue(message)
  }
})

// login user
export const loginUser = createAsyncThunk("AUTH/LOGIN", async(formData,thunkAPI)=>{
  try {
    return await authServices.login(formData)
  } catch (error) {
   let message = error.response.data.message
   return thunkAPI.rejectWithValue(message)
  }
})

// User's order
export const getUsersOrder = createAsyncThunk("AUTH/USER/ORDERS", async(_,thunkAPI)=>{
  let token = JSON.parse(localStorage.getItem('user')).token
  try {
    return await authServices.getUsersOrder(token)
  } catch (error) {
   let message = error.response.data.message
   return thunkAPI.rejectWithValue(message)
  }
})

export const logoutUser = createAsyncThunk('AUTH/LOGOUT',async()=>{
  localStorage.removeItem('user')
  localStorage.removeItem('shop')
})

export const cancelOrder = createAsyncThunk('CANCEL/ORDER/USER',async(orderDetail ,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token
    
    try {
        return await authServices.cancelOrder(orderDetail,token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const requestForShop = createAsyncThunk('REAQUEST/SHOP',async(shopDetails ,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token
    
    try {
        return await authServices.requestForShop(shopDetails,token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const getAllProduct = createAsyncThunk('FETCH/PRODUCT',async(_ ,thunkAPI)=>{
    
    try {
        return await authServices.getAllProducts()
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const getSingleProduct = createAsyncThunk('FETCH/SINGLE/PRODUCT',async(pid,thunkAPI)=>{
    
    try {
        return await authServices.getProduct(pid)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const getAllShops = createAsyncThunk('FETCH/SHOPS',async(_ ,thunkAPI)=>{
    
    try {
        return await authServices.getAllShops()
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const getSingleShop = createAsyncThunk('FETCH/SINGLE/SHOP',async(sid ,thunkAPI)=>{
    
    try {
        return await authServices.getSingleShop(sid)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})