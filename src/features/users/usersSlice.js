import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.users;
console.log(initialState);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addFeature: (state) => {
      console.log(state);
      return state;
      // state.users.productFeatures.push("saquib");
    },
  },
});

export const selectUsersSelector = (state) => state.users;

export const { addFeature } = usersSlice.actions;

export default usersSlice.reducer;
