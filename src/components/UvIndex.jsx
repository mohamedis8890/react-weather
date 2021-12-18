import React, { useState, useEffect } from "react";
import ArcProgress from "react-arc-progress";
import styled from "styled-components";

import { Container, Title } from "./common-styles/hilights";

const UvComment = styled.div`
  position: absolute;
  top: 70%;
  font-size: 1.3em;
  padding-top: 0.5em;
  color: ${(props) => props.color};
`;

const UvIndex = ({ uvi }) => {
  const [uvIndex, setUvIndex] = useState(1);
  const [comment, setComment] = useState("");
  const [color, setColor] = useState("black");

  useEffect(() => {
    setUvIndex(parseInt(uvi));

    switch (true) {
      case uvi <= 2:
        setComment("Low");
        setColor("green");
        break;
      case uvi >= 3 && uvi <= 5:
        setComment("Moderate");
        setColor("#b0b300");
        break;
      case uvi >= 6 && uvi <= 7:
        setComment("High");
        setColor("orange");
        break;
      case uvi >= 8 && uvi <= 10:
        setComment("Very High");
        setColor("red");
        break;
      case uvi >= 11:
        setComment("Extreme");
        setColor("violet");
        break;

      default:
        setComment("");
        break;
    }
  }, [uvi]);

  return (
    <Container>
      <Title>UV Index</Title>
      <ArcProgress
        progress={uvIndex / 12}
        text={uvIndex.toString()}
        arcStart={180}
        arcEnd={360}
        thickness={10}
        fillThickness={25}
        lineCap="square"
        fillColor="#ffde4a"
        textStyle={{ size: "2.5em", font: "Spartan" }}
      />
      <UvComment color={color}>{comment}</UvComment>
    </Container>
  );
};

export default UvIndex;
