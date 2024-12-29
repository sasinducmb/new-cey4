import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./slices/product-slice";
import currencyReducer from "./slices/currency-slice";
import cartReducer from "./slices/cart-slice";
import compareReducer from "./slices/compare-slice";
import wishlistReducer from "./slices/wishlist-slice";
import { orderApi } from "./slices/orderSlice"; // Import orderApi
import { userApi } from "./slices/user-slice"; // Import userApi

// Persist configuration
const persistConfig = {
  key: "flone",
  version: 1.1,
  storage,
  blacklist: ["product", orderApi.reducerPath, userApi.reducerPath], // Exclude these reducers from persistence
};

// Combine reducers
const rootReducer = combineReducers({
  product: productReducer,
  currency: currencyReducer,
  cart: cartReducer,
  compare: compareReducer,
  wishlist: wishlistReducer,
  [orderApi.reducerPath]: orderApi.reducer, // Include orderApi reducer
  [userApi.reducerPath]: userApi.reducer, // Include userApi reducer
});

// Persist the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Avoid issues with non-serializable data in middleware
    }).concat(orderApi.middleware, userApi.middleware), // Add middleware for RTK Query APIs
});

// Persistor for persisted store
export const persistor = persistStore(store);
