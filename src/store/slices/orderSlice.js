import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BACKEND_URL }), // Adjust the base URL to your API
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: '/order/orders',
        method: 'POST',
        body: order,
      }),
    }),
    createPaymentSession: builder.mutation({
      query: (data) => ({
        url: '/order/payment',
        method: 'POST',
        body: data, // Send the entire data object
      }),
    }),
    getCategory: builder.query({
      query: () => "sales/getCategories",
      
    }),
    getOrderById: builder.query({
      query: (orderId) => `/order/getoneorder/${orderId}`, 
    }),
  }),
});

export const { useCreateOrderMutation ,useCreatePaymentSessionMutation,useGetCategoryQuery,useGetOrderByIdQuery} = orderApi;
