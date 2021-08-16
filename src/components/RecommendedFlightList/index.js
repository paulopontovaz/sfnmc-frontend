import RecommendedFlightListItem from "../RecommendedFlightListItem";
import "./styles.css";

const RecommendedFlights = ({ destinations = [] }) => {
	return (
		<div className="recommended-flight-list">
			<div className="recommended-flight-list-table-container">
				<table className="recommended-flight-list-table">
					<thead>
						<tr>
							<th>País</th>
							<th>
								Número de Casos
								<br />
								(de COVID-19)
							</th>
							<th>
								Taxa de Crescimento
								<br />
								(de COVID-19)
							</th>
							<th>Preço</th>
						</tr>
					</thead>
					<tbody>
						{destinations.map((destination) => (
							<RecommendedFlightListItem
								destination={destination}
							/>
						))}
					</tbody>
				</table>
			</div>
			<div className="recommended-flight-list-footer" />
		</div>
	);
};

export default RecommendedFlights;
