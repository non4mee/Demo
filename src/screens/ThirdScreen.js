import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

export default function ThirdScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../img/bg.png')}
      resizeMode="cover"
      style={styles.container}
    >
  
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    color: '#fff',
    paddingTop: 70,
    paddingHorizontal: 30
  },
  text1: {
    color: '#fff',
    paddingHorizontal: 30,
    paddingBottom: 30
  },
  text2: {
    color: '#fff',
    paddingHorizontal: 30
  },
  btn: {
    width: '80%',
    height: '80%'
  },
  area: {
    width: 250,
    height: 50,
    marginBottom: 50,
    marginLeft: 30,
    justifyContent: 'flex-end',
  }
});
