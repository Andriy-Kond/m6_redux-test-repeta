import { createAction, createReducer } from "@reduxjs/toolkit";

const increment = createAction("counter/increment");
const decrement = createAction("counter/decrement");
const incrementByAmount = createAction("counter/incrementByAmount");

const initialState = { value: 0 };

// Старий спосіб - "Map Object" Notation
const counterReducer = createReducer(initialState, {
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
const counterReducerBuilder = createReducer(initialState, builder => {
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
});

export default counterReducer;
