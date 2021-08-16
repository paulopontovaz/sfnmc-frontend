import "./styles.css";

const RecommendedFlights = ({ destinationsArray }) => {
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
            {/* {
						"destinationIata":"MIA",
						"price":"1931.86",
						"currency":"BRL",
						"countryCode":"US",
						"cases":33625419,
						"contamination_rate":0.0001,
						"country_name":"USA",
						"flag_link":"https://www.countryflags.io/US/flat/64.png"} 
						*/}
            {destinationsArray &&
              destinationsArray.map(
                ({
                  countryCode,
                  country_name,
                  cases,
                  contamination_rate,
                  price,
                  currency,
                  flag_link,
                }) => (
                  <tr key={countryCode}>
                    <td
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <img
                        src={flag_link}
                        alt={`${countryCode} flag`}
                        width={45}
                        height={45}
                      />
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
