import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }), // Adjust the base URL to your API
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
  }),
});

export const { useCreateOrderMutation ,useCreatePaymentSessionMutation} = orderApi;
