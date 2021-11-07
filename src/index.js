import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { configureAxios } from '@config/axiosConifg';

import AppNavigator from '@navigation';
import theme from '@src/theme';

const App = () => {
  configureAxios();

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <AppNavigator />
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;
