import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <View>
      <Text>StockApp</Text>
    </View>
  );
};

export default App;
