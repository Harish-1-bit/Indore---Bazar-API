import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartServices from './CartServices';

const initialState = {
    cart : {},
    coupon:null,
    orderData:null,
    cartLoading:false,
    cartSuccess:false,
    cartError:false,
    cartMessage:''
}

const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    emptyCoupon:(state,action)=>{
        return{
            ...state,
            coupon:null
        }
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(getCart.pending,(state,action)=>{
        state.cartLoading=true
        state.cartSuccess=false
        state.cartError=false
    })
    .addCase(getCart.fulfilled,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=true
        state.cart = action.payload
        state.cartError=false
    })
    .addCase(getCart.rejected,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=false
        state.cartError=true
        state.cartMessage = action.payload
    })
    .addCase(removeFromCart.pending,(state,action)=>{
        state.cartLoading=true
        state.cartSuccess=false
        state.cartError=false
    })
    .addCase(removeFromCart.fulfilled,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=true
        state.cart = action.payload
        state.cartError=false
    })
    .addCase(removeFromCart.rejected,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=false
        state.cartError=true
        state.cartMessage = action.payload
    })
    .addCase(applyCoupon.pending,(state,action)=>{
        state.cartLoading=true
        state.cartSuccess=false
        state.cartError=false
    })
    .addCase(applyCoupon.fulfilled,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=true
        state.coupon = action.payload
        state.cartError=false
    })
    .addCase(applyCoupon.rejected,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=false
        state.cartError=true
        state.cartMessage = action.payload
    })
    .addCase(placeOrder.pending,(state,action)=>{
        state.cartLoading=true
        state.cartSuccess=false
        state.cartError=false
    })
    .addCase(placeOrder.fulfilled,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=true
        state.orderData = action.payload
        state.cartError=false
    })
    .addCase(placeOrder.rejected,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=false
        state.cartError=true
        state.cartMessage = action.payload
    })
    .addCase(updateCart.pending,(state,action)=>{
        state.cartLoading=true
        state.cartSuccess=false
        state.cartError=false
    })
    .addCase(updateCart.fulfilled,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=true
        state.cart = action.payload
        state.cartError=false
    })
    .addCase(updateCart.rejected,(state,action)=>{
        state.cartLoading=false
        state.cartSuccess=false
        state.cartError=true
        state.cartMessage = action.payload
    })
  }
});

export const {emptyCoupon} = CartSlice.actions

export default CartSlice.reducer

export const addToCart = createAsyncThunk('ADD/CART',async(cartDetails,thunkAPI)=>{
    const token = thunkAPI.getState().auth.user.token
    try {
        return await cartServices.addToCart(token,cartDetails)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateCart = createAsyncThunk('UPDATE/CART',async(cartDetail,thunkAPI)=>{
    const token = thunkAPI.getState().auth.user.token
    try {
        return await cartServices.updateCart(token,cartDetail)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const getCart = createAsyncThunk('GET/CART',async (_,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await cartServices.getCart(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const removeFromCart = createAsyncThunk('REMOVE/CART',async (id,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await cartServices.removeFromCart(token,id)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const applyCoupon = createAsyncThunk('APPLY/COUPON',async (couponDetails,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await cartServices.applyCoupon(token,couponDetails)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

export const placeOrder = createAsyncThunk('CREATE/ORDER',async (couponCode,thunkAPI) => {
    const token = thunkAPI.getState().auth.user.token
    try {
        return await cartServices.placeOrder(token,{couponCode:couponCode})
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})