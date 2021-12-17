import React from "react";
import styled from "styled-components";
import AirQuality from "./AirQuality";
import Humidity from "./Humidity";
import Sun from "./Sun";
import Visibility from "./Visibility";
import WindStatus from "./WindStatus";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  marign: 30px;
  padding: 0 20px;
`;

const Highlights = ({ weatherData, displaySettings }) => {
  return (
    <Container>
      <WindStatus
        windDirection={weatherData?.current?.wind_dir}
        windDegree={weatherData?.current?.wind_degree}
        windKph={weatherData?.current?.wind_kph}
        windMph={weatherData?.current?.wind_mph}
        unit={displaySettings.distanceUnit}
      />
      <Visibility
        visKm={weatherData?.current?.vis_km}
        visM={weatherData?.current?.vis_miles}
        unit={displaySettings.distanceUnit}
      />
      <Sun
        date={weatherData?.forecast?.forecastday[0]?.date}
        sunset={weatherData?.forecast?.forecastday[0]?.astro?.sunset}
        sunrise={weatherData?.forecast?.forecastday[0]?.astro?.sunrise}
      />
      <Humidity humidity={weatherData?.current?.humidity} />
      <AirQuality aqi={weatherData?.current?.air_quality["us-epa-index"]} />
    </Container>
  );
};

export default Highlights;
