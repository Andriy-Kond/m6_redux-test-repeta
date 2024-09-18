import { createAction } from "@reduxjs/toolkit";

export const increment = createAction("storeValues/increment");
export const decrement = createAction("storeValues/decrement");
export const incrementByAmount = createAction("storeValues/incrementByAmount");

export const add = createAction("items/add");
export const remove = createAction("items/remove");
