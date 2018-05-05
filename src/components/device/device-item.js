import React from 'react';
import { ListItem, Icon } from 'react-native-elements';

import StatusButton from '../shared/status-button';
import iconTypes from '../shared/icons';
import { colors } from '../../styles/colors';

const ItemIcon = ({ name, type }) => (
  <Icon
    raised
    size={25}
    name={name}
    type={type}
    color={colors.blue}
  />
);

const DeviceItem = ({ id, title, active, icon, toggle }) => {
  return (
    <ListItem
      title={title}
      leftIcon={<ItemIcon {...iconTypes[icon]} />}
      rightIcon={<StatusButton action={toggle} status={active} />}
    />
  );
};

export default DeviceItem;
