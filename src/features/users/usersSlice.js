import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.users;
console.log(data.users);
console.log(initialState);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addFeature: function (state, action) {
      const { featureId, username } = action.payload;
      state.filter((user) => {
        if (user.username === username) {
          if (!user.productFeatures.includes(featureId)) {
            user.productFeatures.push(featureId);
          }
        }
        return user;
      });
    },
    addBulkFeatureFromCart: function (state, action) {
      const { username, purchasedItems } = action.payload;
      console.log(purchasedItems);
      state.forEach((user) => {
        if (user.username === username) {
          user.productFeatures = [
            ...new Set([...user.productFeatures, ...purchasedItems]),
          ];
        }
      });

      state;
    },
  },
});

export const selectUsersSelector = (state) => state.users;

export const selectGetOnlyUsername = (state) =>
  state.users.map((user) => user.username);

export const { addFeature, addBulkFeatureFromCart } = usersSlice.actions;

export default usersSlice.reducer;
