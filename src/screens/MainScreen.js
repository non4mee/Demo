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
        <Text style={styles.text2}>A guide for companies and individuals for implementing organizationalcybersecurity practices.</Text>
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
