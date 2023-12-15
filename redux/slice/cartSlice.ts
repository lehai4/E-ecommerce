import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeProduct } from "@/interface";

interface CartState {
  numberCart: number;
  cartArr: TypeProduct[];
  itemCart?: TypeProduct;
}
const initialState: CartState = {
  numberCart: 0,
  cartArr: [],
  itemCart: undefined,
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    getCart: (state) => {
      return { ...state };
    },
    clearAllCart: (state) => {
      state.cartArr = [];
      state.numberCart = 0;
    },
    AddToCart: (state, action: PayloadAction<TypeProduct>) => {
      if (state.numberCart === 0) {
        state.cartArr.push(action.payload);
      } else {
        let check = false;
        state.cartArr.map((item) => {
          if (item._id === action.payload._id) {
            let _quantityCur = item.quantity + action.payload.quantity;
            item.quantity = _quantityCur;
            check = true;
          }
        });
        if (!check) {
          let _cartNew = action.payload;
          state.cartArr.push(_cartNew);
        }
      }
      state.numberCart++;
    },
    updateCart: (state, action: PayloadAction<number>) => {},
    deleteItemCart: (state, action: PayloadAction<TypeProduct>) => {
      state.numberCart--;
      state.cartArr = state.cartArr.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const { AddToCart, updateCart, deleteItemCart, getCart, clearAllCart } =
  cartSlice.actions;

export default cartSlice.reducer;
