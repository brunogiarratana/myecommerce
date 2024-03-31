import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'
import { shopApi } from './services/shop'
import { profileApi } from './services/profile'
import { authApi } from './services/auth'
import { ordersApi } from './services/orders'
import authSlice from '../features/auth/authSlice'


export const store = configureStore({
    reducer: {

        counter:counterReducer,
        cart:cartReducer,
        auth:authSlice,
        [profileApi.reducerPath]: profileApi.reducer,
        [shopApi.reducerPath]: shopApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware,shopApi.middleware,authApi.middleware,ordersApi.middleware),

  })

  setupListeners(store.dispatch)