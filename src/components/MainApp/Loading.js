import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LoadingScreen = () => (
  <View>
    <ActivityIndicator />
    <StatusBar barStyle="default" />
  </View>
);

export default LoadingScreen;
