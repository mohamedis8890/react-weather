import styled from "styled-components";
import Search from "./components/Search";
import Current from "./components/Current";
import Settings from "./components/Settings";
import Highlights from "./components/Highlights";

import { baseURL, fetchData } from "./utils/fetchAPI";

import { useEffect, useState } from "react";
import Forecasts from "./components/Forecasts";
import Photo from "./components/Photo";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  width: 100vw;
`;

const Master = styled.div`
  flex: 1;
  padding: 15px;
`;

const Details = styled.div`
  flex: 3;
  background-color: #f6f6f8;
`;

const Title = styled.h2``;

const Header = styled.div`
  padding: 30px 30px;
  display: flex;
  justify-content: space-between;
`;

function App() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState("");

  const fetchWeather = async (weatherLocation) => {
    const result = await fetchData(
      `${baseURL}/forecast.json?q=${weatherLocation}&days=3&aqi=yes`
    );
    console.log(result);
    setLocation(`${result.location.name}, ${result.location.country}`);
    setWeatherData(result);
  };

  const [displaySettings, setDisplaySettings] = useState({
    tempratureUnit: "C",
    distanceUnit: "K",
  });

  useEffect(() => {
    const fetchAtStartup = async () => await fetchWeather("Aswan");
    fetchAtStartup();
  }, []);

  return (
    <Container>
      <Master>
        <Search fetchWeather={fetchWeather} />
        <Current weatherData={weatherData} displaySettings={displaySettings} />
        <Photo location={location} />
      </Master>
      <Details>
        <Header>
          <Title>Today's Highlights</Title>
          <Settings
            setDisplaySettings={setDisplaySettings}
            displaySettings={displaySettings}
          />
        </Header>

        <Highlights
          weatherData={weatherData}
          displaySettings={displaySettings}
        />

        <Header>
          <Title>Forecasts</Title>
        </Header>
        <Forecasts
          weatherData={weatherData}
          displaySettings={displaySettings}
        />
      </Details>
    </Container>
  );
}

export default App;
