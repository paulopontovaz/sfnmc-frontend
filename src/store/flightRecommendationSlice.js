import { getWebSocketConnection } from "../utils";
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
    const connection = getWebSocketConnection();

    connection.onopen = () => {
      console.log("connection.onopen");
      connection.send(iata_from);
    };

    connection.onerror = (error) => {
      console.log("connection.onerror", error);
      dispatch(setIsLoading(false));
    };

    connection.onclose = () => {
      console.log("connection.onclose");
      dispatch(setIsLoading(false));
    };

    connection.onmessage = ({ data }) => {
      // converte o buffer que vem da fila em uma string
      const converter = new TextDecoder("utf-8");
      const convertedData = converter.decode(data);

      // converte a string em um objeto
      const data2obj = JSON.parse(convertedData);
      console.log(data2obj);
      dispatch(setRecommendedFlights(data2obj));
      dispatch(setIsLoading(false));
    };
  };

export default flightRecommendationSlice.reducer;
