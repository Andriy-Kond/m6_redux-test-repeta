import { createReducer } from "@reduxjs/toolkit";
import {
  add,
  decrement,
  increment,
  incrementByAmount,
  remove,
} from "./actions";

const initialState = { value: 0 };

// Старий спосіб - "Map Object" Notation
export const storeValuesReducer = createReducer(initialState, {
  // Замість цього:
  // "counter/increment": (state, action) => { ...
  // Можна використовувати обчислювану властивість об'єкту (приводиться до toString і повертає рядок "counter/increment")
  [increment]: (state, action) => {
    state.value += action.payload;
  },
  [decrement]: (state, action) => {
    state.value -= action.payload;
  },
});

// новий спосіб - "Builder Callback" Notation
export const storeValuesReducerBuilder = createReducer(
  initialState,
  builder => {
    builder
      .addCase(increment, (state, action) => {
        state.value++;
      })
      .addCase(decrement, (state, action) => {
        state.value--;
      })
      .addCase(incrementByAmount, (state, action) => {
        state.value += action.payload;
      });
  },
);

export const itemsReducer = createReducer([], {
  [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action) => state.filter(item => item.id !== action.payload),
});
