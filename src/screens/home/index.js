import React from 'react';
import { View, Text } from 'react-native';
import Post from '../../components/post';
import styles from './styles';

const post = {
  id: 'p1',
  user: {
    id: 'u1',
    username: 'messeiliMe',
    userImage:
      'https://flashmode.me/wp-content/uploads/2017/11/men-haircuts-nice-mens-hair-cut-yes-im-looking-at-the-hair-cut.jpg',
  },
  videoUri: 'https://srv-store5.gofile.io/download/YWOIV8/vid%20(1).mp4',
  description: ' this is my video @Messeili',
  songName: '3ali 3lamazzika',
  songImage:
    'https://flashmode.me/wp-content/uploads/2017/11/men-haircuts-nice-mens-hair-cut-yes-im-looking-at-the-hair-cut.jpg',
  likes: 22,
  comments: 13,
  shares: 500,
};

const Home = () => {
  return (
    <View style={styles.container}>
      <Post post={post} />
    </View>
  );
};

export default Home;
