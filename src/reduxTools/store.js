import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "reduxTools/reducers";

export const store = configureStore({
  reducer: rootReducer,
});
