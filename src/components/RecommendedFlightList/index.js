import "./styles.css";

const mockData = [
	{
		id: 1,
		country: "Germany",
		cases: 500000,
		growth: -3.5,
		price: 3000,
		currency: "USD",
	},
	{
		id: 2,
		country: "Brazil",
		cases: 500000,
		growth: 3.5,
		price: 2000,
		currency: "USD",
	},
	{
		id: 3,
		country: "United States",
		cases: 1000000,
		growth: -3.5,
		price: 3000,
		currency: "USD",
	},
	{
		id: 4,
		country: "Germany",
		cases: 500000,
		growth: -3.5,
		price: 3000,
		currency: "USD",
	},
	{
		id: 5,
		country: "Brazil",
		cases: 500000,
		growth: 3.5,
		price: 2000,
		currency: "USD",
	},
	{
		id: 6,
		country: "United States",
		cases: 1000000,
		growth: -3.5,
		price: 3000,
		currency: "USD",
	},
];

const RecommendedFlights = () => {
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
						{mockData.map(
							({
								id,
								country,
								cases,
								growth,
								price,
								currency,
							}) => (
								<tr key={id}>
									<td>{country}</td>
									<td>{cases}</td>
									<td
										className={
											growth > 0
												? "green"
												: growth < 0
												? "red"
												: ""
										}
									>
										{growth > 0 ? `+${growth}` : growth}
									</td>
									<td>{`${price} ${currency.toUpperCase()}`}</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
			<div className="recommended-flight-list-footer"></div>
		</div>
	);
};

export default RecommendedFlights;
