import React, { useState } from "react";
import Results from "./Results";
import "../styling/Randomizer.css";
import axios from "axios";

export default function Randomizer() {
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
    console.log(response.data);
  }

  function random() {
    let apiUrl =
      "https://www.thecocktaildb.com/api/json/v1/1/random.php/images/media/drink/vrwquq1478252802.jpg/preview";
    axios.get(apiUrl).then(handleResponse);
  }

  function handleClick(event) {
    event.preventDefault();
    random();
  }

  return (
    <div>
      <button className="randomizerBtn" onClick={handleClick}>
        Select my Drink
      </button>
      <Results results={results} />
    </div>
  );
}
