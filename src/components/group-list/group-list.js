import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Query } from 'react-apollo';

import GroupItem from './group-item';
import styles from './styles';
import { GET_GROUPS } from '../../apollo/local/queries';

const GroupList = ({ navigation }) => (
  <Query query={GET_GROUPS}>
    {({ loading, error, data }) => {
      // console.log('render GroupList!', navigation);
      // console.log('group list:', data);
      if (loading) return (<Text>Loading</Text>);
      if (error) return (<Text>Error ...</Text>);
      if (!data.localGroups) return (<Text>Loading</Text>);
      return (
        <View style={styles.groupList}>
          {
            data.localGroups.map(group => (
              <GroupItem
                key={group.title}
                {...group}
                navigate={navigation.navigate}
              />
            ))
          }
        </View>
      );
      }}
  </Query>
);

const RootComponent = ({ navigation }) => (
  <View style={styles.root}>
    <ScrollView>
      <GroupList navigation={navigation} />
    </ScrollView>
  </View>
);

RootComponent.defaultProps = {
  // list: categoryList,
};

export default RootComponent;
