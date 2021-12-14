// Inspired by a CodePin by 'Marcus Sacco': https://codepen.io/marcussacco/pen/NAjZYo

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
  position: absolute;
`;
const PointerContainer = styled.div`
  height: 20px;
  z-index: -50;
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
  border-radius: 50%;
`;

const WindCompass = ({ windDegree }) => {
  return (
    <Container>
      <CompassRing>
        <Bezel>
          <PointerContainer degree={windDegree}>
            <Pointer />
          </PointerContainer>
        </Bezel>
      </CompassRing>
    </Container>
  );
};

export default WindCompass;
