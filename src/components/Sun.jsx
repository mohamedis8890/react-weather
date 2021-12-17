import React from "react";
import styled from "styled-components";
import { Container, Title } from "./common-styles/hilights";
import useDate from "../utils/useDate";

import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

const Wrapper = styled.div`
  font-size: 1.1em;
  font-weight: 500;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Suntime = styled.div`
  flex: 1;
  height: 50%;
  display: flex;
  align-items: center;
`;

const SunComment = styled.div`
  font-size: 1.3em;
  display: flex;
  flex-direction: column;
`;

const TimeSpan = styled.div`
  color: gray;
  font-size: 0.7em;
`;

const Sun = ({ sunset, sunrise, date }) => {
  const current = useDate();

  const getRemainingTime = (time) => {
    const timeAsDateTime = new Date(`${date} ${time}`);
    const currentDateTime = current;

    const timeDiff = (timeAsDateTime - currentDateTime) / 1000 / 60 / 60; // Time difference in hours
    const hourDiff = Math.trunc(timeDiff); // Take the integer part as hours
    const minDiff = Math.round((timeDiff % 1) * 60); // Take the fractional part as minutes

    const remainingTime =
      hourDiff < 0 || minDiff < 0
        ? `- ${Math.abs(hourDiff)}h ${Math.abs(minDiff)}m`
        : `+ ${hourDiff}h ${minDiff}m`;

    return remainingTime; // If the difference is negative the minus sign is in front of hours only
  };

  return (
    <Container>
      <Title>Sunset & Sunrise</Title>
      <Wrapper>
        <Suntime>
          <BsFillArrowUpCircleFill
            color="#ffde4a"
            style={{ height: "40px", width: "40px", paddingRight: "20px" }}
          />
          <SunComment>
            {sunrise}
            <TimeSpan>{getRemainingTime(sunrise)}</TimeSpan>
          </SunComment>
        </Suntime>
        <Suntime>
          <BsFillArrowDownCircleFill
            color="#ffde4a"
            style={{ height: "40px", width: "40px", paddingRight: "20px" }}
          />
          <SunComment>
            {sunset}
            <TimeSpan>{getRemainingTime(sunset)}</TimeSpan>
          </SunComment>
        </Suntime>
      </Wrapper>
    </Container>
  );
};

export default Sun;
