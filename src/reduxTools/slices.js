import { createSlice } from "@reduxjs/toolkit";

const storeInitialState = { value: 0 };

export const storeValuesSlice = createSlice({
  name: "storeValues",
  initialState: storeInitialState,
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
  initialState: [
    { id: 1, a: 5 },
    { id: 2, a: 20 },
    { id: 3, a: 50 },
  ],
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

export const signInSlice = createSlice({
  name: "signIn",

  initialState: {
    user: {
      userName: "",
      loginDate: "",
      isLoggedIn: false,
    },
  },

  reducers: {
    logIn: {
      reducer(state, action) {
        state.user = action.payload;
      },
      prepare(userName, loginDate) {
        return {
          payload: {
            userName,
            loginDate,
            isLoggedIn: true,
          },
        };
      },
    },

    logOut(state) {
      state.user = {
        userName: "",
        loginDate: "",
        isLoggedIn: false,
      };
    },
  },
});

export const { logIn, logOut } = signInSlice.actions;
export const signInReducer = signInSlice.reducer;
