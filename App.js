import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/home';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';
import Amplify, { Auth } from 'aws-amplify';
import config from './aws-exports';
import { API, graphqlOperation } from 'aws-amplify';
import { createUser } from './graphql/mutations';
import { getUser } from './graphql/queries';
import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

const App = () => {
  useEffect(() => {
    const fetchUser = async () => {
      const userInfo = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      if (!userInfo) {
        return;
      }
      console.log('Hiiiiiiiiiiii2', userInfo.attributes.sub);

      const getUserResponse = await API.graphql(
        graphqlOperation(getUser, { id: userInfo.attributes.sub })
      );
      console.log(getUserResponse.data.getUser);

      if (getUserResponse.data.getUser) {
        console.log('user already regestered');
      } else {
        const newUser = {
          id: userInfo.attributes.sub,
          username: userInfo.username,
          email: userInfo.attributes.email,
        };
        await API.graphql(graphqlOperation(createUser, { input: newUser }));
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <StatusBar Style='light-content' />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default withAuthenticator(App);
