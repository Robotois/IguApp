import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';
import MyButton from '../shared/my-button';
import Chart from '../charts';
import { colors } from '../../styles/colors';
import { textStyles } from '../../styles/text';
import { list } from '../../api/group';

import ShortStats from './short-stats';
import setSwitch, { updateSwitch, getSwitch } from '../../api/mqtt';

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

const ItemIcon = ({ name, type }) => (
  <Icon
    raised
    size={25}
    name={name}
    type={type}
    color={colors.blue}
  />
);

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
        Grupo
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

const statusText = ['OFF', 'ON'];
class Groups extends React.Component {
  constructor() {
    super();
    this.state = {
      switch1: 0,
      switch2: 0,
    };
  }
  componentDidMount() {
    const self = this;
    getSwitch(1);
    getSwitch(2);
    updateSwitch(1, (status) => {
      self.setState({
        ...self.state,
        switch1: status,
      });
      // alert(`switch1: ${status}`);
    });
    updateSwitch(2, (status) => {
      self.setState({
        ...self.state,
        switch2: status,
      });
      // alert(`switch2: ${status}`)
    });
  }
  render() {
    return (
      <View
        style={{
          width: '100%',
          maxHeight: '55%',
          backgroundColor: colors.whiteTer,
          paddingTop: 10,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <ScrollView>
          {
            list.map((l, i) => {
              const toggle = this.state[`switch${i + 1}`] === 0 ? 1 : 0;
              const action = i < 2 ? () => setSwitch(i + 1, toggle) : undefined;
              const text = i < 2 ? statusText[this.state[`switch${i + 1}`]] : 'ON';
              return (
                <ListItem
                  key={`item-${i}`}
                  title={l.name}
                  leftIcon={<ItemIcon {...l.icon} />}
                  rightIcon={<MyButton action={action} text={text} />}
                />
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
}
const Group = () => (
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
    <Groups />
  </View>
);

Group.navigationOptions = {
  headerTitle: (
    <View style={styles.headerItem}>
      <Text style={styles.headerText}>
        Grupo
      </Text>
    </View>
  ),
}

export default Group;
