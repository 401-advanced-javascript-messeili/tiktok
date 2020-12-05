import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from './src/screens/home';
import 'react-native-gesture-handler';
import Navigation from './src/navigation';

export default function App() {
  return (
    <>
      <StatusBar Style='light-content' />
      <SafeAreaView style={styles.container}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
