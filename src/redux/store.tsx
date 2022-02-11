import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import counterReducer from "./counterSlice";
import changeCartReducer from "./changeCartSlice";
import sumPriceReducer from "./sumPriceSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    changeCart: changeCartReducer,
    sumPrice: sumPriceReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
