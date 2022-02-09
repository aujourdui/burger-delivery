import { createSlice } from "@reduxjs/toolkit";

export const changeCartSlice = createSlice({
  name: "changeCart",
  initialState: {
    count: 0,
  },
  reducers: {
    additional: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count += action.payload;
    },
    subtraction: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count -= action.payload;
    },
  },
});

export const { additional, subtraction } = changeCartSlice.actions;

export default changeCartSlice.reducer;
