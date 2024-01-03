import { createSlice } from "@reduxjs/toolkit";

import type { PayloadAction } from "@reduxjs/toolkit";
import { TypeProduct } from "@/interface";

interface wishListState {
  numberWishList: number;
  wishListArr: TypeProduct[];
  itemWishList?: TypeProduct;
}
const initialState: wishListState = {
  numberWishList: 0,
  wishListArr: [],
  itemWishList: undefined,
};
export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    getWishList: (state) => {
      return { ...state };
    },
    clearAllWishList: (state) => {
      state.wishListArr = [];
      state.numberWishList = 0;
    },
    AddToWishList: (state, action: PayloadAction<TypeProduct>) => {
      state.wishListArr.push(action.payload);
      state.numberWishList++;
    },
    deleteItemWishList: (state, action: PayloadAction<TypeProduct>) => {
      state.numberWishList--;
      state.wishListArr = state.wishListArr.filter(
        (item) => item._id !== action.payload._id
      );
    },
  },
});

export const {
  AddToWishList,
  deleteItemWishList,
  getWishList,
  clearAllWishList,
} = wishListSlice.actions;

export default wishListSlice.reducer;
