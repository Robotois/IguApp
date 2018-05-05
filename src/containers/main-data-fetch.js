import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import { GET_GROUPS } from '../apollo/queries';
import { ADD_DEVICE, ADD_GROUP, ADD_STAT } from '../apollo/local/queries';
import '../api/mqtt';
import { deviceListener, deviceSubscriber } from '../api/mqtt/shadow';

const addDevices = (devices, apolloClient, groupId) => devices.map((dev) => {
  deviceSubscriber(dev.iguId);
  apolloClient.mutate({
    mutation: ADD_DEVICE,
    variables: { device: { ...dev, groupId } },
  });
});

const addStats = (stats, apolloClient, groupId) => apolloClient.mutate({
  mutation: ADD_STAT,
  variables: {
    stat: { ...stats },
    groupId,
  },
});

const addGroups = (groups, apolloClient) => groups.map((group) => {
  apolloClient.mutate({
    mutation: ADD_GROUP,
    variables: {
      group: {
        id: group.id,
        title: group.title,
        active: group.active,
      },
    },
  });
  // console.log('groupStats:', group.stats);
  if (group.stats.today !== undefined) {
    addStats(group.stats, apolloClient, group.id);
  }
  addDevices(group.devices, apolloClient, group.id);
  return null;
});

const mainDataFetch = () => (
  <ApolloConsumer>
    {(client) => {
      client.query({ query: GET_GROUPS })
      .then(({ loading, error, data }) => {
        // console.log('mainDataFetch:', data);
        const groups = data.groups || [];
        if (!loading && !error) {
          addGroups(groups, client);
        }
      })
      .then(() => deviceListener(client));
      return false;
    }}
  </ApolloConsumer>
);

export default mainDataFetch;
