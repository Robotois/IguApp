import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    minHeight: 75,
  },
});

const StatValue = ({ value, period }) => (
  <View>
    <Text style={{ color: colors.cyan, fontWeight: textStyles.weightSemibold, fontSize: textStyles.isSize4 }}>
      {value} kWh
    </Text>
    <Text style={{ color: colors.greyDark, fontSize: textStyles.isSize5 }}>
      {period}
    </Text>
  </View>
);

const Stats = ({ weekStats, monthStats }) => (
  <View style={styles.row}>
    <StatValue value={weekStats.today || 0} period="Hoy" />
    <StatValue value={weekStats.total || 0} period="Semanal" />
    <StatValue value={monthStats || 0} period="Mensual" />
  </View>
);

export default Stats;
