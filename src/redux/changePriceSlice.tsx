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
  },
});

export const { sumPrice, editPrice } = changePriceSlice.actions;

export default changePriceSlice.reducer;
