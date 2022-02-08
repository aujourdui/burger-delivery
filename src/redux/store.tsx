import { configureStore } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import counterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
