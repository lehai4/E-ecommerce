import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slice/cartSlice";
import wishListSlice from "../slice/wishListSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    wishList: wishListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
