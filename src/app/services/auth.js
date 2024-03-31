import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath:"authApi",
    baseQuery:fetchBaseQuery({baseUrl:"https://identitytoolkit.googleapis.com/v1/"}),
    endpoints:(builder) => ({
        register:builder.mutation({
            query: (user) => ({
                url:"accounts:signUp?key=AIzaSyC_4Vjol5XpqNBG5Kbqxjqi35QSLcGbkj0",
                method:"POST",
                body:user
            })
        }),
        login: builder.mutation({
            query: (user) => ({
                url:"accounts:signInWithPassword?key=AIzaSyC_4Vjol5XpqNBG5Kbqxjqi35QSLcGbkj0",
                method:"POST",
                body:user
            })
        })
    })
})

export const {useRegisterMutation,useLoginMutation} = authApi