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
      />
      <Stack.Screen
        name="SecondScreen"
        component={SecondScreen}
      />
      <Stack.Screen
        name="ThirdScreen"
        component={ThirdScreen}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
