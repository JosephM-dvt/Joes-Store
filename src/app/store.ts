import { combineReducers, configureStore } from "@reduxjs/toolkit";

import cartReducer from "@/features/cart/cartSlice";
import { productsApi } from "@/services/productsApi";

const rootReducer = combineReducers({
  cart: cartReducer,
  [productsApi.reducerPath]: productsApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
