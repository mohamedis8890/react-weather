import React from "react";
import styled from "styled-components";
import {createGlobalStyle} from "styled-components";

const Container = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  margin-top: 50px;
`;
const CompassRing = styled.div`
  height: 50px;
  width: 50px;
  border: 2px solid #f79f79;
  border-radius: 50%;
  position: relative;
`;
const Bezel = styled.div`
  margin: 3.333px;
  height: 40px;
  width: 40px;
  border: 2px dotted #e3f09b;
  border-radius: 50%;
  z-index: -100;
  position: absolute;
`;
const PointerContainer = styled.div`
  height: 40px;
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
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 15px solid sandybrown;
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
