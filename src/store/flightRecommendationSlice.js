import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	selectedOrigin: null,
	recommendedFlights: [],
	isLoading: false,
};

export const flightRecommendationSlice = createSlice({
	name: "flightRecommendation",
	initialState,
	reducers: {
		setIsLoading: (state, action) => {
			state.isLoading = action.payload;
		},
		selectOrigin: (state, action) => {
			state.selectedOrigin = action.payload;
		},
		setRecommendedFlights: (state, action) => {
			state.recommendedFlights = action.payload;
		},
	},
});

export const { selectOrigin, setRecommendedFlights, setIsLoading } =
	flightRecommendationSlice.actions;

export const submitSearch =
	(selectedOrigin = "") =>
	(dispatch) => {
		dispatch(setIsLoading(true));

		const iata_from = selectedOrigin?.split("-")[0]?.trim();
		axios.post("http://localhost:3333/", { iata_from }).catch((error) => {
			dispatch(setIsLoading(false));
			console.error("submitSearch error", error);
		});

		const connection = new WebSocket("ws://localhost:5000");
		connection.binaryType = "arraybuffer";

		connection.onopen = () => {
			console.log("Connected with server");
			connection.send("Hi, I am connected to you now hihi");
		};

		connection.onclose = () => {
			console.log("Connection ended.");
		};

		connection.onmessage = ({ data }) => {
			// converte o buffer que vem da fila em uma string
			const converter = new TextDecoder("utf-8");
			const convertedData = converter.decode(data);

			// converte a string em um objeto
			const data2obj = JSON.parse(convertedData);

			dispatch(setRecommendedFlights(data2obj));
			dispatch(setIsLoading(false));
		};
	};

export default flightRecommendationSlice.reducer;
