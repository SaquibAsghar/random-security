import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: {
    rtripati: ["B001F001", "BOO1F002", "BOO3F003"],
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToPurchase: (state, action) => {
      const { username, featureId } = action.payload;
      if (!state.cartItems[username]) {
        state.cartItems[username] = [featureId];
        return state;
      }
      if (state.cartItems[username].includes(featureId)) {
        return state;
      }
      state.cartItems[username].push(featureId);
      return state;
    },
    removeFromPurchase: (state) => state.cartItems,
    resetToInitial: (state) => (state.cartItems = {}),
  },
});

export const selectCartList = (state) => state.cart.cartItems;

export const { addToPurchase, removeFromPurchase, resetToInitial } =
  cartSlice.actions;

export default cartSlice.reducer;
