import React, { useState } from "react";
import styled from "styled-components/macro";
import DayForecast from "./DayForecast";
import ThreeDayForecast from "./ThreeDayForecast";

const Container = styled.div`
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // flex-wrap: wrap;
  marign: auto;
  padding: 0 20px;
`;

const TabSwitch = styled.div``;

const Tabs = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Tab = styled.div`
  margin: 1em;
  font-size: 1.25em;
  font-weight: bold;
  color: ${(props) => (props.active ? "black" : "#9e9e9e")};
  border-bottom: ${(props) => (props.active ? "2px solid black" : "none")};
  cursor: pointer;

  transition: color 0.3s ease;
`;

const TabBody = styled.div`
  max-width: 67vw;
  display: flex;
`;

const Forecasts = ({ weatherData, displaySettings }) => {
  const [tab, setTab] = useState(1);

  return (
    <Container>
      <TabSwitch>
        <Tabs>
          <Tab onClick={() => setTab(1)} active={tab === 1 ? true : false}>
            24 Hours
          </Tab>
          <Tab onClick={() => setTab(2)} active={tab === 2 ? true : false}>
            3 Days
          </Tab>
        </Tabs>
        <TabBody>
          {tab === 1 ? (
            <DayForecast
              weatherData={weatherData}
              displaySettings={displaySettings}
            />
          ) : (
            <ThreeDayForecast
              weatherData={weatherData}
              displaySettings={displaySettings}
            />
          )}
        </TabBody>
      </TabSwitch>
    </Container>
  );
};

export default Forecasts;
