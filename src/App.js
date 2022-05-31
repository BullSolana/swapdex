import { ThemeProvider } from 'styled-components';
import GlobalStyle from './Global.style';
import theme from './theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import WebApp from './pages/WebApp';
import Swap from './components/Swap';
import { ColorSpan } from './components/components';

function App() {
  const ComingSoon = () => (
    <>
      <h1>
        Coming soon<ColorSpan>...</ColorSpan>
      </h1>
    </>
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="app" element={<WebApp />}>
            <Route path="trading" element={<ComingSoon />} />
            {/* <Route index element={<Swap />} /> */}
            <Route path="swap" element={<Swap />} />
            <Route path="liquidity" element={<ComingSoon />} />
            <Route path="pools" element={<ComingSoon />} />
            <Route path="farms" element={<ComingSoon />} />
            <Route path="staking" element={<ComingSoon />} />
            <Route path="nfts" element={<ComingSoon />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
