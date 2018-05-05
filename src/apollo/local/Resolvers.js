import gql from 'graphql-tag';
import GraphQLJSON from 'graphql-type-json';

import { GET_DEVICES, GET_GROUPS, GET_STATS } from './queries';
// import { deviceListener } from '../../api/mqtt/shadow';

export const groupDevices = (devices, groupId) => devices.filter(dev => dev.groupId === groupId);

let statId = 1;

const statTemplate = {
  lun: 0,
  mar: 0,
  mie: 0,
  jue: 0,
  vie: 0,
  sab: 0,
  dom: 0,
  today: 0,
  month: 0,
  total: 0,
};

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    device: (_, { id }, { cache }) => {
      const { devices } = cache.readQuery({ query: GET_DEVICES });
      const device = devices.find(dev => dev.id === id);
      // console.log('local device:', device);
      return device;
    },
    groupDevices: (_, { groupId }, { cache }) => {
      const { devices } = cache.readQuery({ query: GET_DEVICES });
      // console.log('allDevices:', devices);
      const myDevices = devices.filter(dev => dev.groupId === groupId);
      console.log('groupDevices:', myDevices);
      return myDevices;
    },
  },
  Mutation: {
    addGroup: (_, { group }, { cache }) => {
      const previous = cache.readQuery({ query: GET_GROUPS });
      const newGroup = {
        ...group,
        __typename: 'LocalGroup',
      };
      const data = {
        localGroups: previous.localGroups.concat([newGroup]),
      };
      cache.writeData({ data });
      // console.log('added Group:', newGroup);
      return newGroup;
    },
    addStat: (_, { stat, groupId }, { cache }) => {
      const previous = cache.readQuery({ query: GET_STATS });
      // console.log('adding stats:', stat, groupId);
      const newStat = {
        ...statTemplate,
        ...stat,
        groupId,
        id: statId,
        __typename: 'Stat',
      };
      const data = {
        stats: previous.stats.concat([newStat]),
      };
      cache.writeData({ data });
      // console.log('added Stat:', newStat);
      statId++;
      return newStat;
    },
    addDevice: (_, { device }, { cache }) => {
      const previous = cache.readQuery({ query: GET_DEVICES });
      // deviceListener(device.id, (topic, message) => console.log('MQTT Message:', topic, message));
      // console.log('addDevice:', device);
      if (previous.devices.find(dev => dev.id === device.id)) {
        return null;
      }
      const newDevice = {
        ...device,
        __typename: 'Device',
      };
      const data = {
        devices: previous.devices.concat([newDevice]),
      };
      cache.writeData({ data });
      // console.log('added device:', newDevice);
      return newDevice;
    },
    updateDevice: (_, { iguId, active }, { cache }) => {
      // console.log('Update request:', iguId);
      const { devices } = cache.readQuery({ query: GET_DEVICES });
      const myDevice = devices.find(dev => dev.iguId === iguId);
      const myId = `Device:${myDevice.id}`;
      const fragment = gql`
        fragment updateDevice on Device {
          iguId
          active
        }
      `;
      const device = cache.readFragment({ fragment, id: myId });
      // console.log('fragment:', device);
      const data = { ...device, active };
      cache.writeData({ id: myId, data });
      return data;
    },
    toggleDevice: (_, variables, { cache }) => {
      // console.log('toggleVariables:', variables);
      const id = `Device:${variables.id}`;
      const fragment = gql`
        fragment updateDevice on Device {
          id
          active
        }
      `;
      const device = cache.readFragment({ fragment, id });
      // console.log('fragment:', device);
      const data = {
        ...device,
        active: device.active === 1 ? 0 : 1,
      };
      cache.writeData({ id, data });
      console.log('Toggle!');
      return data;
    },
  },
  LocalGroup: {
    stat: (_, { groupId }, { cache }) => {
      const { stats } = cache.readQuery({ query: GET_STATS });
      const stat = stats.find(st => st.groupId === groupId);
      // console.log('local device:', device);
      return stat;
    },
  },
};

export default resolvers;
