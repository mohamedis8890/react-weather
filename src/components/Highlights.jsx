import React from "react";
import styled from "styled-components";
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
    </Container>
  );
};

export default Highlights;
