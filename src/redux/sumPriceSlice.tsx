import { createSlice } from "@reduxjs/toolkit";

export const sumPriceSlice = createSlice({
  name: "sumPrice",
  initialState: {
    price: 0,
  },
  reducers: {
    sumPrice: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.price += action.payload;
    },
  },
});

export const { sumPrice } = sumPriceSlice.actions;

export default sumPriceSlice.reducer;
