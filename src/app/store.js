import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import counterReducer from '../features/counter/counterSlice'
import cartReducer from '../features/cart/cartSlice'

import { profileApi } from './services/profile'
import authSlice from '../features/auth/authSlice'


export const store = configureStore({
    reducer: {

        counter:counterReducer,
        cart:cartReducer,
        auth:authSlice,
        [profileApi.reducerPath]: profileApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(profileApi.middleware),

  })

  setupListeners(store.dispatch)