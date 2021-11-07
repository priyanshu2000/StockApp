import React, { useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';

import AppNavigator from '@navigation';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <>
      <AppNavigator />
    </>
  );
};

export default App;
