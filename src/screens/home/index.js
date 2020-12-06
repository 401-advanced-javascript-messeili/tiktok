import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import Post from '../../components/post';
import styles from './styles';
import { API, graphqlOperation } from 'aws-amplify';

import { listPosts } from '../../../graphql/queries';
let bottombarHeight = Dimensions.get('window').height * 0.07;
const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await API.graphql(graphqlOperation(listPosts));
        setPosts(response.data.listPosts.items);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, []);
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
