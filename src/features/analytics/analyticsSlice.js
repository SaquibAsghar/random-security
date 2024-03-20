import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.analytics;
// console.log(data.analytics)

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers:{},
});

// export const {} = analyticsSlice.actions;

export const selectAnalyticsSelector = (state) => state.analytics;

export default analyticsSlice.reducer;