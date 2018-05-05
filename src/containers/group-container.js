import React from 'react';
import { Text, View } from 'react-native';
import { Query } from 'react-apollo';

import Group from '../components/group';
import { GET_ALL } from '../apollo/local/queries';
import { devicesByGroup, statsByGroup, getGroup } from '../utils/state-methods';
import styles from '../components/group/styles';

const GroupContainer = ({ groupId }) => (
  <Query query={GET_ALL}>
    {({ loading, error, data: { localGroups, stats, devices } }) => {
      const stat = statsByGroup(stats, groupId);
      const devs = devicesByGroup(devices, groupId);
      return <Group devices={devs} stats={stat} />;
    }}
  </Query>
);

class RootComponent extends React.Component {
  static navigationOptions = ({ navigation: { state: { params } } }) => {//eslint-disable-line
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
    // console.log('Render Group!', this.props.navigation);
    return (
      <GroupContainer {...params} />
    )
  }
}

export default RootComponent;
