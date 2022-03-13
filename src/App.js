import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {Home, PromoPage} from './pages';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <Home /> */}
      <PromoPage />
    </ThemeProvider>
  );
};

export default App;
