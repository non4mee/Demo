import React, { useState, useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
// import Video from 'react-native-video'
import VideoPlayer from 'react-native-video-controls';
import Sound from 'react-native-sound'

Sound.setCategory('Playback');

const ding = new Sound('audio.mp3', Sound.MAIN_BUNDLE, (error) => {
if (error) {
    console.log('failed to load the sound', error);
    return;
  }
  console.log('duration in seconds: ' + ding.getDuration() + 'number of channels: ' + ding.getNumberOfChannels());
});


export default function SecondScreen({ navigation }) {
  useEffect(() => {
      playPause()
      ding.setVolume(1);
      return () => {
        ding.release();
      };
    }, []);
    const playPause = () => {
      ding.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    };
  return (
    <View style={styles.container}>
      {/*
        <Video
          source={require('../video/video.mov')}
          style={styles.video}
          repeat={true}
          // onEnd={() => navigation.navigate('ThirdScreen')}
        />
        */}
      <VideoPlayer
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  video: {
    width: '80%',
    height: '80%'
  },
  btn: {
    width: 200,
    height: 100,
    backgroundColor: 'red'
  }
});
