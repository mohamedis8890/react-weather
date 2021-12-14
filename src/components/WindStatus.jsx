import React from "react";
import WindCompass from "./WindCompass";
import {
  Container,
  Title,
  Stat,
  StatUnit,
  Comment,
} from "./common-styles/hilights.js";

const WindStatus = ({ windDirection, windDegree }) => {
  return (
    <Container>
      <Title>Wind Status</Title>
      <Stat>
        7.70
        <StatUnit>km/h</StatUnit>
      </Stat>
      <Comment>
        <WindCompass windDegree={windDegree} />
        {windDirection}
      </Comment>
    </Container>
  );
};

export default WindStatus;
