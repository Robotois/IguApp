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
    paddingBottom: 50
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
)

const Stats = () => (
  <View style={styles.row}>
    <StatValue value={15} period="Hoy" />
    <StatValue value={50} period="Semanal" />
    <StatValue value={180} period="Mensual" />
  </View>
);

export default Stats;
