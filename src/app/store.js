import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productsSlice";
import analyticsReducer from "../features/analytics/analyticsSlice";
import usersReducer from "../features/users/usersSlice";
import cartReducer from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    analytics: analyticsReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

// export default store;
