import {configureStore} from '@reduxjs/toolkit';
import auth from './auth/AuthSlice';
import admin from './admin/AdminSlice'
import shop from './shop/ShopSlice'
import cart from './Cart/CartSlice'
import chat from '../features/ChatSlice'

const store = configureStore({
    reducer:{auth,admin,shop,cart,chat}
})

export default store