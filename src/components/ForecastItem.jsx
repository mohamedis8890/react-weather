import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 120px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 5px 5px;
  border-radius: 15px;
  background-color: white;
  padding: 10px;
`;

const Title = styled.div`
  text-align: center;
  font-weight: 500;
`;

const Image = styled.img`
  height: 100px;
  width: 100px;
`;

const Temp = styled.div``;
const TempMin = styled.div`
  color: #9e9e9e;
`;

const ImageWrapper = styled.div`
  // margin: 1em 0;
`;
const Temprature = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.3em;
  font-weight: 500;
`;

const ForecastItem = ({ title, icon, minTemp, maxTemp, temp }) => {
  return (
    <Container>
      <Title>{title.substr(title.indexOf(" ") + 1)}</Title>
      <ImageWrapper>
        <Image src={icon} />
      </ImageWrapper>
      <Temprature>
        {temp !== "" ? (
          <Temp>{temp}°</Temp>
        ) : (
          <>
            <Temp>{maxTemp}°</Temp>
            <TempMin>{minTemp}°</TempMin>
          </>
        )}
      </Temprature>
    </Container>
  );
};

export default ForecastItem;
