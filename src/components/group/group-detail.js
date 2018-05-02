import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import { Query } from 'react-apollo';

import MyButton from '../shared/my-button';
import { weekChartValues } from '../shared/get-stats';
import Chart from '../charts';
import { colors } from '../../styles/colors';
import { list } from '../../api/group';
import styles from './styles';

import ShortStats from '../shared/short-stats';
import DeviceList from '../device/device-list';

const Group = ({ devices, monthStats, weekStats }) => {
  // console.log('weekStats:', weekChartValues(weekStats));
  return (
  <View style={styles.group}>
    <ScrollView>
      <Chart data={weekChartValues(weekStats)} />
      <ShortStats monthStats={monthStats} weekStats={weekStats} />
      <DeviceList devices={devices} />
    </ScrollView>
  </View>
)};

class RootComponent extends React.Component {
  static navigationOptions = ({ navigation: { state: { params } } }) => {
    return {
      headerTitle: (
        <View style={styles.headerItem}>
          <Text style={styles.headerText}>
            {params.title}
          </Text>
        </View>
      ),
      headerStyle: {
        height: 45,
      },
    };
  }

  render() {
    const { navigation: { state: { params } } } = this.props;
    // console.log('Group params:', params);
    return (
      <Group {...params} />
    )
  }
}

export default RootComponent;
