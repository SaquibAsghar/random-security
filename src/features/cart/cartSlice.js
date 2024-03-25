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
  productId: [],
  lastRemovedFeatureFromCart: null,
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
        state[productId] = featureToPurchase;

        return state;
      }
      if (!state.cartItems[username][featuresId]) {
        state.cartItems[username][featuresId] = {
          price,
          featureToPurchase: featureToPurchase,
        };
      }

      if (!state[productId]) {
        state[productId] = featureToPurchase;
        return state;
      }
      let prevState = state[productId];
      state[productId] = [...new Set([...prevState, ...featureToPurchase])];
      return state;
    },
    completePurchase: (state) => state,
    removeFromPurchase: (state, action) => {
      const { username, featureId, productId } = action.payload;
      console.log(featureId);
      state.lastRemovedFeatureFromCart = featureId;
      if (!state.cartItems[username][featureId]) {
        return state;
      }
      state[productId] = state[productId].filter(
        (feature) => feature !== featureId
      );
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

export const selectGetLastRemovedFeature = (state) =>
  state.cart.lastRemovedFeatureFromCart;

export const {
  addToPurchase,
  removeFromPurchase,
  resetToInitial,
  completePurchase,
} = cartSlice.actions;

export default cartSlice.reducer;
