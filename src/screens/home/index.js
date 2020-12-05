import React from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import Post from '../../components/post';
import styles from './styles';
import posts from '../../../data/posts';
let bottombarHeight = Dimensions.get('window').height * 0.07;
const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={{ marginBottom: bottombarHeight }}
        data={posts}
        renderItem={({ item, index }) => <Post post={item} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - bottombarHeight}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
