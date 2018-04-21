import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';


class OnButton extends Component {
 render() {
   return (
     <TouchableOpacity
       style={styles.button}
     >
       <Text style={styles.text}> Encender </Text>
     </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: colors.on,
    width: 150,
    height: 40,
    borderColor: colors.on,
    borderWidth: 3,
    borderRadius: 20,
  },
  text: {
    fontSize: textStyles.isSize3,
    color: colors.whiteBis,
    fontWeight: textStyles.weightNormal,
  },
});

export default OnButton;
