import React from 'react';
import { Text, View } from 'react-native';
import { Query } from 'react-apollo';

import DevicesList from '../components/device/devices-list';
import { GET_DEVICES } from '../apollo/local/queries';
import { groupDevices } from '../apollo/local/Resolvers';
// import DeviceItem from '../components/device/device-item';
// import styles from '../components/device/styles';

const DevicesListContainer = ({ groupId }) => (
  <Query query={GET_DEVICES}>
    {({ data: { devices } }) => {
      const finalDevices = groupId !== undefined ? groupDevices(devices, groupId) : devices;
      // console.log('groupDevices:', finalDevices);
      if (!finalDevices) return <Text>None</Text>;
      // return (
      //   <View style={styles.switchList}>
      //     {
      //       finalDevices.map(dev => <DeviceItem key={dev.iguId} {...dev} />)
      //     }
      //   </View>
      // );
      return (
        <DevicesList devices={finalDevices} />
      );
    }}
  </Query>
);

export default DevicesListContainer;
