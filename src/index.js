import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigator from '@navigation';
import theme from '@src/theme';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <AppNavigator />
    </ThemeProvider>
  );
};

export default App;
