import { createSlice, createSelector } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.products;
console.log(data.products);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

export const selectProductsSelector = (state) => {
  const { products } = state;
  console.log("product slice", products);
  return state.products;
};

export default productsSlice.reducer;
