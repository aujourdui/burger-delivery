import { createSlice } from "@reduxjs/toolkit";

export const changeCartSlice = createSlice({
  name: "changeCart",
  initialState: {
    item: [],
  },
  reducers: {
    addCart: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      state.item.push(action.payload);
    },
    deleteCart: (state: any, action) => {
      if (Number.isNaN(action.payload)) return;
      state.item = state.item.filter(
        (item: { id: any }) => item.id !== action.payload.id
      );
    },
  },
});

export const { addCart, deleteCart } = changeCartSlice.actions;

export default changeCartSlice.reducer;
