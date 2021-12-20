import React from "react";
import ForecastItem from "./ForecastItem";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;
  overflow: auto;
`;

const DayForecast = ({ weatherData, displaySettings }) => {
  return (
    <Container>
      {weatherData?.forecast?.forecastday[0]?.hour.map((item) => (
        <ForecastItem
          key={item.time}
          title={item.time}
          icon={item.condition.icon}
          minTemp=""
          maxTemp=""
          temp={
            displaySettings.tempratureUnit === "C" ? item.temp_c : item.temp_f
          }
        />
      ))}
    </Container>
  );
};

export default DayForecast;
