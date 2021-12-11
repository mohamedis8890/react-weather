import styled from "styled-components";
import Search from "./components/Search";
import Current from "./components/Current";

const Container = styled.div`
  display: flex;
  align-item: stretch;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Master = styled.div`
  flex: 1;
  padding: 15px;
`;

const Details = styled.div`
  flex: 3;
  background-color: #f6f6f8;
`;

const Title = styled.h2``;

function App() {
  return (
    <Container>
      <Master>
        <Search />
        <Current />
      </Master>
      <Details>
        <Title>Today's Highlights</Title>
      </Details>
    </Container>
  );
}

export default App;
