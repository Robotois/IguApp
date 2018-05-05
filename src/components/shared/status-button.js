import React from 'react'
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

const statusMap = {
  1: 'ON',
  0: 'OFF',
};

const MyButton = ({ status, action }) => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      width: 60,
      height: 40,
      borderColor: colors.blue,
      borderRadius: 20,
      justifyContent: 'center',
      backgroundColor: status ? colors.blue : colors.greyDark,
    }}
    onPress={action}
  >
    <Text style={styles.text}>{statusMap[status]}</Text>
  </TouchableOpacity>
);

MyButton.defaultProps = {
  status: true,
};


export default MyButton;
