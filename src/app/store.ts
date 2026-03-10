import { combineSlices, configureStore } from "@reduxjs/toolkit";

import { cartSlice } from "@/features/cart/cartSlice";

const rootReducer = combineSlices(cartSlice);

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
