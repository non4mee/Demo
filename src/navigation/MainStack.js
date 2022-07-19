import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MainScreen from '../screens/MainScreen'
import SecondScreen from '../screens/SecondScreen'
import ThirdScreen from '../screens/ThirdScreen'

import { StackStyle } from './themes'

const Stack = createNativeStackNavigator()

function MainStack({ initialRouteName }) {
  return (
    <Stack.Navigator
      screenOptions={StackStyle}
      initialRouteName={initialRouteName}
    >
      <Stack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
        options={{ headerShown: false, headerBackVisible: true }}
      />
      <Stack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
        options={{ headerShown: false, headerBackVisible: true }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
