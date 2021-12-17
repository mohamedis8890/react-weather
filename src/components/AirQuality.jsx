import React from "react";
import styled from "styled-components";

import { Container, Title, Stat, Comment } from "./common-styles/hilights";
import Scale from "../utils/Scale";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const AirQuality = ({ aqi }) => {
  const getAqiComment = () => {
    switch (aqi) {
      case 1:
        return "Good 👍";
      case 2:
        return "Moderate 🤙";
      case 3:
        return "Unhealthy for some 🤞";
      case 4:
        return "Unhealthy 🤧";
      case 5:
        return "Very Unhealthy 🤢";
      case 6:
        return "Hazardous 🧟";
      default:
        return "";
    }
  };
  return (
    <Container>
      <Title>Air Quality</Title>
      <Wrapper>
        <Stat>{aqi}</Stat>
        <Scale percentage={(aqi * 100) / 6} />
      </Wrapper>
      <Comment>{getAqiComment()}</Comment>
    </Container>
  );
};

export default AirQuality;
