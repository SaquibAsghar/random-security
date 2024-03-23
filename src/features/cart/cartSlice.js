import { createSlice } from "@reduxjs/toolkit";

/*
  cartItems: {
    rtripati: ["B001F001", "BOO1F002", "BOO3F003"],
    username: {
      product: {
        featureID: {
          list: [],
          pricing: 80,
        },
      },
    },
  },

*/

const initialState = {
  cartItems: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToPurchase: (state, action) => {
      const { username, featureId, cart } = action.payload;
      const {
        price,
        productId,
        featureId: featuresId,
        featureToPurchase,
      } = cart;
      console.log(cart);

      if (!state.cartItems[username]) {
        state.cartItems[username] = {
          [featuresId]: {
            price,
            featureToPurchase: featureToPurchase,
          },
        };

        return state;
      }
      if (!state.cartItems[username][featuresId]) {
        state.cartItems[username][featuresId] = {
          price,
          featureToPurchase: featureToPurchase,
        };
      }
      return state;
    },
    completePurchase: (state) => state,
    removeFromPurchase: (state, action) => {
      const { username, featureId } = action.payload;
      console.log(featureId);
      delete state.cartItems[username][featureId];
      // state.cartItems[username] = state.cartItems[username].filter(
      //   (purchaseItem) => purchaseItem !== cart
      // );
      return state;
    },
    resetToInitial: (state, action) => {
      const { username } = action.payload;
      delete state.cartItems[username];
      return state;
    },
  },
});

export const selectCartList = (state) => state.cart.cartItems;

export const {
  addToPurchase,
  removeFromPurchase,
  resetToInitial,
  completePurchase,
} = cartSlice.actions;

export default cartSlice.reducer;
