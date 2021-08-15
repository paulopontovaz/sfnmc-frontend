import AppHeader from "../AppHeader";
import OriginSelector from "../OriginSelector";
import RecommendedFlightList from "../RecommendedFlightList";

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
