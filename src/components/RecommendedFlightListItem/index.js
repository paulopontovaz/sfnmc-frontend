import "./styles.css";

const RecommendedFlightListItem = ({
	destination: {
		countryCode,
		country_name,
		cases,
		contamination_rate,
		price,
		currency,
		flag_link,
	},
}) => (
	<tr key={countryCode} className="recommended-flight-list-item">
		<td>
			<img src={flag_link} alt={`${countryCode} flag`} />
			<p>{country_name}</p>
		</td>
		<td>{cases}</td>
		<td
			className={
				contamination_rate > 0
					? "green"
					: contamination_rate < 0
					? "red"
					: ""
			}
		>
			{contamination_rate > 0
				? `+${contamination_rate}`
				: contamination_rate}
		</td>
		<td>{`${price} ${currency.toUpperCase()}`}</td>
	</tr>
);

export default RecommendedFlightListItem;
