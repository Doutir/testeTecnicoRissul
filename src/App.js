import React from 'react';
import {ThemeProvider} from 'styled-components';
import {theme} from './styles/theme';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AppProvider} from './store';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppProvider>
          <Routes />
        </AppProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
