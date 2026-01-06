import {configureStore} from '@reduxjs/toolkit';
import auth from './auth/AuthSlice';
import admin from './admin/AdminSlice'
import shop from './shop/ShopSlice'

const store = configureStore({
    reducer:{auth,admin,shop}
})

export default store