import styled from "styled-components";

export const Container = styled.div`
  width: 200px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  margin: 10px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  position: relative;
`;

export const Title = styled.div`
  color: gray;
`;
export const Stat = styled.div`
  font-size: 2.5em;
  font-weight: 500;
  margin: 30px 0;
`;
export const StatUnit = styled.span`
  font-weight: 400;
  font-size: 0.5em;
`;
export const Comment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.3em;
`;
