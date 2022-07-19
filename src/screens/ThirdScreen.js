import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import Video from 'react-native-video';
import Sound from 'react-native-sound';

import Slider from './Slider';

Sound.setCategory('Playback');

import useInterval from '../hooks/useInterval';

const sound = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  // console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
});

export default function ThirdScreen({ navigation }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundValue, setSoundValue] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);
  const onPressPlay = () => {
    if (isPlaying) {
      sound.pause();
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      sound.play((success) => {
        if (success) {
          setIsPlaying(false);
        } else {
          setIsPlaying(false);
          sound.stop();
          setCurrentValue(0);
        }
      });
    }
  }
  const onPressPrev = () => {
    navigation.goBack()
  }
  const onPressNext = () => {
    navigation.navigate('ThirdScreen')
  }
  const slidingStart = () => {
    sound.pause();
  }
  const slidingComplete = (value) => {
    setIsPlaying(false);
    sound.setCurrentTime(value);
    setCurrentValue(value);
    onPressPlay();
  }
  return (
    <View style={styles.container}>

      <Image style={styles.overlay} source={require('../img/overlay.png')} />
      <Text style={styles.title}>[Ending Screen]</Text>
      <View style={styles.footer}>
        <Image source={require('../img/panel.png')} style={styles.panel} />
        <TouchableOpacity style={styles.btn} onPress={onPressPrev}>
          <Image source={require('../img/prev.png')} style={styles.btnIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={onPressPlay}>
          <Image
            source={isPlaying ? require('../img/pause.png') : require('../img/play.png')}
            style={styles.btnIcon}
          />
        </TouchableOpacity>
        <View style={styles.progressBar}>
          <Image style={styles.progress} source={require('../img/progress.png')} />
          {!!soundValue && (
            <View style={styles.scrubberCol}>

            </View>
          )}
        </View>
        <TouchableOpacity style={styles.btn} onPress={onPressNext}>
          <Image source={require('../img/next.png')} style={styles.btnIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 60,
    color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    zIndex: 1,
    paddingBottom: 400
  },
  text: {
    fontSize: 40,
    position: 'absolute',
    color: '#fff',
    fontWeight: '600',
    alignSelf: 'center',
    zIndex: 1,
    textAlign: 'center'
  },
  video: {
    height: '100%'
  },
  overlay: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  footer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  panel: {
    position: 'absolute',
    width: '100%',
    height: 44,
    borderRadius: 10
  },
  btn: {
    width: 36,
    height: 36,
    marginHorizontal: 5
  },
  btnIcon: {
    width: 36,
    height: 36
  },
  progressBar: {
    width: 500,
    height: 13,
    marginHorizontal: 5,
    marginRight: 20
  },
  progress: {
    width: '100%',
    height: '100%'
  },
  scrubberCol: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    top: -14
  },
  scrubber: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#fff'
  }
});
