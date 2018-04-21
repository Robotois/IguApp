import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from '../components/home';
import Group from '../components/group';
import Stats from '../components/stats';

const RootStack = StackNavigator(
  {
    Home: {
      screen: Home,
    },
    Group: {
      screen: Group,
    },
    Stats: {
      screen: Stats,
    },
  },
  {
    initialRouteName: 'Home',
  },
);

export default RootStack;
