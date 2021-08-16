import { useEffect, useState } from "react";
import AppHeader from "../AppHeader";
import OriginSelector from "../OriginSelector";
import RecommendedFlightList from "../RecommendedFlightList";
import "./styles.css";

const connection = new WebSocket("ws://localhost:5000");
connection.binaryType = "arraybuffer";

const App = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    connection.onopen = () => {
      console.log("Connected with server");
      connection.send("Hi, I am connected to you now hihi");
    };

    connection.onclose = () => {
      console.log("Connection ended.");
    };

    connection.onmessage = ({ data }) => {
      let tempDestinations = [];

      // converte o buffer que vem da fila em uma string
      const converter = new TextDecoder("utf-8");
      const convertedData = converter.decode(data);

      // converte a string em um objeto
      const data2obj = JSON.parse(convertedData);

      destinations.forEach((destination) => {
        tempDestinations.push(destination);
      });

      const index = tempDestinations.findIndex((element) => {
        return element.countryCode === data2obj.countryCode;
      });

      console.log("index", index);

      if (index === -1) {
        tempDestinations.push(data2obj);
      } else {
        tempDestinations[index] = data2obj;
      }

      setDestinations(tempDestinations);
      console.log("at finish", destinations);
    };
  }, [destinations]);

  return (
    <div className="app">
      <AppHeader />
      <OriginSelector />
      <RecommendedFlightList destinationsArray={destinations} />
    </div>
  );
};

export default App;
