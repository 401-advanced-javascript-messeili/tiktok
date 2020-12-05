import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Video } from 'expo-av';
import styles from './styles';

export default function Post(props) {
  const [paused, setPaused] = useState(true);
  const [post, setPost] = useState(props.post);
  const [isLiked, setIsliked] = useState(false);
  console.log('====================================');
  console.log(props.post);
  console.log('====================================');
  const onPlayPause = () => {
    setPaused(!paused);
  };
  let likesToAdd = isLiked ? -1 : 1;
  const onLikePress = () => {
    setPost({ ...post, likes: post.likes + likesToAdd });
    setIsliked(!isLiked);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPause}>
        <Video
          source={{
            uri: post.videoUri,
          }}
          rate={1.0}
          // volume={1.0}
          orientation='portrait'
          isMuted={true}
          resizeMode='cover'
          shouldPlay={paused}
          isLooping
          style={styles.backgroundVideo}
        />
      </TouchableWithoutFeedback>

      <View style={styles.ui}>
        <View style={styles.sideUi}>
          <View style={styles.profilePicContainer}>
            <Image
              style={styles.profilePic}
              source={{
                uri: post.user.userImage,
              }}
            />
          </View>
          <TouchableOpacity style={styles.iconsContainer} onPress={onLikePress}>
            <AntDesign
              name='heart'
              size={30}
              color={isLiked ? 'red' : 'white'}
            />
            <Text style={styles.statsLabel}>{post.likes}</Text>
          </TouchableOpacity>
          <View style={styles.iconsContainer}>
            <FontAwesome name='commenting' size={30} color='white' />
            <Text style={styles.statsLabel}>{post.comments}</Text>
          </View>
          <View style={styles.iconsContainer}>
            <Fontisto name='share-a' size={28} color='white' />
            <Text style={styles.statsLabel}>{post.shares}</Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <View>
            <Text style={styles.handle}>{post.user.username}</Text>
            <Text style={styles.description}>{post.description}</Text>

            <View style={styles.songRow}>
              <Icon name='beamed-note' size={24} color='white' />
              <Text style={styles.songName}>{post.songName}</Text>
            </View>
          </View>
          <Image
            style={styles.songImage}
            source={{
              uri: post.songImage,
            }}
          />
        </View>
      </View>
    </View>
  );
}
