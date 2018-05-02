import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Query } from 'react-apollo';

import GroupItem from './group-item';
import styles from './styles';
import { GET_GROUPS } from '../../apollo/queries/index';

const GroupList = ({ navigation }) => (
  <Query query={GET_GROUPS}>
    {({ loading, error, data: { groups } }) => {
      // console.log('groups:', groups);
      if (loading) return (<Text>Loading</Text>);
      if (error) return (<Text>Error ...</Text>);
      return (
        <View style={styles.groupList}>
          {
            groups.map(group => (
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
