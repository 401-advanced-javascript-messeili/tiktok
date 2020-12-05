import React from 'react';
import { View, Text } from 'react-native';
import Post from '../../components/post';
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Post />
    </View>
  );
};

export default Home;
