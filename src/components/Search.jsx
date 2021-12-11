import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { MdLocationSearching } from "react-icons/md";

import { fetchData, baseURL } from "../utils/fetchAPI";
import { getClientIp } from "../utils/getIP";

const SearchContainer = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 1.2em;
  border: none;
  margin: 0 10px;
`;

const ResultItem = styled.div`
  background-color: #c3c5c8;
  border: 1px solid white;
  padding: 5px;
  cursor: pointer;
  transition: all 0.5s ease;

  :hover {
    background-color: #363341;
    color: white;
  }
`;

const SearchInputContainer = styled.div`
  height: 2.5em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const locationSearchIconStyles = {
  backgroundColor: "#f6f6f8",
  height: "1.8em",
  width: "1.8em",
  padding: "3px",
  borderRadius: "50%",
  cursor: "pointer",
};

const searchIconStyles = {
  height: "1.8em",
  width: "1.8em",
  padding: "3px",
  borderRadius: "50%",
};

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherLocation, setWeatherLocation] = useState("Aswan, Aswan, Egypt");

  useEffect(() => {
    const fetchCurrentWeather = async () => {
      const result = await fetchData(
        `${baseURL}/current.json?q=${weatherLocation}`
      );
      console.log(result);
    };
    fetchCurrentWeather();
  }, [weatherLocation]);

  const autoComplete = async (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (searchTerm !== "") {
      const results = await fetchData(`${baseURL}/search.json?q=${searchTerm}`);
      setSearchResults(results);
    }
  };

  const getCurrentWeatherByLocation = async () => {
    const ip = await getClientIp();
    getCurrentWeather(ip);
  };

  const getCurrentWeather = (location) => {
    setSearchResults([]);
    setWeatherLocation(location);
    console.log(location);
  };

  return (
    <SearchContainer>
      <SearchInputContainer>
        <RiSearchLine style={searchIconStyles} />
        <Input
          onChange={(e) => autoComplete(e)}
          placeholder="Search for places..."
          value={searchTerm}
        />
        <MdLocationSearching
          onClick={getCurrentWeatherByLocation}
          style={locationSearchIconStyles}
        />
      </SearchInputContainer>
      {searchResults.length > 0 &&
        searchResults.map((result) => (
          <ResultItem
            key={result.id}
            onClick={() => getCurrentWeather(result.name)}
          >
            {result.name}
          </ResultItem>
        ))}
    </SearchContainer>
  );
};

export default Search;
