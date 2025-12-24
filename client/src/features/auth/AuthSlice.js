import { createSlice } from '@reduxjs/toolkit'

const initialState = {
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

  }
});

export const {} = AuthSlice.actions

export default AuthSlice.reducer