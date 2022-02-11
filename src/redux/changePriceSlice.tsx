import { createSlice } from "@reduxjs/toolkit";

export const changePriceSlice = createSlice({
  name: "changePrice",
  initialState: {
    price: 0,
  },
  reducers: {
    sumPrice: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.price += action.payload;
    },
    editPrice: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.price -= action.payload;
    },
    resetPrice: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.price = 0;
    },
  },
});

export const { sumPrice, editPrice, resetPrice } = changePriceSlice.actions;

export default changePriceSlice.reducer;
