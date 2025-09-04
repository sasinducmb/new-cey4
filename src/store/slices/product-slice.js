import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the async thunk for fetching products
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
    const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/client/products`);
    return response.data;
});

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null,
    },
    reducers: {
        setProducts(state, action) {
            state.products = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
