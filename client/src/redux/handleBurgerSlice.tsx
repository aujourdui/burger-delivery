import { createSlice } from "@reduxjs/toolkit";

export const handleBurgerSlice = createSlice({
  name: "handleBurger",
  initialState: {
    burgers: [],
  },
  reducers: {
    getBurgers: (state, action) => {
      return {
        ...state,
        burgers: action.payload,
      };
    },
    // getBurgers: (state, action) => {
    //   if (Number.isNaN(action.payload)) return;
    //   state.burgers += action.payload;
    // },
  },
});
export const { getBurgers } = handleBurgerSlice.actions;
export default handleBurgerSlice.reducer;
