import React from "react";
import styled from "styled-components";

const ScaleBoarder = styled.div`
  border: 1px solid gray;
  border-radius: 1em;
  height: 100%;
  width: 2em;
  position: relative;
`;

const ScalePoint = styled.div`
  position: absolute;
  border: 1px solid darkblue;
  background-color: darkblue;
  height: 1.2em;
  width: 1.2em;
  border-radius: 50%;
  top: ${(props) => 85 - parseInt(props.top)}%;
  left: 15%;
`;

const Scale = ({ percentage }) => {
  return (
    <>
      <ScaleBoarder>
        <ScalePoint top={percentage} />
      </ScaleBoarder>
    </>
  );
};

export default Scale;
