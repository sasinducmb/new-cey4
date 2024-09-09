import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from './slices/product-slice';
import currencyReducer from "./slices/currency-slice";
import cartReducer from "./slices/cart-slice";
import compareReducer from "./slices/compare-slice";
import wishlistReducer from "./slices/wishlist-slice";
import { orderApi } from './slices/orderSlice'; // Import the orderApi
import { userApi } from './slices/user-slice';

const persistConfig = {
    key: "flone",
    version: 1.1,
    storage,
    blacklist: ["product", orderApi.reducerPath] // Blacklist orderApi if needed
}

export const rootReducer = combineReducers({
    product: productReducer,
    currency: currencyReducer,
    cart: cartReducer,
    compare: compareReducer,
    wishlist: wishlistReducer,
    [orderApi.reducerPath]: orderApi.reducer, 
    [userApi.reducerPath]: userApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(orderApi.middleware, userApi.middleware), // Add the orderApi middleware
});

export const persistor = persistStore(store);
