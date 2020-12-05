import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Video } from 'expo-av';
import styles from './styles';

export default function Post() {
  const [paused, setPaused] = useState(false);
  const onPlayPause = () => {
    setPaused(!paused);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPause}>
        <Video
          source={{
            uri: 'https://srv-store5.gofile.io/download/YWOIV8/vid%20(1).mp4',
          }}
          // rate={1.0}
          // volume={1.0}
          isMuted={true}
          resizeMode='cover'
          shouldPlay={paused}
          isLooping
          style={styles.backgroundVideo}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}
