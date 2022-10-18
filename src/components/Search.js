import React, { useState } from "react";
import SearchResults from "./SearchResults";
import axios from "axios";

export default function Search(props) {
  let [searchResults, setSearchResults] = useState(null);
  let [keyword, setKeyword] = useState(props.defaultKeyword);

  function handleTheResponse(response) {
    setSearchResults(response.data);
    console.log(response.data);
  }

  function handleSearchClick(e) {
    e.preventDefault();
    searched();
  }

  function input(event) {
    setKeyword(event.target.value);
  }

  function searched() {
    let apiLink = `https:/www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`;
    axios.get(apiLink).then(handleTheResponse);
  }

  return (
    <div className="m-5 pt-5">
      <h1 className="searchTitle">Search for Your Drink</h1>
      <form onSubmit={handleSearchClick}>
        <input
          type="text"
          defaultValue={props.defaultKeyword}
          onChange={input}
          className="m-2"
        />
        <input type="submit" placeholder="Search" />
      </form>
      <SearchResults searchResults={searchResults} />
    </div>
  );
}
