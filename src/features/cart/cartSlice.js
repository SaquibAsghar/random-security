import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToPurchase: (state, action) => {
      const { username, featureId } = action.payload;
      if (
        state.cartItems[username] &&
        !state.cartItems[username].includes(featureId)
      ) {
        state.cartItems[username].push(featureId);
        return state;
      }
      state.cartItems[username] = [featureId];
    },
    removeFromPurchase: (state) => state.cartItems,
    resetToInitial: (state) => (state.cartItems = {}),
  },
});

export const selectPurchase = (state) => state;

export const { addToPurchase, removeFromPurchase, resetToInitial } =
  cartSlice.actions;

export default cartSlice.reducer;
