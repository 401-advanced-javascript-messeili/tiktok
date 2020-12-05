import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/home';

function ExampleView(props) {
  return <Icon name='ios-person' size={30} color='#4F8EF7' />;
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ExampleView /> */}
      <Home />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
