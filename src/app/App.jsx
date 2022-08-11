import { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Menu, Navbar } from '../components';
import { darkTheme, lightTheme } from '../utils/Theme';

// Styles
const Container = styled.div`
  display: flex;
`;

const Main = styled.div`
  flex: 7;
  background-color: ${({ theme }) => theme.bg};
  transition: 0.5s;
`;
const Wrapper = styled.div``;

function App() {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('themeColor') === null
      ? 'darkTheme'
      : localStorage.getItem('themeColor')
  );

  // Save current theme to local storage
  useEffect(() => {
    localStorage.setItem('themeColor', themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider theme={themeMode === 'lightTheme' ? lightTheme : darkTheme}>
      <Container>
        {/* Sidebar  */}
        <Menu themeMode={themeMode} setThemeMode={setThemeMode} />
        {/* Main section */}
        <Main>
          <Navbar />
          <Wrapper>Video Cards</Wrapper>
        </Main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
