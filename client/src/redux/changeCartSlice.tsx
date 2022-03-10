import { createSlice } from "@reduxjs/toolkit";
export const changeCartSlice = createSlice({
  name: "changeCart",
  initialState: {
    item: [],
  },
  reducers: {
    addCart: (state, action) => {
      if (Number.isNaN(action.payload)) return;
      const isItemInCart = state.item.find(
        (prod) => prod.id === action.payload.id
      );
      if (isItemInCart) {
        state.item = state.item.map((prod) =>
          prod.id === action.payload.id
            ? { ...prod, quantity: prod.quantity + 1 }
            : prod
        );
      } else {
        state.item = [...state.item, { ...action.payload, quantity: 1 }];
      }
    },
    deleteCart: (state: any, action) => {
      if (Number.isNaN(action.payload)) return;
      state.item = state.item.filter(
        (item: { id: any }) => item.id !== action.payload.id
      );
    },
    deleteAllCart: (state: any, action) => {
      if (Number.isNaN(action.payload)) return;
      state.item = [];
    },
  },
});
export const { addCart, deleteCart, deleteAllCart } = changeCartSlice.actions;
export default changeCartSlice.reducer;
