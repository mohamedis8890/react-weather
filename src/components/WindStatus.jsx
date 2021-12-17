import React from "react";
import WindCompass from "./WindCompass";
import {
  Container,
  Title,
  Stat,
  StatUnit,
  Comment,
} from "./common-styles/hilights.js";

const WindStatus = ({ windDirection, windDegree, windKph, windMph, unit }) => {
  return (
    <Container>
      <Title>Wind Status</Title>
      <Stat>
        {unit === "K" ? windKph : windMph}{" "}
        <StatUnit>{unit === "K" ? "km/h" : "mph"}</StatUnit>
      </Stat>
      <Comment>
        <WindCompass windDegree={windDegree} />
        {windDirection}
      </Comment>
    </Container>
  );
};

export default WindStatus;
