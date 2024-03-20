import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.users;
console.log(initialState);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsersSelector = (state) => state.users;

// export const {} = usersSlice.actions

export default usersSlice.reducer;
