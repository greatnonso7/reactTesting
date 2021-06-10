import React from 'react';

import 'react-native-gesture-handler';
import AppNavigation from './navigations';

if (!__DEV__) {
  console.log = () => null;
}

const App = () => {
  return <AppNavigation />;
};

export default App;
