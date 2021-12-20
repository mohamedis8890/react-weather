import React from "react";
import styled from "styled-components";
import ForecastItem from "./ForecastItem";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const ThreeDayForecast = ({ weatherData, displaySettings }) => {
  return (
    <Container>
      {weatherData?.forecast?.forecastday?.map((item) => (
        <ForecastItem
          key={item.date}
          title={item.date}
          icon={item.day.condition.icon}
          minTemp={
            displaySettings.tempratureUnit === "C"
              ? item.day.mintemp_c
              : item.day.mintemp_f
          }
          maxTemp={
            displaySettings.tempratureUnit === "C"
              ? item.day.maxtemp_c
              : item.day.maxtemp_f
          }
          temp=""
        />
      ))}
    </Container>
  );
};

export default ThreeDayForecast;
