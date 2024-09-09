import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: '/user/register',
        method: 'POST',
        body: user,
      }),
    }),
    login: builder.mutation({
        query: (credentials) => ({
          url: '/user/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      verifyEmail: builder.mutation({
        query: (verificationData) => ({
          url: '/user/verify-email',
          method: 'POST',
          body: verificationData,
        }),
      }),
  }),
});

export const { useRegisterUserMutation,useLoginMutation,useVerifyEmailMutation} = userApi;