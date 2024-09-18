import { configureStore } from "@reduxjs/toolkit";
import { storeItemsReducer, storeValuesReducer } from "./slices";
// import { counterReducer, itemsReducer } from "reduxTools/reducers";

export const store = configureStore({
  reducer: {
    storeValues: storeValuesReducer,
    storeItems: storeItemsReducer,
  },
});
