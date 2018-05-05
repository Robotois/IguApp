import React from 'react';
import { View } from 'react-native';

import DeviceItem from './device-item';
import { setDevice } from '../../api/mqtt/shadow';

import styles from './styles';

const DevicesList = ({ devices }) => (
  <View style={styles.switchList}>
    {
      devices.map(dev => (<DeviceItem
        key={dev.iguId}
        {...dev}
        toggle={() => setDevice(dev.iguId, dev.active === 1 ? 0 : 1)}
      />))
    }
  </View>
);

export default DevicesList;
