import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import authServices from './AuthServices';

let userExist = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user:userExist || null,
    isLoading:false,
    isSuccess:false,
    isError:false,
    message:""
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

export const logoutUser = createAsyncThunk('AUTH/LOGOUT',async()=>{
  localStorage.removeItem('user')
})