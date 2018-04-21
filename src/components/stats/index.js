import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import MyButton from '../shared/my-button';
import Chart from '../charts';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';
import { list } from '../../api/group';

import ShortStats from './short-stats';
import Categories from '../category/categories';

const ItemIcon = ({ name, type }) => (
  <Icon
    raised
    size={25}
    name={name}
    type={type}
    color={colors.blue}
  />
);

const styles = StyleSheet.create({
  header: {
    flex: 1,
    height: 200,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  headerItem: {
    justifyContent: 'center',
    alignItems: 'center',
    // width: '100%',
  },
  headerText: {
    color: colors.cyan,
    fontWeight: textStyles.weightSemibold,
    fontSize: textStyles.isSize3,
  },
});
const StatHeader = () => (
  <View style={styles.header}>
    <View>
      <Icon
        size={25}
        name="home-outline"
        type="material-community"
        iconStyle={{ color: colors.cyan }}
      />
    </View>
    <View>
      <Text style={styles.headerItem}>
        Estadísticas
      </Text>
    </View>
    <View>
      <Icon
        size={25}
        name="settings-outline"
        type="material-community"
        iconStyle={{ color: colors.cyan }}
      />
    </View>
  </View>
);

const Stats = ({ navigation }) => (
  <View
    style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-start',
          backgroundColor: colors.whiteTer,
        }}
  >
    <Chart />
    <ShortStats />
    <Categories navigation={navigation} />
  </View>
);

Stats.navigationOptions = {
  headerTitle: <View style={styles.headerItem}>
    <Text style={styles.headerText}>
      Estadísticas
    </Text>
  </View>
}

export default Stats;
