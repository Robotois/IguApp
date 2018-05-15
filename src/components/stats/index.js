import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Query } from 'react-apollo';
import { GET_GLOBAL_STATS } from '../../apollo/queries/index';

import Chart from '../charts';
import GroupList from '../group-list';
import ShortStats from '../shared/short-stats';
import { weekChartValues } from '../shared/get-stats';

import styles from './styles';

const Stats = ({ navigation }) => (
  <Query query={GET_GLOBAL_STATS}>
    {({ loading, error, data: { globalStats } }) => {
      // console.log('Global Stats:', globalStats);
      if (loading) return (<Text>Loading...</Text>);
      if (error) return (<Text>Error</Text>);
      return (
        <View style={styles.global}>
          <ScrollView>
            <Chart data={weekChartValues(globalStats)} />
            <ShortStats stats={globalStats} />
            <GroupList navigation={navigation} />
          </ScrollView>
        </View>);
    }}
  </Query>
);

Stats.navigationOptions = {
  headerTitle: (
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>
        Estadísticas
      </Text>
    </View>
  ),
  headerStyle: {
    height: 45,
  },
};

export default Stats;
