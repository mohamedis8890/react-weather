import React from "react";

import {
  Container,
  Title,
  Stat,
  StatUnit,
  Comment,
} from "./common-styles/hilights.js";

const Visibility = ({ visKm, visM, unit }) => {
  let comment;
  switch (true) {
    case visKm < 1:
      comment = "Fog 😨";
      break;
    case visKm <= 2:
      comment = "Mist 🙄";
      break;
    case visKm <= 5:
      comment = "Haze 😟";
      break;
    case visKm > 5:
      comment = "Average 😊";
      break;

    default:
      comment = "Clear";
  }

  return (
    <Container>
      <Title>Visibility</Title>
      <Stat>
        {unit === "K" ? visKm : visM}
        <StatUnit>{unit === "K" ? "km" : "miles"}</StatUnit>
      </Stat>
      <Comment>{comment}</Comment>
    </Container>
  );
};

export default Visibility;
