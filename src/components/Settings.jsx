import React, {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  display: block,
  padding: 5px,
  padding-left: 20px,
`;

const Span = styled.div`
  broder: 1px solid #ccc;
  border-radius: 50%;
  width: 1.8em;
  height: 1.8em;
  overflow: hidden;
  line-height: 2em;
  text-align: center;
  vertical-align: middle;
  left: 0;
  top: 50%;
  margin: 0 8px;
  cursor: pointer;
  background-color: white;
  transition: all 0.5s ease;

  &:hover {
    background-color: #484848;
    color: white;
  }
`;

const Toggle = styled.input`
  display: none;
  &:checked + ${Span} {
    background: #1a1a1a;
    color: white;
  }
`;

const SettingsAlt = ({ setDisplaySettings, displaySettings }) => {
  const [selectedTemp, setSelectedTemp] = useState('C');
  const [selectedDist, setSelectedDist] = useState('K');

  const handleChangeTemp = temp => {
    setSelectedTemp(temp);
    setDisplaySettings({...displaySettings, tempratureUnit: temp})
  }

  const handleChangeDist = dist =>{
    setSelectedDist(dist);
    setDisplaySettings({...displaySettings, distanceUnit: dist});
  }

  return (
    <Container>
      <Label>
    <Toggle type="radio" name="temprature" checked={selectedTemp === 'C'} onChange={()=>handleChangeTemp('C')}/>
        <Span>℃</Span>
      </Label>
      <Label>
        <Toggle type="radio" name="temprature" checked={selectedTemp === 'F'} onChange={()=>handleChangeTemp('F')}/>
        <Span>℉</Span>
      </Label>

      <Label>
    <Toggle type="radio" name="distance" checked={selectedDist === 'K'} onChange={()=>handleChangeDist('K')}/>
        <Span>K</Span>
      </Label>
      <Label>
    <Toggle type="radio" name="distance" checked={selectedDist === 'M'} onChange={()=>handleChangeDist('M')} />
        <Span>M</Span>
      </Label>
    </Container>
  );
};

export default SettingsAlt;
