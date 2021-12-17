import React from "react";
import styled from "styled-components";
import { AiOutlineCloud } from "react-icons/ai";
import { BsCloudRain } from "react-icons/bs";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
`;

const ConditionIcon = styled.div``;
const Image = styled.img`
  max-width: 300px;
  height: 300px;
`;
const Temprature = styled.div`
  font-size: 4.2em;
`;
const DateTime = styled.div`
  font-size: 1.4em;
  margin: 30px 0;
`;
const CuurentDay = styled.span`
  font-weight: 500;
`;
const CurrentTime = styled.span`
  color: gray;
`;
const ConditionText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
const Rain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
`;
const BR = styled.div`
  height: 0px;
  width: 100%;
  border: 1px solid ghostwhite;
`;

const Current = ({ weatherData, displaySettings }) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(weatherData?.location?.localtime);
  const currentDay = days[d.getDay()];

  return (
    <Container>
      <ConditionIcon>
        <Image
          src={weatherData?.current?.condition?.icon}
          alt="Condition Icon"
        />
      </ConditionIcon>
      <Temprature>
        {displaySettings.tempratureUnit === "C" ? (
          <>
            {weatherData?.current?.temp_c} <sup>℃</sup>
          </>
        ) : (
          <>
            {weatherData?.current?.temp_f} <sup>℉</sup>
          </>
        )}
      </Temprature>
      <DateTime>
        <CuurentDay>{currentDay}, </CuurentDay>
        <CurrentTime>
          {d.toLocaleTimeString("en-us", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}
        </CurrentTime>
      </DateTime>
      <BR />
      <ConditionText>
        <AiOutlineCloud style={{ color: "lightgray", fontSize: "1.8em" }} />
        <span style={{ padding: "0 5px" }}>
          {weatherData?.current?.condition?.text}
        </span>
      </ConditionText>
      <Rain>
        <BsCloudRain style={{ color: "darkblue", fontSize: "1.5em" }} />
        <span style={{ padding: "0 5px" }}>Rain</span>
        {weatherData?.forecast?.forecastday[0]?.day.daily_chance_of_rain} %
      </Rain>
    </Container>
  );
};

export default Current;
