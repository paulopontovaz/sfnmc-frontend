import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRecommendedFlights } from "../../store/flightRecommendationSlice";
import AppHeader from "../AppHeader";
import OriginSelector from "../OriginSelector";
import RecommendedFlightList from "../RecommendedFlightList";
import "./styles.css";

const connection = new WebSocket("ws://localhost:5000");
connection.binaryType = "arraybuffer";

const App = () => {
	const dispatch = useDispatch();
	const recommendedFlights = useSelector((state) => state.recommendedFlights);

	useEffect(() => {
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
		};
	}, [dispatch]);

	return (
		<div className="app">
			<AppHeader />
			<OriginSelector />
			<RecommendedFlightList destinations={recommendedFlights} />
		</div>
	);
};

export default App;
