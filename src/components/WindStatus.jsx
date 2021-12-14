import React from "react";
import styled from "styled-components";
import WindCompass from "./WindCompass";

const Container = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  z-index: -200;
`;

const Title = styled.div`
  color: gray;
`;
const Stat = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  margin: 30px 0;
`;
const StatUnit = styled.span`
  font-weight: 400;
  font-size: 0.5em;
`;
const Comment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const WindStatus = ({windDirection, windDegree}) => {
  return (
    <Container>
      <Title>Wind Status</Title>
      <Stat>
        7.70
        <StatUnit>km/h</StatUnit>
      </Stat>
      <Comment>
        <WindCompass 
        windDegree={windDegree} />
        {windDirection} 
      </Comment>
    </Container>
  );
};

export default WindStatus;
