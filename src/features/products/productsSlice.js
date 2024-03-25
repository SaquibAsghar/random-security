import { createSlice, createSelector } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.products;

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});


export const selectProductsSelector = (state) => {
  const { products } = state;
  return state.products;
};

export default productsSlice.reducer;
