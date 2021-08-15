import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedOrigin: null,
	recommendedFlights: [],
};

export const flightRecommendationSlice = createSlice({
	name: "flightRecommendation",
	initialState,
	reducers: {
		selectOrigin: (state, action) => {
			state.selectedOrigin = action.payload;
		},
		setRecommendedFlights: (state, action) => {
			state.selectedOrigin = action.payload;
		},
	},
});

export const { selectOrigin, setRecommendedFlights } =
	flightRecommendationSlice.actions;

export default flightRecommendationSlice.reducer;
