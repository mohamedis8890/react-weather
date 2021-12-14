import styled from "styled-components";
import Search from "./components/Search";
import Current from "./components/Current";
import Settings from "./components/Settings";
import Highlights from "./components/Highlights";

import { baseURL, fetchData } from "./utils/fetchAPI";

import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
  align-item: stretch;
  justify-content: center;
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

  const fetchWeather = async (weatherLocation) => {
    const result = await fetchData(
      `${baseURL}/current.json?q=${weatherLocation}`
    );
    console.log(result);
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
      </Master>
      <Details>
        <Header>
          <Title>Today's Highlights</Title>
          <Settings
            setDisplaySettings={setDisplaySettings}
            displaySettings={displaySettings}
          />
        </Header>

        <Highlights weatherData={weatherData} />
      </Details>
    </Container>
  );
}

export default App;
