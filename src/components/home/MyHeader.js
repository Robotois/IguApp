import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';

import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  header: {
    flex: 1,
    minHeight: 200,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
});

const MyHeader = ({ children }) => (
  <View style={styles.header}>
    {children}
  </View>
);

export default MyHeader;
