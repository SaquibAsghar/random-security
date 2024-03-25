import { createSlice } from "@reduxjs/toolkit";
import data from "../../../data.json" assert { type: "json" };

const initialState = data.analytics;

const analyticsSlice = createSlice({
    name: 'analytics',
    initialState,
    reducers:{},
});

export const selectAnalyticsSelector = (state) => state.analytics;

export default analyticsSlice.reducer;