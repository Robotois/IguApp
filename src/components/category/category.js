import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';

const IconComponent = ({ active, navigate }) => (
  <Icon
    raised
    name="bed"
    type="font-awesome"
    // color={active > 0 ? colors.on : colors.off}
    iconStyle={{ color: active > 0 ? colors.on : colors.off }}
    onPress={() => navigate()}
  />
);

const Category = ({ title, active, navigate }) => (
  <View style={{ width: 175, height: 175, alignItems: 'center' }}>
    <IconComponent active={active} navigate={navigate} />
    <Text style={{ fontSize: textStyles.isSize4, fontWeight: textStyles.weightMedium, color: colors.blackTer }}>
      {title}
    </Text>
    <Text style={{ fontSize: textStyles.isSize5, color: colors.grey }}>
      {active} dispositivos activos
    </Text>
  </View>
);

Category.defaultProps = {
  title: 'Recamara',
  active: 2,
};

export default Category;
