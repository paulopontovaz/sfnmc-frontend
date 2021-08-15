import AppHeader from "../AppHeader";
import OriginSelector from "../OriginSelector";
import RecommendedFlightList from "../RecommendedFlightList";
import "./styles.css";

const App = () => {
	return (
		<div className="app">
			<AppHeader />
			<OriginSelector />
			<RecommendedFlightList />
		</div>
	);
};

export default App;
