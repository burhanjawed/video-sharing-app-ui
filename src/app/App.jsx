import styled from 'styled-components';
import { Menu, Navbar } from '../components';

// Styles
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
`;
const Wrapper = styled.div``;

function App() {
  return (
    <Container>
      {/* Sidebar  */}
      <Menu />
      {/* Main section */}
      <Main>
        <Navbar />
        <Wrapper>Video Cards</Wrapper>
      </Main>
    </Container>
  );
}

export default App;
