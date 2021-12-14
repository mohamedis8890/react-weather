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

const Highlights = ({ weatherData }) => {
  return (
    <Container>
      <WindStatus
        windDirection={weatherData.current.wind_dir}
        windDegree={weatherData.current.wind_degree}
      />
      <Visibility />
    </Container>
  );
};

export default Highlights;
