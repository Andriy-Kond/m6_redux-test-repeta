import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const storeValuesSlice = createSlice({
  name: "storeValues",
  initialState,
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement } = storeValuesSlice.actions;
export const storeValuesReducer = storeValuesSlice.reducer;

export const storeItemsSlice = createSlice({
  name: "storeItems",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },

    remove(state, action) {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const { add, remove } = storeItemsSlice.actions;
export const storeItemsReducer = storeItemsSlice.reducer;
