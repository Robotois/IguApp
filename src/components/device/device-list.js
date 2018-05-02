import React from 'react';
import { View } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

import iconTypes from '../shared/icons';
import styles from './styles';
import { colors } from '../../styles/colors';
import MyButton from '../shared/my-button';

const ItemIcon = ({ name, type }) => (
  <Icon
    raised
    size={25}
    name={name}
    type={type}
    color={colors.blue}
  />
);

const DeviceList = ({ devices }) => (
  <View style={styles.switchList}>
    {
      devices.map((l, i) => {
        return (
          <ListItem
            key={`item-${i}`}
            title={l.title}
            leftIcon={<ItemIcon {...iconTypes[l.icon]} />}
            rightIcon={<MyButton action={undefined} text={'ON'} />}
          />
        );
      })
    }
  </View>
);

export default DeviceList;
