import { Platform } from 'react-native'
import platform, { opacify } from './platform'
import { DefaultTheme } from '@react-navigation/native'

export const StackStyle = {
  headerTitleAlign: 'center',
  title: '',
  headerTitle: '',
  headerTintColor: platform.brandLight,
  headerBackTitleVisible: false,
  gesturesEnabled: false,
  headerForceInset: Platform.OS === 'ios' ? true : undefined,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: platform.defaultBackgroundColor
  },
  headerTitleStyle: {
    color: platform.brandLight,
    fontSize: 16,
    fontFamily: platform.fontSemiBold
  }
}

export const TabsStyle = {
  tabBarHideOnKeyboard: true,
  headerShown: false
}

export const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: platform.defaultBackgroundColor
  }
}
