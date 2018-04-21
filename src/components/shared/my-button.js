import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.blue,
    width: 60,
    height: 40,
    borderColor: colors.blue,
    borderRadius: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: textStyles.isSize4,
    color: colors.whiteBis,
    fontWeight: textStyles.weightNormal,
  },
});

const MyButton = ({ text, action }) => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      width: 60,
      height: 40,
      borderColor: colors.blue,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: text === 'ON' ? colors.blue : colors.greyDark,
    }}
    onPress={action}
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

MyButton.defaultProps = {
  text: 'ON',
};


export default MyButton;
