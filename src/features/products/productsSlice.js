import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.products;
console.log(data.products);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

// export const {} = productsSlice.actions;

export const selectProductsSelector = (state) => state.products;

export default productsSlice.reducer;
