import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import MainNavigator from './src/navigation/MainNavigator';

export default function App(props) {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}