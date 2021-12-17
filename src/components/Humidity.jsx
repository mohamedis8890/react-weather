import React from "react";
import styled from "styled-components";
import Scale from "../utils/Scale";
import {
  Container,
  Title,
  Stat,
  StatUnit,
  Comment,
} from "./common-styles/hilights";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Humidity = ({ humidity }) => {
  const getHumidityComment = () => {
    switch (true) {
      case humidity >= 70:
        return "Poor High 😰";
      case humidity < 70 && humidity >= 60:
        return "Fair 😥";
      case humidity < 60 && humidity >= 30:
        return "Healthy 👍";
      case humidity < 30 && humidity >= 25:
        return "Fair 😥";
      case humidity < 25:
        return "Poor Low 😰";
      default:
        return "";
    }
  };

  return (
    <Container>
      <Title>Humidity</Title>
      <Wrapper>
        <Stat>
          {humidity}
          <StatUnit>%</StatUnit>
        </Stat>
        <Scale percentage={humidity} />
      </Wrapper>
      <Comment>{getHumidityComment()}</Comment>
    </Container>
  );
};

export default Humidity;
