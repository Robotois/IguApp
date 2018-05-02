import GraphQLJSON from 'graphql-type-json';
import { GET_GROUPS } from './queries/index';
// import { GET_DEVICES } from '../graphql/devices';

const resolvers = {
  JSON: GraphQLJSON,
  Query: {
    group: (_, { id }, { cache }) => {
      const { groups } = cache.readQuery({
        query: GET_GROUPS,
      });
      const group = groups.find(g => g.id === id);
      return group;
    },
    // devicesByGroup: (_, { id }, { cache }) => {
    //   const { devices } = cache.readQuery({
    //     query: GET_DEVICES,
    //   });
    //   const newDevices = devices.filter(dev => dev.groupId === id);
    //   return newDevices;
    // },
  },
};

export default resolvers;
