import {configureStore} from '@reduxjs/toolkit';
import auth from './auth/AuthSlice';
import admin from './admin/AdminSlice'

const store = configureStore({
    reducer:{auth,admin}
})

export default store