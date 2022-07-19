import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'

export default function MainScreen({ navigation }) {
  return (
    <ImageBackground
      source={require('../img/bg.png')}
      resizeMode="cover"
      style={styles.container}
    >
      <View>
        <Text style={styles.title}>CYBERSECURITY</Text>
        <Text style={styles.text1}>ESSENTIALS</Text>
        <Text style={styles.text2}>A guide for companies and individuals for implementing organizational cybersecurity practices.</Text>
      </View>
      <TouchableOpacity
        style={styles.area}
        onPress={() => navigation.navigate('SecondScreen')}
      >
        <Image
          source={require('../img/btn.png')}
          style={styles.btn}
          resizeMode="contain"
        />
      </TouchableOpacity>
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
    paddingHorizontal: 60,
    fontSize: 70,
    fontWeight: '500',
  },
  text1: {
    color: '#fff',
    paddingHorizontal: 60,
    paddingBottom: 60,
    fontSize: 70,
    fontWeight: '500'
  },
  text2: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'left',
    paddingHorizontal: 60,

  },
  btn: {
    width: '150%',
    height: '150%'
  },
  area: {
    width: 250,
    height: 50,
    marginBottom: 80,
    marginLeft: 30,
    justifyContent: 'flex-end',
  }
});
