import React from 'react';
import { View, Button, Image, ActivityIndicator } from 'react-native';

import styles2 from './styles';
import { colors } from '../../styles/colors';

const LoadScreen = ({ fetching, deviceFetch }) => (
  <View style={styles2.layout}>
    <View style={styles2.entryLogo}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../../images/igu-on.png')}
      />
    </View>
    {fetching ? <ActivityIndicator size={50} color={colors.on} /> : <Button title="Buscar IGU" color={colors.on} onPress={deviceFetch} />}
  </View>
);

export default LoadScreen;
