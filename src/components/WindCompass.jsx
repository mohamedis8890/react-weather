import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30px;
  height: 30px;
  margin: 10px;
`;
const CompassRing = styled.div`
  height: 30px;
  width: 30px;
  border: 1px solid lightgray;
  border-radius: 50%;
  position: relative;
`;
const Bezel = styled.div`
  margin: 3.333px;
  height: 20px;
  width: 20px;
  border: 2px dotted #e3f09b;
  border-radius: 50%;
  z-index: -100;
  position: absolute;
`;
const PointerContainer = styled.div`
  height: 20px;
  z-index: -50;
  -webkit-transform: rotate(121deg);
  -webkit-transform-origin: bottom;
  transform: rotate(${(props) => props.degree}deg);
  transform-origin: center;
`;
const Pointer = styled.div`
  margin: 0 auto;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 15px solid darkblue;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
`;
const Direction = styled.div`
  height: 100%;
  width: 100%;
  top: -70%;
  left: 20%;
  font-size: 2em;
  font-family: sans-serif;
  color: white;
  position: relative;
  z-index: 100;
`;

const WindCompass = ({ windDegree }) => {
  return (
    <Container>
      <CompassRing>
        <Bezel>
          <PointerContainer degree={windDegree}>
            <Pointer />
          </PointerContainer>
          <Direction />
        </Bezel>
      </CompassRing>
    </Container>
  );
};

export default WindCompass;
