import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
   baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BACKEND_URL,
    credentials: 'include', // Include cookies in requests
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => ({
        url: "/user/register",
        method: "POST",
        body: user,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
     logout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
      }),
    }),
    verifyEmail: builder.mutation({
      query: (verificationData) => ({
        url: "/user/verify-email",
        method: "POST",
        body: verificationData,
      }),
    }),
    getUserProfile: builder.query({
      query: () => {
      
        return {
          url: "/user/getUserProfile",
          method: "GET",

        };
      },
    }),
    getVariation: builder.query({
      query: () => {
        return {
          url: 'productVariation/getVariations',
          method: "GET",
        };
      },
   
    }),
    getVariationByProduct: builder.query({
      query: (productId) => {
        return {
          url: `/colorVariation/getColorVariationsByProduct/${productId}`,
          method: "GET",
        };
      },
    }),

    updateUserProfile: builder.mutation({
      query: ({ userId, updatedData }) => ({
        url: `/user/update/${userId}`,
        method: "PUT",
        body: updatedData,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useVerifyEmailMutation,
  useGetUserProfileQuery,
  useGetVariationQuery,
  useUpdateUserProfileMutation,
  useLogoutMutation,
  useGetVariationByProductQuery,
} = userApi;
