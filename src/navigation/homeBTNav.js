import React from 'react';
import { Image, Text, Dimensions } from 'react-native';
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plusIcon from '../../assets/plus-icon.png';
let tabBarHeight = Dimensions.get('window').height;

const Tab = createBottomTabNavigator();
export default function HomeBottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          height: tabBarHeight * 0.07,
        },
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}
    >
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Entypo name={'home'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={() => {
          return <Text>Search</Text>;
        }}
        options={{
          tabBarIcon: ({ color }) => {
            return <AntDesign name={'search1'} size={25} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return (
              <Image
                source={plusIcon}
                style={{ height: 35, resizeMode: 'contain' }}
              />
            );
          },
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name={'inbox'} size={30} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => {
            return <Ionicons name={'md-person'} size={35} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
