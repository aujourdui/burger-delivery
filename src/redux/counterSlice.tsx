import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    addCount: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count += action.payload;
    },
    editCount: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.count -= action.payload;
    },
  },
});

export const { addCount, editCount } = counterSlice.actions;

export default counterSlice.reducer;
