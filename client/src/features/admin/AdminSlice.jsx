import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import adminService from './adminServices';

const initialState = {
    adminLoading:false,
    adminSuccess:false,
    adminError:false,
    adminErrorMessage:false,
    allUsers:[],
    allOrders:[],
    allShops:[],
}

const AdminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers:(builder)=>{
    builder
    .addCase(getAllUsers.pending,(state,action)=>{
    state.adminLoading=true,
    state.adminSuccess=false,
    state.adminError=false
    })
    .addCase(getAllUsers.fulfilled,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=true,
    state.allUsers=action.payload
    state.adminError=false
    })
    .addCase(getAllUsers.rejected,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=false,
    state.adminError=true
    })
    .addCase(getAllShops.pending,(state,action)=>{
    state.adminLoading=true,
    state.adminSuccess=false,
    state.adminError=false
    })
    .addCase(getAllShops.fulfilled,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=true,
    state.allShops=action.payload
    state.adminError=false
    })
    .addCase(getAllShops.rejected,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=false,
    state.adminError=true,
    state.adminErrorMessage=action.payload
    })
    .addCase(getAllOrders.pending,(state,action)=>{
    state.adminLoading=true,
    state.adminSuccess=false,
    state.adminError=false
    })
    .addCase(getAllOrders.fulfilled,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=true,
    state.allOrders=action.payload
    state.adminError=false
    })
    .addCase(getAllOrders.rejected,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=false,
    state.adminError=true,
    state.adminErrorMessage=action.payload
    })
    .addCase(updateShop.pending,(state,action)=>{
    state.adminLoading=true,
    state.adminSuccess=false,
    state.adminError=false
    })
    .addCase(updateShop.fulfilled,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=true,
    state.allShops=state.allShops.map((shop)=>{
       return shop._id===action.payload._id? action.payload:shop
    })
    state.adminError=false
    })
    .addCase(updateShop.rejected,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=false,
    state.adminError=true,
    state.adminErrorMessage=action.payload
    })
    .addCase(UpdateUser.pending,(state,action)=>{
    state.adminLoading=true,
    state.adminSuccess=false,
    state.adminError=false
    })
    .addCase(UpdateUser.fulfilled,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=true,
    state.allUsers=state.allUsers.map((user)=>{
       return user._id===action.payload._id? action.payload : user
    })
    state.adminError=false
    })
    .addCase(UpdateUser.rejected,(state,action)=>{
    state.adminLoading=false,
    state.adminSuccess=false,
    state.adminError=true,
    state.adminErrorMessage=action.payload
    })
  }
});

export const {} = AdminSlice.actions

export default AdminSlice.reducer

export const getAllUsers = createAsyncThunk('FETCH/ADMIN/USER',async(_,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token

try {
    return await adminService.getAllUsers(token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const getAllShops = createAsyncThunk('FETCH/ADMIN/SHOP',async(_,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token

try {
    return await adminService.getAllShops(token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const getAllOrders = createAsyncThunk('FETCH/ADMIN/ORDER',async(_,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token

try {
    return await adminService.getAllOrders(token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const updateShop = createAsyncThunk('UPDATE/ADMIN/SHOP',async(shopDetails ,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token
    
    try {
        return await adminService.updateShop(shopDetails,token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})

export const UpdateUser = createAsyncThunk('UPDATE/ADMIN/USER',async(userDetails ,thunkAPI)=>{

    let token = thunkAPI.getState().auth.user.token
    
    try {
        return await adminService.UpdateUser(userDetails,token)
} catch (error) {
    let message = error.respone.data.message
    return thunkAPI.rejectWithValue(message)
}
})