import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../styles/colors';

import styles from './styles';

const IconComponent = ({ active, navigate }) => (
  <Icon
    raised
    name="bed"
    type="font-awesome"
    iconStyle={{ color: active > 0 ? colors.on : colors.off }}
    onPress={navigate}
  />
);

const GroupItem = ({ title, active, navigate, ...rest }) => (
  <View style={styles.groupItem}>
    <IconComponent
      active={active}
      navigate={() => navigate('Group', {
        title,
        active,
        ...rest
      })}
    />
    <Text style={styles.itemTitle}>
      {title}
    </Text>
    <Text style={styles.itemSubtitle}>
      {active} dispositivos activos
    </Text>
  </View>
);

GroupItem.defaultProps = {
  title: 'Recamara',
  active: 2,
};

export default GroupItem;
