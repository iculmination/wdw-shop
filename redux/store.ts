import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart.slice";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
