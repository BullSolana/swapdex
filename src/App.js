import { ThemeProvider } from 'styled-components';
import LandingPage from './components/LandingPage';
import GlobalStyle, { PrimaryContainer } from './Global.style';
import theme from './theme';
import imgURL from './assets/photo/landing.png';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PrimaryContainer bgImg={imgURL}>
        <Header />
        <LandingPage />
      </PrimaryContainer>
    </ThemeProvider>
  );
}

export default App;
