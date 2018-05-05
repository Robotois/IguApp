import React from 'react';
import { View, ScrollView } from 'react-native';

import { weekChartValues } from '../../utils/state-methods';
import Chart from '../charts';
import styles from './styles';

import ShortStats from '../shared/short-stats';
import DevicesList from '../device/devices-list';

const Group = ({ devices, stats }) => (
  <View style={styles.group}>
    <ScrollView>
      <Chart data={weekChartValues(stats)} />
      <ShortStats stats={stats} />
      <DevicesList devices={devices} />
    </ScrollView>
  </View>
);


export default Group;
