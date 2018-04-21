import React from 'react';
import { View } from 'react-native';

const Row = ({ style, children }) => (
  <View style={style}>
    {children}
  </View>
);

export default Row;
