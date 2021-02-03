import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/MainScreen';
import ChatScreen from '../screens/ChatScreen';

const Stack = createStackNavigator();

const loginScreen = ({ navigation }) => {
  return (
    <LoginScreen />
  );
}
const chatScreen = ({ route, navigation }) => {
  return (
    <ChatScreen {...route.params} />
  );
}

function MainNavigator(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='login'
        component={loginScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name='chat'
        component={chatScreen}
        option={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigator;